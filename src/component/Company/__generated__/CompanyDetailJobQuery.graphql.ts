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
  $isFetchable: Boolean = false
) {
  ...CompanyDetailJob_data_1jZJ9d
}

fragment CompanyDetailJob_data_1jZJ9d on Query {
  job(id: $id) @include(if: $isFetchable) {
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
    "defaultValue": false,
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
        "condition": "isFetchable",
        "kind": "Condition",
        "passingValue": true,
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
      }
    ]
  },
  "params": {
    "cacheID": "4b4fb68bca934cf79fc0865613de61d8",
    "id": null,
    "metadata": {},
    "name": "CompanyDetailJobQuery",
    "operationKind": "query",
    "text": "query CompanyDetailJobQuery(\n  $id: ID!\n  $isFetchable: Boolean = false\n) {\n  ...CompanyDetailJob_data_1jZJ9d\n}\n\nfragment CompanyDetailJob_data_1jZJ9d on Query {\n  job(id: $id) @include(if: $isFetchable) {\n    title\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '907a41712e7366ddbe39d1aaf28b4c62';
export default node;
