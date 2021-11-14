/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CompanyLink_company = {
    readonly id: string;
    readonly name: string | null;
    readonly " $refType": "CompanyLink_company";
};
export type CompanyLink_company$data = CompanyLink_company;
export type CompanyLink_company$key = {
    readonly " $data"?: CompanyLink_company$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CompanyLink_company">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CompanyLink_company",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Company",
  "abstractKey": null
};
(node as any).hash = '473f86a9a5cf02c85ec8ad43106509bd';
export default node;
