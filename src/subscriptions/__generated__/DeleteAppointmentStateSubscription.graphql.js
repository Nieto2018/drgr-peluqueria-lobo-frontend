/**
 * @flow
 * @relayHash f5a0cb35cc6798b956a5c7474833447b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppointmentStateActionEnum = "CREATE_APPOINTMENT_STATE" | "DELETE_APPOINTMENT_STATE" | "UPDATE_APPOINTMENT_STATE" | "%future added value";
export type DeleteAppointmentStateSubscriptionVariables = {|
  action: AppointmentStateActionEnum
|};
export type DeleteAppointmentStateSubscriptionResponse = {|
  +onAppointmentStateAction: ?{|
    +action: ?string,
    +appointmentStateNode: ?{|
      +id: string,
      +name: string,
    |},
  |}
|};
export type DeleteAppointmentStateSubscription = {|
  variables: DeleteAppointmentStateSubscriptionVariables,
  response: DeleteAppointmentStateSubscriptionResponse,
|};
*/


/*
subscription DeleteAppointmentStateSubscription(
  $action: AppointmentStateActionEnum!
) {
  onAppointmentStateAction(action: $action) {
    action
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
    "name": "action",
    "type": "AppointmentStateActionEnum!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "onAppointmentStateAction",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "action",
        "variableName": "action"
      }
    ],
    "concreteType": "OnAppointmentState",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "action",
        "args": null,
        "storageKey": null
      },
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
    "name": "DeleteAppointmentStateSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteAppointmentStateSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "DeleteAppointmentStateSubscription",
    "id": null,
    "text": "subscription DeleteAppointmentStateSubscription(\n  $action: AppointmentStateActionEnum!\n) {\n  onAppointmentStateAction(action: $action) {\n    action\n    appointmentStateNode {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '91fbd2ab1cb34f164dc96a3520b7b97d';
module.exports = node;
