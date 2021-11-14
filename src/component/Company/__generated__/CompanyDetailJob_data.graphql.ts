/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import CompanyDetailJobQuery from "./CompanyDetailJobQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type CompanyDetailJob_data = {
    readonly job: {
        readonly title: string | null;
        readonly id: string;
    } | null;
    readonly " $refType": "CompanyDetailJob_data";
};
export type CompanyDetailJob_data$data = CompanyDetailJob_data;
export type CompanyDetailJob_data$key = {
    readonly " $data"?: CompanyDetailJob_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CompanyDetailJob_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
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
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": CompanyDetailJobQuery
    }
  },
  "name": "CompanyDetailJob_data",
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
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '2cd16693c38f5634865c9a1da7822ede';
export default node;
