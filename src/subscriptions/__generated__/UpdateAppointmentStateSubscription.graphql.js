/**
 * @flow
 * @relayHash e1e7a559db0d0c3e6678ff1e39d42bcc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateAppointmentStateSubscriptionVariables = {||};
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
subscription UpdateAppointmentStateSubscription {
  onAppointmentStateAction(action: "update") {
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
    "kind": "LinkedField",
    "alias": null,
    "name": "onAppointmentStateAction",
    "storageKey": "onAppointmentStateAction(action:\"update\")",
    "args": [
      {
        "kind": "Literal",
        "name": "action",
        "value": "update"
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
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateAppointmentStateSubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "UpdateAppointmentStateSubscription",
    "id": null,
    "text": "subscription UpdateAppointmentStateSubscription {\n  onAppointmentStateAction(action: \"update\") {\n    action\n    appointmentStateNode {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '87c0f6261be8a310a73cbddd83e0f4cb';
module.exports = node;
