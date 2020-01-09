/**
 * @flow
 * @relayHash 1e0a6a303f67d121f218847227c76220
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserInput = {|
  email?: ?string,
  password1?: ?string,
  password2?: ?string,
  name?: ?string,
  surnames?: ?string,
  phoneNumber?: ?string,
|};
export type SignUpMutationVariables = {|
  input: UserInput
|};
export type SignUpMutationResponse = {|
  +createAccount: ?{|
    +email: ?string,
    +result: ?string,
    +errors: ?$ReadOnlyArray<?string>,
  |}
|};
export type SignUpMutation = {|
  variables: SignUpMutationVariables,
  response: SignUpMutationResponse,
|};
*/


/*
mutation SignUpMutation(
  $input: UserInput!
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
    "type": "UserInput!",
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
    "name": "SignUpMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignUpMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignUpMutation",
    "id": null,
    "text": "mutation SignUpMutation(\n  $input: UserInput!\n) {\n  createAccount(input: $input) {\n    email\n    result\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '72461d3e5026a5c74a374603a2920727';
module.exports = node;
