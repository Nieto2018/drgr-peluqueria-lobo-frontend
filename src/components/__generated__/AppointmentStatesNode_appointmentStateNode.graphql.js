/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AppointmentStatesNode_appointmentStateNode$ref: FragmentReference;
declare export opaque type AppointmentStatesNode_appointmentStateNode$fragmentType: AppointmentStatesNode_appointmentStateNode$ref;
export type AppointmentStatesNode_appointmentStateNode = {|
  +id: string,
  +name: string,
  +$refType: AppointmentStatesNode_appointmentStateNode$ref,
|};
export type AppointmentStatesNode_appointmentStateNode$data = AppointmentStatesNode_appointmentStateNode;
export type AppointmentStatesNode_appointmentStateNode$key = {
  +$data?: AppointmentStatesNode_appointmentStateNode$data,
  +$fragmentRefs: AppointmentStatesNode_appointmentStateNode$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AppointmentStatesNode_appointmentStateNode",
  "type": "AppointmentStateNode",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = 'eeb831c8e45bbbe211467590c25f093f';
module.exports = node;
