import { Container, Img, Title, Price, OldPrice } from './styles';
import ImagePlaceholder from '../../assets/image-placeholder.svg';

function ProductPreviewCard({ product }) {
    return (
        <Container>
            <Img src={product?.imageUrl || ImagePlaceholder} alt={product?.name} />

            <div>
                <Title as="h2">{product?.name}</Title>

                {product?.promotionalPrice 
                    ?
                        <Price> 1 x <OldPrice as="span">{product?.salePrice} </OldPrice> por {product?.promotionalPrice} </Price>
                    :
                        <Price>1 x {product?.salePrice}</Price>
                }
            </div>
        </Container>
    );
}
  
export default ProductPreviewCard;
  