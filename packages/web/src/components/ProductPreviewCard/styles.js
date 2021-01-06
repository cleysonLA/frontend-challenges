import styled from 'styled-components';
import { colors } from '../../styles';
import { Text } from '../../styles/placeholders';

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

export const Title = styled(Text)`
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
`;

export const Price = styled(Text)`
    font-size: 13px;
    color: ${colors.secondary};
`;

export const OldPrice = styled(Price)`
    text-decoration: line-through;
    color: ${colors.grey};
`;