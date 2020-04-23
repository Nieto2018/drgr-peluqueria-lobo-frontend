/**
 * @flow
 * @relayHash 6e3ed3ae1d0148e6e262374895d6aa24
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ResetPasswordMutationVariables = {|
  token?: ?string,
  password1?: ?string,
  password2?: ?string,
|};
export type ResetPasswordMutationResponse = {|
  +resetPassword: ?{|
    +email: ?string,
    +result: ?string,
    +errors: ?$ReadOnlyArray<?string>,
  |}
|};
export type ResetPasswordMutation = {|
  variables: ResetPasswordMutationVariables,
  response: ResetPasswordMutationResponse,
|};
*/


/*
mutation ResetPasswordMutation(
  $token: String
  $password1: String
  $password2: String
) {
  resetPassword(token: $token, password1: $password1, password2: $password2) {
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
  },
  {
    "kind": "LocalArgument",
    "name": "password1",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password2",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "resetPassword",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "password1",
        "variableName": "password1"
      },
      {
        "kind": "Variable",
        "name": "password2",
        "variableName": "password2"
      },
      {
        "kind": "Variable",
        "name": "token",
        "variableName": "token"
      }
    ],
    "concreteType": "ResetPassword",
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
    "name": "ResetPasswordMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ResetPasswordMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ResetPasswordMutation",
    "id": null,
    "text": "mutation ResetPasswordMutation(\n  $token: String\n  $password1: String\n  $password2: String\n) {\n  resetPassword(token: $token, password1: $password1, password2: $password2) {\n    email\n    result\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '71b3827bfe9625a8084f035b877e682e';
module.exports = node;
