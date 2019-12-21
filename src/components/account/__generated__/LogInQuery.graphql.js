/**
 * @flow
 * @relayHash 417e3493ffa1095956cb47dd432709f7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LogInQueryVariables = {||};
export type LogInQueryResponse = {|
  +me: ?{|
    +id: string,
    +email: string,
  |}
|};
export type LogInQuery = {|
  variables: LogInQueryVariables,
  response: LogInQueryResponse,
|};
*/


/*
query LogInQuery {
  me {
    id
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "me",
    "storageKey": null,
    "args": null,
    "concreteType": "UserType",
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
        "name": "email",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LogInQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LogInQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "LogInQuery",
    "id": null,
    "text": "query LogInQuery {\n  me {\n    id\n    email\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '310da68166278eab6243c906944e9c83';
module.exports = node;
