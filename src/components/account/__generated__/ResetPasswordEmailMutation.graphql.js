/**
 * @flow
 * @relayHash 64a6ce718660ddffe2dc1c721b174286
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AccountActionEnum = "ACTIVATE_ACCOUNT" | "RESET_PASSWORD" | "UPDATE_EMAIL" | "%future added value";
export type ResetPasswordEmailMutationVariables = {|
  email?: ?string,
  action?: ?AccountActionEnum,
|};
export type ResetPasswordEmailMutationResponse = {|
  +sendVerificationEmail: ?{|
    +email: ?string,
    +action: ?string,
    +result: ?string,
    +errors: ?$ReadOnlyArray<?string>,
  |}
|};
export type ResetPasswordEmailMutation = {|
  variables: ResetPasswordEmailMutationVariables,
  response: ResetPasswordEmailMutationResponse,
|};
*/


/*
mutation ResetPasswordEmailMutation(
  $email: String
  $action: AccountActionEnum
) {
  sendVerificationEmail(email: $email, action: $action) {
    email
    action
    result
    errors
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "action",
    "type": "AccountActionEnum",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "sendVerificationEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "action",
        "variableName": "action"
      },
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      }
    ],
    "concreteType": "SendVerificationEmail",
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
        "name": "action",
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
    "name": "ResetPasswordEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ResetPasswordEmailMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ResetPasswordEmailMutation",
    "id": null,
    "text": "mutation ResetPasswordEmailMutation(\n  $email: String\n  $action: AccountActionEnum\n) {\n  sendVerificationEmail(email: $email, action: $action) {\n    email\n    action\n    result\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1d041d8e3edeb20f583699ed6508617f';
module.exports = node;
