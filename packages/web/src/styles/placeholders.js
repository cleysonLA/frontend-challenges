import styled from 'styled-components';
import { colors, fonts } from './index';

export const Text = styled.p`
    font-weight: ${fonts.regular};
    line-height: 20px;
    color: ${colors.primary};
`;

export const Title = styled(Text)`
    font-size: 21px;
    line-height: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
`;