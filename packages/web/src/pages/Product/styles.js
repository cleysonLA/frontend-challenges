import styled from 'styled-components';
import { Title, Text } from '../../styles/placeholders';
import { colors } from '../../styles';

export const ProductTitle = styled(Title)`
    margin: 10px 0 10px 0;
`;

export const ProductText = styled(Text)`
    font-size: 15px;
    color: ${colors.secondary};
`;

export const ReturnButton = styled(ProductText)`
    color: ${colors.grey};

    img {
        margin-right: 7px;
    }
`;

export const Img = styled.img`
    width: 196px;
    height: 183px;
`;

export const Button = styled.button`
    width: 154px;
    height: 36px;
    border-radius: 3px;
    background-color: ${colors.green};
    border: none;
    color: #FFF;
    font-size: 15px;
    float: right;
    margin-top: 10px;
`;

export const Input = styled.input`
    height: 30px;
    border: 1px solid #C4CDD5;
    border-radius: 3px;
    box-shadow: inset 0px 1px 2px rgba(102, 113, 123, 0.21);
`;

export const QuantityInput = styled(Input)`
    width: 92px;
`;

export const PriceInput = styled(Input)`
    width: 138px;
`;

export const MeasureInput = styled(Input)`
    width: 63px;
`;

export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const MeasureLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px; 

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 95px;
    }
`;

export const QuantityButton = styled.button`
    width: 85px;
    height: 30px;
    border: 1px solid #C4CDD5;
    border-radius: 3px;
`;

export const QuantityContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
`;