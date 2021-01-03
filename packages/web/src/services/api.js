import { ApolloClient, InMemoryCache } from '@apollo/client';

const api = new ApolloClient({
    uri: 'http://localhost:3000',
    cache: new InMemoryCache()
});

export default api;