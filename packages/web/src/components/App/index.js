import GlobalStyle from '../../styles/global';
import { Container } from './styles';

function App({ children }) {
    return (
        <Container>
            <GlobalStyle/>
            { children }
        </Container>
    );
}

export default App;