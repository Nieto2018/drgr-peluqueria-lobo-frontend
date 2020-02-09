/**
 * @flow
 * @relayHash 0d2054977ee9c9a7bfa7303b5703657d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateEmailMutationVariables = {|
  token: string
|};
export type UpdateEmailMutationResponse = {|
  +updateEmail: ?{|
    +oldEmail: ?string,
    +newEmail: ?string,
    +result: ?string,
    +errors: ?$ReadOnlyArray<?string>,
  |}
|};
export type UpdateEmailMutation = {|
  variables: UpdateEmailMutationVariables,
  response: UpdateEmailMutationResponse,
|};
*/


/*
mutation UpdateEmailMutation(
  $token: String!
) {
  updateEmail(token: $token) {
    oldEmail
    newEmail
    result
    errors
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "token",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "token",
        "variableName": "token"
      }
    ],
    "concreteType": "UpdateEmail",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "oldEmail",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "newEmail",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "result",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "errors",
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
    "name": "UpdateEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateEmailMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateEmailMutation",
    "id": null,
    "text": "mutation UpdateEmailMutation(\n  $token: String!\n) {\n  updateEmail(token: $token) {\n    oldEmail\n    newEmail\n    result\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '56476e3602c609f0f317c8a7d1a36cad';
module.exports = node;
