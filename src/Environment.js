import { execute } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { GRAPHQL_URL, GRAPHQL_SUBSCRIPTION_WS, G_AUTH_TOKEN } from './Constants'

const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

const fetchQuery = (operation, variables) => {
  return fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `JWT ${localStorage.getItem(G_AUTH_TOKEN)}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}


// Subscriptions implementation reference: https://github.com/jeremy-colin/relay-examples-subscription/blob/master/js/environment.js
const GRAPHQL_SUBSCRIPTION_ENDPOINT = GRAPHQL_SUBSCRIPTION_WS;

const subscriptionClient = new SubscriptionClient(GRAPHQL_SUBSCRIPTION_ENDPOINT, {
  reconnect: true,
});

const subscriptionLink = new WebSocketLink(subscriptionClient);

// Prepar network layer from apollo-link for graphql subscriptions
const networkSubscriptions = (operation, variables) =>
  execute(subscriptionLink, {
    query: operation.text,
    variables,
  });

export default new Environment({
  network: Network.create(fetchQuery, networkSubscriptions),
  store: new Store(new RecordSource()),
});
