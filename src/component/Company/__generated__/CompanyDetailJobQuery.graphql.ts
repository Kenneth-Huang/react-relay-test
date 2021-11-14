/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CompanyDetailJobQueryVariables = {
    id: string;
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
  ...CompanyDetailJob_data
}

fragment CompanyDetailJob_data on Query {
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CompanyDetailJobQuery",
    "selections": [
      {
        "args": null,
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
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
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
    "cacheID": "33a7537fad9a15ee0a06a677c0ddb2a7",
    "id": null,
    "metadata": {},
    "name": "CompanyDetailJobQuery",
    "operationKind": "query",
    "text": "query CompanyDetailJobQuery(\n  $id: ID!\n) {\n  ...CompanyDetailJob_data\n}\n\nfragment CompanyDetailJob_data on Query {\n  job(id: $id) {\n    title\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '0df29b2b2f2a2ed89556505ccc471931';
export default node;
