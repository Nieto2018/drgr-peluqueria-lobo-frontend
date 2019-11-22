/**
 * @flow
 * @relayHash dff7a17cdfa5611d02ea2bae05d5eb1b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginQueryVariables = {||};
export type LoginQueryResponse = {|
  +me: ?{|
    +id: string,
    +username: string,
  |}
|};
export type LoginQuery = {|
  variables: LoginQueryVariables,
  response: LoginQueryResponse,
|};
*/


/*
query LoginQuery {
  me {
    id
    username
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
        "name": "username",
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
    "name": "LoginQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "LoginQuery",
    "id": null,
    "text": "query LoginQuery {\n  me {\n    id\n    username\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3f41c4428df249bc08acbc379047addf';
module.exports = node;
