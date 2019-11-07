import { execute } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws'

const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

// const store = new Store(new RecordSource())

const fetchQuery = (operation, variables) => {
  return fetch('http://localhost:8000/graphql/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
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
const GRAPHQL_SUBSCRIPTION_ENDPOINT = 'ws://localhost:8000/subscriptions/';

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
