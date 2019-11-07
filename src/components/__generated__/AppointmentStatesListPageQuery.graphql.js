/**
 * @flow
 * @relayHash 86357dea7df7351cc06f48e2e68b1d3b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AppointmentStatesList_relayAppointmentStates$ref = any;
export type AppointmentStatesListPageQueryVariables = {||};
export type AppointmentStatesListPageQueryResponse = {|
  +relayAppointmentStates: ?{|
    +$fragmentRefs: AppointmentStatesList_relayAppointmentStates$ref
  |}
|};
export type AppointmentStatesListPageQuery = {|
  variables: AppointmentStatesListPageQueryVariables,
  response: AppointmentStatesListPageQueryResponse,
|};
*/


/*
query AppointmentStatesListPageQuery {
  relayAppointmentStates {
    ...AppointmentStatesList_relayAppointmentStates
  }
}

fragment AppointmentStatesList_relayAppointmentStates on AppointmentStateNodeConnection {
  edges {
    node {
      ...AppointmentStatesNode_appointmentStateNode
      id
    }
  }
}

fragment AppointmentStatesNode_appointmentStateNode on AppointmentStateNode {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppointmentStatesListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "relayAppointmentStates",
        "storageKey": null,
        "args": null,
        "concreteType": "AppointmentStateNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AppointmentStatesList_relayAppointmentStates",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppointmentStatesListPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "relayAppointmentStates",
        "storageKey": null,
        "args": null,
        "concreteType": "AppointmentStateNodeConnection",
        "plural": false,
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
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppointmentStatesListPageQuery",
    "id": null,
    "text": "query AppointmentStatesListPageQuery {\n  relayAppointmentStates {\n    ...AppointmentStatesList_relayAppointmentStates\n  }\n}\n\nfragment AppointmentStatesList_relayAppointmentStates on AppointmentStateNodeConnection {\n  edges {\n    node {\n      ...AppointmentStatesNode_appointmentStateNode\n      id\n    }\n  }\n}\n\nfragment AppointmentStatesNode_appointmentStateNode on AppointmentStateNode {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '25a4f9c9b10ea90f7312a5940652cd87';
module.exports = node;
