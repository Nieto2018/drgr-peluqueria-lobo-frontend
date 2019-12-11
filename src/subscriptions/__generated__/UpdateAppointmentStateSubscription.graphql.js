/**
 * @flow
 * @relayHash 27f0d430c91666e31ce8d725afe2eda0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppointmentStateActionEnum = "CREATE_APPOINTMENT_STATE" | "DELETE_APPOINTMENT_STATE" | "UPDATE_APPOINTMENT_STATE" | "%future added value";
export type UpdateAppointmentStateSubscriptionVariables = {|
  action: AppointmentStateActionEnum
|};
export type UpdateAppointmentStateSubscriptionResponse = {|
  +onAppointmentStateAction: ?{|
    +action: ?string,
    +appointmentStateNode: ?{|
      +id: string,
      +name: string,
    |},
  |}
|};
export type UpdateAppointmentStateSubscription = {|
  variables: UpdateAppointmentStateSubscriptionVariables,
  response: UpdateAppointmentStateSubscriptionResponse,
|};
*/


/*
subscription UpdateAppointmentStateSubscription(
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
    "name": "UpdateAppointmentStateSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateAppointmentStateSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "UpdateAppointmentStateSubscription",
    "id": null,
    "text": "subscription UpdateAppointmentStateSubscription(\n  $action: AppointmentStateActionEnum!\n) {\n  onAppointmentStateAction(action: $action) {\n    action\n    appointmentStateNode {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e5c104c5370625bf7c3bf54faf06ab9b';
module.exports = node;
