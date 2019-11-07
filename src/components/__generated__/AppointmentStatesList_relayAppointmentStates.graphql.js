/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AppointmentStatesNode_appointmentStateNode$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AppointmentStatesList_relayAppointmentStates$ref: FragmentReference;
declare export opaque type AppointmentStatesList_relayAppointmentStates$fragmentType: AppointmentStatesList_relayAppointmentStates$ref;
export type AppointmentStatesList_relayAppointmentStates = {|
  +edges: $ReadOnlyArray<?{|
    +node: ?{|
      +$fragmentRefs: AppointmentStatesNode_appointmentStateNode$ref
    |}
  |}>,
  +$refType: AppointmentStatesList_relayAppointmentStates$ref,
|};
export type AppointmentStatesList_relayAppointmentStates$data = AppointmentStatesList_relayAppointmentStates;
export type AppointmentStatesList_relayAppointmentStates$key = {
  +$data?: AppointmentStatesList_relayAppointmentStates$data,
  +$fragmentRefs: AppointmentStatesList_relayAppointmentStates$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AppointmentStatesList_relayAppointmentStates",
  "type": "AppointmentStateNodeConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "AppointmentStateNodeEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "AppointmentStateNode",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "AppointmentStatesNode_appointmentStateNode",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9c69744f716928891cb2e12f4c78e37f';
module.exports = node;
