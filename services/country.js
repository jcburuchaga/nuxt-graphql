import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { gql } from "apollo-boost";

import Config from '@/config/default';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: Config.GraphQLApiUri,
});

const client = new ApolloClient({ 
  cache: cache,
  link: link, 
});

const getAllCountries = () => {
   const query = gql`query {
    Country {
      name
      flag { emoji }
      currencies { 
        name
        _id 
       }
    }
  }`;

   return client
    .query({ query });
}

const getCountriesByArea = (area) => {
  const query = gql`query {
   Country(area:${area}){
     name
     flag { emoji }
     currencies { 
       name
       _id 
      }
   }
 }`;

  return client
   .query({ query });
}
export default {
    getAllCountries,
    getCountriesByArea
};
