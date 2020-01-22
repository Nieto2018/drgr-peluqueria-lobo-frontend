import { fetchQuery, graphql } from 'relay-runtime';

import environment from '../Environment'

const query = graphql`
    query MeQuery{
      me{
          id
          email
          firstName
          isStaff
        }
    }
`

export default (callback) => {
    fetchQuery(environment, query, null)
        .then(data => callback(data))
}