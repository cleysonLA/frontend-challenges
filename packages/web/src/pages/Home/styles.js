import styled from 'styled-components';
import { Title } from '../../styles/placeholders';

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-auto-rows: 90px;
    gap: 10px;
    justify-content: center;
`;

export const HomeTitle = styled(Title)`
    margin-bottom: 10px;
`