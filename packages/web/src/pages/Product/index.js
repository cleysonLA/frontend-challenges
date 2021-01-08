import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery, gql, useMutation } from '@apollo/client';
import ImagePlaceholder from '../../assets/image-placeholder.svg';
import ArrowIcon from '../../assets/ArrowIcon.svg';
import PlusIcon from '../../assets/PlusIcon.svg';
import MinusIcon from '../../assets/MinusIcon.svg';
import { ReturnButton, ProductTitle, Img, Button, QuantityInput, PriceInput, MeasureInput, PriceContainer, ProductText, MeasureLabel, QuantityButton, QuantityContainer, ImgContainer } from './styles';

const GET_PRODUCT = gql`
    query ($productId: ID!) {
        Sku(id: $productId) {
            id,
            name,
            imageUrl,
            package,
            salePrice,
            promotionalPrice,
            quantity,
        }
    }
`;

const UPDATE_PRODUCT = gql`
    mutation (
        $id: ID!
        $name: String!
        $package: JSON!
        $salePrice: Int!
        $promotionalPrice: Int!
        $quantity: Int!
    ) {
        updateSku(
            id: $id
            name: $name
            package: $package
            salePrice: $salePrice
            promotionalPrice: $promotionalPrice
            quantity: $quantity
        ) {
            id,
        }
    }
`;

function Product() {
    const [product, setProduct] = useState({});

    const { productId } = useParams();
    const history = useHistory();

    const { loading } = useQuery(GET_PRODUCT, {
        variables: {
            productId
        },
        onCompleted: (data) => {
            const { Sku } = JSON.parse(JSON.stringify(data));

            setProduct(Sku);
        },
    })

    const [updateProduct] = useMutation(UPDATE_PRODUCT);

    async function handleSubmit(e) {
        e.preventDefault();

        const {
            id,
            name,
            package: productPackage,
            salePrice,
            promotionalPrice,
            quantity,
        } = product;

        await updateProduct({
            variables: {
                id,
                name,
                package: productPackage,
                salePrice,
                promotionalPrice,
                quantity,
            },
        })
    }

    function handleInput(event) {
        const { name, value } = event.target;

        const productToUpdate = {...product};

        productToUpdate[name] = value;

        setProduct(productToUpdate);
    }

    function handlePackageMeasure(event) {
        const { name, value } = event.target;

        const productToUpdate = {...product};

        productToUpdate.package[name] = value;

        setProduct(productToUpdate);
    }

    function handleQuantity(quantity) {
        const productToUpdate = {...product};

        if (quantity < 0) return;

        productToUpdate.quantity = quantity;

        setProduct(productToUpdate);
    }

    return (
        <div>
            <ReturnButton type="button" onClick={() => history.push('/')}>
                <img src={ArrowIcon} alt="return button" />
                Produtos
            </ReturnButton>

            {!loading && 
                <div>
                    <ProductTitle>{product?.name}</ProductTitle>

                    <ImgContainer>
                        <Img src={product?.imageUrl || ImagePlaceholder} alt={product?.name} />
                    </ImgContainer>


                    <form onSubmit={handleSubmit}>

                        <QuantityContainer>
                            <label htmlFor="quantity">
                                <ProductText>Estoque</ProductText>

                                <QuantityInput
                                    id="quantity"
                                    placeholder="Estoque"
                                    type="number"
                                    name="quantity"
                                    value={product?.quantity || 0}
                                    onChange={(e) => handleInput(e)}
                                />
                            </label>

                            <div>
                                <QuantityButton type="button" onClick={() => handleQuantity(product?.quantity + 1)}>
                                    <img src={PlusIcon} alt="add quantity" />
                                </QuantityButton>
                                
                                <QuantityButton type="button" onClick={() => handleQuantity(product?.quantity - 1)}>
                                    <img src={MinusIcon} alt="remove quantity" />
                                </QuantityButton>
                            </div>
                        </QuantityContainer>

                        <PriceContainer>
                            <label htmlFor="salePrice">
                                <ProductText>Preço de venda</ProductText>

                                <PriceInput
                                    id="salePrice"
                                    placeholder="R$ 39,90"
                                    type="number"
                                    name="salePrice"
                                    value={product?.salePrice || 0}
                                    onChange={(e) => handleInput(e)}
                                />
                            </label>

                            <label htmlFor="promotionalPrice">
                                <ProductText>Preço promocional</ProductText>

                                <PriceInput
                                    id="promotionalPrice"
                                    placeholder="R$ 34,90"
                                    type="number"
                                    name="promotionalPrice"
                                    value={product?.promotionalPrice || 0}
                                    onChange={(e) => handleInput(e)}
                                />
                            </label>
                        </PriceContainer>

                        <MeasureLabel htmlFor="weight">
                            <ProductText>Peso</ProductText>

                            <div>
                                <MeasureInput
                                    id="weight"
                                    placeholder="3000"
                                    type="number"
                                    name="weight"
                                    value={product?.package?.weight || 0}
                                    onChange={(e) => handlePackageMeasure(e)}
                                />

                                <ProductText>kg</ProductText>
                            </div>
                        </MeasureLabel>

                        <MeasureLabel htmlFor="height">
                            <ProductText>Altura</ProductText>

                            <div>
                                <MeasureInput
                                    id="height"
                                    placeholder="3"
                                    type="number"
                                    name="height"
                                    value={product?.package?.height || 0}
                                    onChange={(e) => handlePackageMeasure(e)}
                                />

                                <ProductText>cm</ProductText>
                            </div>
                        </MeasureLabel>

                        <MeasureLabel htmlFor="width">
                            <ProductText>Largura</ProductText>

                            <div>
                                <MeasureInput
                                    id="width"
                                    placeholder="4"
                                    type="number"
                                    name="width"
                                    value={product?.package?.width || 0}
                                    onChange={(e) => handlePackageMeasure(e)}
                                />

                                <ProductText>cm</ProductText>
                            </div>
                        </MeasureLabel>

                        <MeasureLabel htmlFor="depth">
                            <ProductText>Profundidade</ProductText>

                            <div>
                                <MeasureInput
                                    id="depth"
                                    placeholder="5"
                                    type="number"
                                    name="depth"
                                    value={product?.package?.depth || 0}
                                    onChange={(e) => handlePackageMeasure(e)}
                                />

                                <ProductText>cm</ProductText>
                            </div>
                        </MeasureLabel>

                        <Button type="submit">
                            Salvar alterações
                        </Button>
                    </form>
                </div>
            }
        </div>
    );
}

export default Product;
