/**
 * @flow
 * @relayHash 7c041280ed47bd3ca61852a1deb6f311
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateAppointmentStateSubscriptionVariables = {||};
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
subscription CreateAppointmentStateSubscription {
  onAppointmentStateAction(action: "create") {
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
    "storageKey": "onAppointmentStateAction(action:\"create\")",
    "args": [
      {
        "kind": "Literal",
        "name": "action",
        "value": "create"
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
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateAppointmentStateSubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "CreateAppointmentStateSubscription",
    "id": null,
    "text": "subscription CreateAppointmentStateSubscription {\n  onAppointmentStateAction(action: \"create\") {\n    action\n    appointmentStateNode {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8a92d92dc7c04b74c0745f379bf6b652';
module.exports = node;
