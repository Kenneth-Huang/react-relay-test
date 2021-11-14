/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CompanyDetailJobQueryVariables = {
    id: string;
    isFetchable?: boolean | null | undefined;
};
export type CompanyDetailJobQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"CompanyDetailJob_data">;
};
export type CompanyDetailJobQuery = {
    readonly response: CompanyDetailJobQueryResponse;
    readonly variables: CompanyDetailJobQueryVariables;
};



/*
query CompanyDetailJobQuery(
  $id: ID!
) {
  ...CompanyDetailJob_data_1jZJ9d
}

fragment CompanyDetailJob_data_1jZJ9d on Query {
  job(id: $id) {
    title
    id
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
    "defaultValue": true,
    "kind": "LocalArgument",
    "name": "isFetchable"
  }
],
v1 = {
  "kind": "Variable",
  "name": "id",
  "variableName": "id"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CompanyDetailJobQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/),
          {
            "kind": "Variable",
            "name": "isFetchable",
            "variableName": "isFetchable"
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
    "name": "CompanyDetailJobQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          (v1/*: any*/)
        ],
        "concreteType": "Job",
        "kind": "LinkedField",
        "name": "job",
        "plural": false,
        "selections": [
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
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "557d994cc3823f67ce764c845d9f26bc",
    "id": null,
    "metadata": {},
    "name": "CompanyDetailJobQuery",
    "operationKind": "query",
    "text": "query CompanyDetailJobQuery(\n  $id: ID!\n) {\n  ...CompanyDetailJob_data_1jZJ9d\n}\n\nfragment CompanyDetailJob_data_1jZJ9d on Query {\n  job(id: $id) {\n    title\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '2cd16693c38f5634865c9a1da7822ede';
export default node;
