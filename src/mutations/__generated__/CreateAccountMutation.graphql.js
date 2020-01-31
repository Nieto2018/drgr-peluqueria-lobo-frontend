/**
 * @flow
 * @relayHash 3ba019bd2c95286d3db54ca56d1a84bb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateAccountInput = {|
  email?: ?string,
  password1?: ?string,
  password2?: ?string,
  name?: ?string,
  surnames?: ?string,
  phoneNumber?: ?string,
|};
export type CreateAccountMutationVariables = {|
  input: CreateAccountInput
|};
export type CreateAccountMutationResponse = {|
  +createAccount: ?{|
    +email: ?string,
    +result: ?string,
    +errors: ?$ReadOnlyArray<?string>,
  |}
|};
export type CreateAccountMutation = {|
  variables: CreateAccountMutationVariables,
  response: CreateAccountMutationResponse,
|};
*/


/*
mutation CreateAccountMutation(
  $input: CreateAccountInput!
) {
  createAccount(input: $input) {
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
    "name": "input",
    "type": "CreateAccountInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createAccount",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateAccount",
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
    "name": "CreateAccountMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateAccountMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateAccountMutation",
    "id": null,
    "text": "mutation CreateAccountMutation(\n  $input: CreateAccountInput!\n) {\n  createAccount(input: $input) {\n    email\n    result\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ce8b0fdfe299d3cb09eecaaa6aa7a130';
module.exports = node;
