/**
 * @flow
 * @relayHash 944f6cafe9a37d857be7c3f6045625f9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppointmentStateActionEnum = "CREATE_APPOINTMENT_STATE" | "DELETE_APPOINTMENT_STATE" | "UPDATE_APPOINTMENT_STATE" | "%future added value";
export type CreateAppointmentStateSubscriptionVariables = {|
  action: AppointmentStateActionEnum
|};
export type CreateAppointmentStateSubscriptionResponse = {|
  +onAppointmentStateAction: ?{|
    +action: ?string,
    +appointmentStateNode: ?{|
      +id: string,
      +name: string,
    |},
  |}
|};
export type CreateAppointmentStateSubscription = {|
  variables: CreateAppointmentStateSubscriptionVariables,
  response: CreateAppointmentStateSubscriptionResponse,
|};
*/


/*
subscription CreateAppointmentStateSubscription(
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
    "name": "CreateAppointmentStateSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateAppointmentStateSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "CreateAppointmentStateSubscription",
    "id": null,
    "text": "subscription CreateAppointmentStateSubscription(\n  $action: AppointmentStateActionEnum!\n) {\n  onAppointmentStateAction(action: $action) {\n    action\n    appointmentStateNode {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '61688bbe6db513d6bf4ff6f8dee4a55f';
module.exports = node;
