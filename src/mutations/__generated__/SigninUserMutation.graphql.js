/**
 * @flow
 * @relayHash d64aa79b29aad9f8c02d70cd791046e3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ObtainJSONWebTokenInput = {|
  clientMutationId?: ?string,
  email: string,
  password: string,
|};
export type SigninUserMutationVariables = {|
  input: ObtainJSONWebTokenInput
|};
export type SigninUserMutationResponse = {|
  +tokenAuth: ?{|
    +token: ?string
  |}
|};
export type SigninUserMutation = {|
  variables: SigninUserMutationVariables,
  response: SigninUserMutationResponse,
|};
*/


/*
mutation SigninUserMutation(
  $input: ObtainJSONWebTokenInput!
) {
  tokenAuth(input: $input) {
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ObtainJSONWebTokenInput!",
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
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ObtainJSONWebTokenPayload",
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
    "text": "mutation SigninUserMutation(\n  $input: ObtainJSONWebTokenInput!\n) {\n  tokenAuth(input: $input) {\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '90843e3fe29f01256162f35c8c397aa2';
module.exports = node;
