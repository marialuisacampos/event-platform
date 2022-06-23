import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/cl4pvusuf2qz601w7h88lfo3k/master',
  cache: new InMemoryCache()
})