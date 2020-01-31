/**
 * @flow
 * @relayHash 2a0b75f4c32a8bb72ce6319c8e5517f6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ActivateAccountMutationVariables = {|
  token?: ?string
|};
export type ActivateAccountMutationResponse = {|
  +activateAccount: ?{|
    +email: ?string,
    +result: ?string,
    +errors: ?$ReadOnlyArray<?string>,
  |}
|};
export type ActivateAccountMutation = {|
  variables: ActivateAccountMutationVariables,
  response: ActivateAccountMutationResponse,
|};
*/


/*
mutation ActivateAccountMutation(
  $token: String
) {
  activateAccount(token: $token) {
    email
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
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "activateAccount",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "token",
        "variableName": "token"
      }
    ],
    "concreteType": "ActivateAccount",
    "plural": false,
    "selections": [
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
    "name": "ActivateAccountMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ActivateAccountMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ActivateAccountMutation",
    "id": null,
    "text": "mutation ActivateAccountMutation(\n  $token: String\n) {\n  activateAccount(token: $token) {\n    email\n    result\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cc2cfc1a90a8f434b734e3a2b71c1def';
module.exports = node;
