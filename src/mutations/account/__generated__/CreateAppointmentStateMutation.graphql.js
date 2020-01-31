/**
 * @flow
 * @relayHash a6a949d2671747e63fec9854f182718c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateAppointmentStateMutationVariables = {|
  name: string
|};
export type CreateAppointmentStateMutationResponse = {|
  +createAppointmentState: ?{|
    +appointmentStateNode: ?{|
      +id: string,
      +name: string,
    |}
  |}
|};
export type CreateAppointmentStateMutation = {|
  variables: CreateAppointmentStateMutationVariables,
  response: CreateAppointmentStateMutationResponse,
|};
*/


/*
mutation CreateAppointmentStateMutation(
  $name: String!
) {
  createAppointmentState(name: $name) {
    appointmentStateNode {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createAppointmentState",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "CreateAppointmentState",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "appointmentStateNode",
        "storageKey": null,
        "args": null,
        "concreteType": "AppointmentStateNode",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateAppointmentStateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateAppointmentStateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateAppointmentStateMutation",
    "id": null,
    "text": "mutation CreateAppointmentStateMutation(\n  $name: String!\n) {\n  createAppointmentState(name: $name) {\n    appointmentStateNode {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4d33414940db8a4121481cd1c4fb05ad';
module.exports = node;
