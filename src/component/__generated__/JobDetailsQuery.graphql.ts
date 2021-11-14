/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JobDetailsQueryVariables = {
    id: string;
};
export type JobDetailsQueryResponse = {
    readonly job: {
        readonly id: string;
        readonly title: string | null;
        readonly description: string | null;
        readonly company: {
            readonly " $fragmentRefs": FragmentRefs<"CompanyLink_company">;
        } | null;
    } | null;
};
export type JobDetailsQuery = {
    readonly response: JobDetailsQueryResponse;
    readonly variables: JobDetailsQueryVariables;
};



/*
query JobDetailsQuery(
  $id: ID!
) {
  job(id: $id) {
    id
    title
    description
    company {
      ...CompanyLink_company
      id
    }
  }
}

fragment CompanyLink_company on Company {
  id
  name
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "JobDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Job",
        "kind": "LinkedField",
        "name": "job",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Company",
            "kind": "LinkedField",
            "name": "company",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CompanyLink_company"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JobDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Job",
        "kind": "LinkedField",
        "name": "job",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Company",
            "kind": "LinkedField",
            "name": "company",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "97df2a654a2d114ed3950d9289013f8b",
    "id": null,
    "metadata": {},
    "name": "JobDetailsQuery",
    "operationKind": "query",
    "text": "query JobDetailsQuery(\n  $id: ID!\n) {\n  job(id: $id) {\n    id\n    title\n    description\n    company {\n      ...CompanyLink_company\n      id\n    }\n  }\n}\n\nfragment CompanyLink_company on Company {\n  id\n  name\n}\n"
  }
};
})();
(node as any).hash = 'ae3567db139c461cd168ef4dc45a89aa';
export default node;
