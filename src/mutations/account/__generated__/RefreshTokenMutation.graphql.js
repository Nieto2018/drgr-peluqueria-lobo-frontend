/**
 * @flow
 * @relayHash 24c61445b21b9f04f5757ec0aa9dc3e7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RefreshInput = {|
  token: string,
  clientMutationId?: ?string,
|};
export type RefreshTokenMutationVariables = {|
  input: RefreshInput
|};
export type RefreshTokenMutationResponse = {|
  +refreshToken: ?{|
    +token: ?string,
    +payload: ?any,
    +clientMutationId: ?string,
  |}
|};
export type RefreshTokenMutation = {|
  variables: RefreshTokenMutationVariables,
  response: RefreshTokenMutationResponse,
|};
*/


/*
mutation RefreshTokenMutation(
  $input: RefreshInput!
) {
  refreshToken(input: $input) {
    token
    payload
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RefreshInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "refreshToken",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RefreshPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "payload",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
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
    "name": "RefreshTokenMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RefreshTokenMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RefreshTokenMutation",
    "id": null,
    "text": "mutation RefreshTokenMutation(\n  $input: RefreshInput!\n) {\n  refreshToken(input: $input) {\n    token\n    payload\n    clientMutationId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '205e50a41ab1f6b4d9971fd076090685';
module.exports = node;
