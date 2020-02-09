/**
 * @flow
 * @relayHash 7337183c366f9c1f8ed1211968660460
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditAccountInput = {|
  email?: ?string,
  name?: ?string,
  surnames?: ?string,
  phoneNumber?: ?string,
  isVip?: ?boolean,
  isActive?: ?boolean,
  isStaff?: ?boolean,
|};
export type EditAccountMutationVariables = {|
  input: EditAccountInput
|};
export type EditAccountMutationResponse = {|
  +editAccount: ?{|
    +email: ?string,
    +result: ?string,
    +errors: ?$ReadOnlyArray<?string>,
  |}
|};
export type EditAccountMutation = {|
  variables: EditAccountMutationVariables,
  response: EditAccountMutationResponse,
|};
*/


/*
mutation EditAccountMutation(
  $input: EditAccountInput!
) {
  editAccount(input: $input) {
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
    "type": "EditAccountInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "editAccount",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "EditAccount",
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
    "name": "EditAccountMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EditAccountMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditAccountMutation",
    "id": null,
    "text": "mutation EditAccountMutation(\n  $input: EditAccountInput!\n) {\n  editAccount(input: $input) {\n    email\n    result\n    errors\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '33834f587bc2208f8da619325a39b2c9';
module.exports = node;
