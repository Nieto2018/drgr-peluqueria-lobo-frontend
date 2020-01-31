/**
 * @flow
 * @relayHash 5d12b818dab5186d47c1d082f9688f57
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MeQueryVariables = {||};
export type MeQueryResponse = {|
  +me: ?{|
    +id: string,
    +email: string,
    +firstName: string,
    +isStaff: boolean,
  |}
|};
export type MeQuery = {|
  variables: MeQueryVariables,
  response: MeQueryResponse,
|};
*/


/*
query MeQuery {
  me {
    id
    email
    firstName
    isStaff
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "me",
    "storageKey": null,
    "args": null,
    "concreteType": "UserType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "email",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "firstName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "isStaff",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MeQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "MeQuery",
    "id": null,
    "text": "query MeQuery {\n  me {\n    id\n    email\n    firstName\n    isStaff\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0844277746d18b8cdeb3691f6f4b83cb';
module.exports = node;
