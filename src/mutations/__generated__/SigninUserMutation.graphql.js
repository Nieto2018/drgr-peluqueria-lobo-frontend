/**
 * @flow
 * @relayHash c96ae9681e8660b357425aaa73cec1bf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SigninUserMutationVariables = {|
  email: string,
  password: string,
|};
export type SigninUserMutationResponse = {|
  +tokenAuth: ?{|
    +token: string
  |}
|};
export type SigninUserMutation = {|
  variables: SigninUserMutationVariables,
  response: SigninUserMutationResponse,
|};
*/


/*
mutation SigninUserMutation(
  $email: String!
  $password: String!
) {
  tokenAuth(email: $email, password: $password) {
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "tokenAuth",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "CustomObtainJSONWebToken",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
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
    "name": "SigninUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SigninUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SigninUserMutation",
    "id": null,
    "text": "mutation SigninUserMutation(\n  $email: String!\n  $password: String!\n) {\n  tokenAuth(email: $email, password: $password) {\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1be86c5b5df55c0c61462b0c2474f910';
module.exports = node;
