import { useState, useRef, useEffect } from 'react';
import { useLazyQuery, gql } from "@apollo/client";
import ProductPreviewCard from '../../components/ProductPreviewCard';
import { Link } from 'react-router-dom';
import { ProductsContainer, HomeTitle } from './styles';
 
const GET_PRODUCTS = gql`
    query ($page: Int, $perPage: Int) {
        allSkus(page: $page, perPage: $perPage) {
            id,
            name,
            imageUrl,
            salePrice,
            promotionalPrice,
        }
    }
`;

function Home() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(-1);

    const loader = useRef(null);

    const [getProductsPerPage, { loading }] = useLazyQuery(GET_PRODUCTS, {
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

    function handleProducts(productsPerPage) {
        const productsFormatted = productsPerPage.reduce((productsReduced, product) => {
            const { salePrice, promotionalPrice } = product;

            productsReduced.push({
                ...product,
                salePrice: priceFormatter(salePrice),
                promotionalPrice: salePrice === promotionalPrice ? null : priceFormatter(promotionalPrice),
            });

            return productsReduced;
        }, []);

        setProducts([...products, ...productsFormatted]);
    }

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {   
            setPage((page) => page + 1)
        }
    }

    useEffect(() => {
        var options = {
           root: null,
           rootMargin: "20px",
           threshold: 1.0
        };
       
        const observer = new IntersectionObserver(handleObserver, options);

        if (loader.current) {
           observer.observe(loader.current)
        }
   }, []);

    useEffect(() => {
        getProductsPerPage({
            variables: {
                page,
                perPage: 10,
            },
        })
    }, [getProductsPerPage, page])

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

            <div ref={loader} />
        </div>
    );
}

export default Home;
