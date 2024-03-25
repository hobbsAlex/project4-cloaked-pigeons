import { defineStore } from "pinia";

import { Beverage } from "../types";

export const useBevStore = defineStore("BevStore", {
  state: () => {
    return { beverages: [] as Beverage[] };
  },
});
