/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CompanyDetailQueryVariables = {
    id: string;
    jobID: string;
};
export type CompanyDetailQueryResponse = {
    readonly company: {
        readonly id: string;
        readonly name: string | null;
        readonly description: string | null;
        readonly jobs: ReadonlyArray<{
            readonly id: string;
            readonly title: string | null;
        } | null> | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CompanyDetailJob_data">;
};
export type CompanyDetailQuery = {
    readonly response: CompanyDetailQueryResponse;
    readonly variables: CompanyDetailQueryVariables;
};



/*
query CompanyDetailQuery(
  $id: ID!
) {
  company(id: $id) {
    id
    name
    description
    jobs {
      id
      title
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "jobID"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "id",
      "variableName": "id"
    }
  ],
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "company",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Job",
      "kind": "LinkedField",
      "name": "jobs",
      "plural": true,
      "selections": [
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CompanyDetailQuery",
    "selections": [
      (v2/*: any*/),
      {
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "jobID"
          }
        ],
        "kind": "FragmentSpread",
        "name": "CompanyDetailJob_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CompanyDetailQuery",
    "selections": [
      (v2/*: any*/)
    ]
  },
  "params": {
    "cacheID": "79385fdb815f9adc67b44d2719f7a81a",
    "id": null,
    "metadata": {},
    "name": "CompanyDetailQuery",
    "operationKind": "query",
    "text": "query CompanyDetailQuery(\n  $id: ID!\n) {\n  company(id: $id) {\n    id\n    name\n    description\n    jobs {\n      id\n      title\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1179917d961441a461252e9c9a21c1a8';
export default node;
