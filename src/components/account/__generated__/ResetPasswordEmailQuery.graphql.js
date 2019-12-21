/**
 * @flow
 * @relayHash d5b1d1d641881c6d929e44830b8840a3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserActionEnum = "ACTIVATE_USER" | "RESET_PASSWORD" | "UPDATE_EMAIL" | "%future added value";
export type ResetPasswordEmailQueryVariables = {|
  email?: ?string,
  action?: ?UserActionEnum,
|};
export type ResetPasswordEmailQueryResponse = {|
  +sendVerificationEmail: ?{|
    +email: ?string,
    +action: ?string,
    +result: ?string,
    +errors: ?$ReadOnlyArray<?string>,
  |}
|};
export type ResetPasswordEmailQuery = {|
  variables: ResetPasswordEmailQueryVariables,
  response: ResetPasswordEmailQueryResponse,
|};
*/


/*
mutation ResetPasswordEmailQuery(
  $email: String
  $action: UserActionEnum
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
    "type": "UserActionEnum",
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
    "name": "ResetPasswordEmailQuery",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ResetPasswordEmailQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ResetPasswordEmailQuery",
    "id": null,
    "text": "mutation ResetPasswordEmailQuery(\n  $email: String\n  $action: UserActionEnum\n) {\n  sendVerificationEmail(email: $email, action: $action) {\n    email\n    action\n    result\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd41a3e8054678198dd7d44353f86e2ce';
module.exports = node;
