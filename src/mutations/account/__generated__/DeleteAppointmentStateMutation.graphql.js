/**
 * @flow
 * @relayHash b174e645d1645c4aefef798499a1f77f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteAppointmentStateMutationVariables = {|
  id: string
|};
export type DeleteAppointmentStateMutationResponse = {|
  +deleteAppointmentState: ?{|
    +appointmentStateNode: ?{|
      +id: string,
      +name: string,
    |}
  |}
|};
export type DeleteAppointmentStateMutation = {|
  variables: DeleteAppointmentStateMutationVariables,
  response: DeleteAppointmentStateMutationResponse,
|};
*/


/*
mutation DeleteAppointmentStateMutation(
  $id: String!
) {
  deleteAppointmentState(id: $id) {
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
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteAppointmentState",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "DeleteAppointmentState",
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
    "name": "DeleteAppointmentStateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteAppointmentStateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteAppointmentStateMutation",
    "id": null,
    "text": "mutation DeleteAppointmentStateMutation(\n  $id: String!\n) {\n  deleteAppointmentState(id: $id) {\n    appointmentStateNode {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a19da5ce6c7d62388d86a6df1ffd055b';
module.exports = node;
