import { defineStore } from "pinia";

import { Beverage } from "../types";

export const useBevStore = defineStore("BeverageStore", {
  state: () => {
    return { beverages: [] as Beverage[] };
  },
});
