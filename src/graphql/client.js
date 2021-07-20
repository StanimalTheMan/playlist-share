import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: "ws://playlist-share-app.herokuapp.com/v1/graphql",
    options: {
      reconnect: true,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
