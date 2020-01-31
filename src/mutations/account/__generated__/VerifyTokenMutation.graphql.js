/**
 * @flow
 * @relayHash b8fc820231efc322daa6444045e09844
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type VerifyInput = {|
  token: string,
  clientMutationId?: ?string,
|};
export type VerifyTokenMutationVariables = {|
  input: VerifyInput
|};
export type VerifyTokenMutationResponse = {|
  +verifyToken: ?{|
    +payload: ?any,
    +clientMutationId: ?string,
  |}
|};
export type VerifyTokenMutation = {|
  variables: VerifyTokenMutationVariables,
  response: VerifyTokenMutationResponse,
|};
*/


/*
mutation VerifyTokenMutation(
  $input: VerifyInput!
) {
  verifyToken(input: $input) {
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
    "type": "VerifyInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "verifyToken",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "VerifyPayload",
    "plural": false,
    "selections": [
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
    "name": "VerifyTokenMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "VerifyTokenMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "VerifyTokenMutation",
    "id": null,
    "text": "mutation VerifyTokenMutation(\n  $input: VerifyInput!\n) {\n  verifyToken(input: $input) {\n    payload\n    clientMutationId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5ca248bc4306b45bbc2b17d9e0be688d';
module.exports = node;
