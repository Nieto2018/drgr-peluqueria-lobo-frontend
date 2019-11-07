/**
 * @flow
 * @relayHash 5f7ab41d40c6ab2b4d2d346088eafd01
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateAppointmentStateMutationVariables = {|
  id: string,
  name: string,
|};
export type UpdateAppointmentStateMutationResponse = {|
  +updateAppointmentState: ?{|
    +appointmentStateNode: ?{|
      +id: string,
      +name: string,
    |}
  |}
|};
export type UpdateAppointmentStateMutation = {|
  variables: UpdateAppointmentStateMutationVariables,
  response: UpdateAppointmentStateMutationResponse,
|};
*/


/*
mutation UpdateAppointmentStateMutation(
  $id: String!
  $name: String!
) {
  updateAppointmentState(id: $id, name: $name) {
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
    "name": "id",
    "type": "String!",
    "defaultValue": null
  },
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
    "name": "updateAppointmentState",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "UpdateAppointmentState",
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
    "name": "UpdateAppointmentStateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateAppointmentStateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateAppointmentStateMutation",
    "id": null,
    "text": "mutation UpdateAppointmentStateMutation(\n  $id: String!\n  $name: String!\n) {\n  updateAppointmentState(id: $id, name: $name) {\n    appointmentStateNode {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '98e2ec0d096633d6f60e289a79a0efd7';
module.exports = node;
