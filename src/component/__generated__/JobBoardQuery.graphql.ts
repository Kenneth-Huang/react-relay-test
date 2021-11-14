/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type JobBoardQueryVariables = {};
export type JobBoardQueryResponse = {
    readonly jobs: ReadonlyArray<{
        readonly id: string;
        readonly title: string | null;
        readonly company: {
            readonly id: string;
            readonly name: string | null;
        } | null;
        readonly description: string | null;
    } | null> | null;
};
export type JobBoardQuery = {
    readonly response: JobBoardQueryResponse;
    readonly variables: JobBoardQueryVariables;
};



/*
query JobBoardQuery {
  jobs {
    id
    title
    company {
      id
      name
    }
    description
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Job",
    "kind": "LinkedField",
    "name": "jobs",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Company",
        "kind": "LinkedField",
        "name": "company",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "JobBoardQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "JobBoardQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "13f9c68351e0309d06004ba1a5127cd5",
    "id": null,
    "metadata": {},
    "name": "JobBoardQuery",
    "operationKind": "query",
    "text": "query JobBoardQuery {\n  jobs {\n    id\n    title\n    company {\n      id\n      name\n    }\n    description\n  }\n}\n"
  }
};
})();
(node as any).hash = '6d582800173e695fa01baf211043d99e';
export default node;
