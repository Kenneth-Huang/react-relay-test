/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CompanyDetailQueryVariables = {
    id: string;
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
  "args": (v1/*: any*/),
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
        (v2/*: any*/),
        (v3/*: any*/)
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
      (v4/*: any*/),
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
    "name": "CompanyDetailQuery",
    "selections": [
      (v4/*: any*/),
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Job",
        "kind": "LinkedField",
        "name": "job",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "98656ecbaa483bbb38eaca3773f54bb9",
    "id": null,
    "metadata": {},
    "name": "CompanyDetailQuery",
    "operationKind": "query",
    "text": "query CompanyDetailQuery(\n  $id: ID!\n) {\n  company(id: $id) {\n    id\n    name\n    description\n    jobs {\n      id\n      title\n    }\n  }\n  ...CompanyDetailJob_data\n}\n\nfragment CompanyDetailJob_data on Query {\n  job(id: $id) {\n    title\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f9957f2ee24405a01b2d9e99be188c81';
export default node;
