import styled from 'styled-components';
import { colors } from '../../styles';
import { Text, Title } from '../../styles/placeholders';

export const Container = styled.div`
    display: flex;
    padding: 10px;
    border: 1px solid #DFE3E8;
    height: 100%;
`;

export const Img = styled.img`
    width: 48px;
    height: 45px;
    margin-right: 10px;
`;

export const ProductTitle = styled(Title)`
    font-size: 15px;
    line-height: 20px;
`;

export const Price = styled(Text)`
    font-size: 13px;
    color: ${colors.secondary};
`;

export const OldPrice = styled(Price)`
    text-decoration: line-through;
    color: ${colors.grey};
`;