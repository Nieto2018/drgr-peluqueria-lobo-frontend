/**
 * @flow
 * @relayHash fae426a679b218d4485235dd232c1ede
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
export type TokenAuthMutationVariables = {|
  input: ObtainJSONWebTokenInput
|};
export type TokenAuthMutationResponse = {|
  +tokenAuth: ?{|
    +token: ?string
  |}
|};
export type TokenAuthMutation = {|
  variables: TokenAuthMutationVariables,
  response: TokenAuthMutationResponse,
|};
*/


/*
mutation TokenAuthMutation(
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
    "name": "TokenAuthMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TokenAuthMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TokenAuthMutation",
    "id": null,
    "text": "mutation TokenAuthMutation(\n  $input: ObtainJSONWebTokenInput!\n) {\n  tokenAuth(input: $input) {\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '84afff6196322f5a3dd6ee434b08dde7';
module.exports = node;
