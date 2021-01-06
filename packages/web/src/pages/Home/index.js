import { useState } from 'react';
import { useQuery, gql } from "@apollo/client";
import ProductPreviewCard from '../../components/ProductPreviewCard';
import { Link } from 'react-router-dom';
import { ProductsContainer, HomeTitle } from './styles';
 
const GET_ALL_PRODUCTS = gql`
    query {
        allSkus {
            id
            name
            imageUrl
            salePrice
            promotionalPrice
        }
    }
`;

function Home() {
    const [products, setProducts] = useState([]);

    const { loading } = useQuery(GET_ALL_PRODUCTS, {
        onCompleted: (data) => {
            const { allSkus } = data;

            handleProducts(allSkus);
        }
    });

    function priceFormatter(price) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price);
    }

    function handleProducts(products) {
        const productsFormatted = products.reduce((productsReduced, product) => {
            const { salePrice, promotionalPrice } = product;

            productsReduced.push({
                ...product,
                salePrice: priceFormatter(salePrice),
                promotionalPrice: salePrice === promotionalPrice ? null : priceFormatter(promotionalPrice),
            });

            return productsReduced;
        }, []);

        setProducts(productsFormatted);
    }

    return (
        <div>
            <HomeTitle as="h1">Produtos</HomeTitle>

            <ProductsContainer>
                {!loading && 
                    products.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                            <ProductPreviewCard product={product} />
                        </Link>
                    ))
                }
            </ProductsContainer>
        </div>
    );
}

export default Home;
