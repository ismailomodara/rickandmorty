import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
});

export const getCharacters = (query) => {

    client
        .query({
            query: gql`
                query characters($page: Int) {
                    results {
                      name,
                      status,
                      species,
                      image
                    }
                  },
                  
                `,
        })
        .then(result => console.log(result));
}

getCharacters({ page: 1 });
