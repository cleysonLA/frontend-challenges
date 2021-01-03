import GlobalStyle from '../../styles/global';

function App({ children }) {
    return (
        <div>
            <GlobalStyle/>
            { children }
        </div>
    );
}

export default App;