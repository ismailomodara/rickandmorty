import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
}

export const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
});

export const getCharacters = (query) => {
console.log(query)
    return client.query({
        query:
            gql`
                query characters($page: Int, $filterName: String ) {
                    characters(page: $page, filter: { name: $filterName }){
                        results {
                          name,
                          status,
                          image,
                          origin {
                            name
                          }
                        }
                    },
                },
                `,

        variables: { page: query.page, filterName: query.filterName }
    })
}
