/**
 * @flow
 * @relayHash 1d3b760402a2f72abce4ae589aee4995
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AccountActionEnum = "ACTIVATE_ACCOUNT" | "RESET_PASSWORD" | "UPDATE_EMAIL" | "%future added value";
export type SendVerificationEmailMutationVariables = {|
  email?: ?string,
  action?: ?AccountActionEnum,
|};
export type SendVerificationEmailMutationResponse = {|
  +sendVerificationEmail: ?{|
    +email: ?string,
    +action: ?string,
    +result: ?string,
    +errors: ?$ReadOnlyArray<?string>,
  |}
|};
export type SendVerificationEmailMutation = {|
  variables: SendVerificationEmailMutationVariables,
  response: SendVerificationEmailMutationResponse,
|};
*/


/*
mutation SendVerificationEmailMutation(
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
    "name": "SendVerificationEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SendVerificationEmailMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SendVerificationEmailMutation",
    "id": null,
    "text": "mutation SendVerificationEmailMutation(\n  $email: String\n  $action: AccountActionEnum\n) {\n  sendVerificationEmail(email: $email, action: $action) {\n    email\n    action\n    result\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5e9e84e5cab099218a89ee9bc8bb776e';
module.exports = node;
