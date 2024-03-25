//Beverage Store
import { defineStore } from "pinia";
import { BevType } from "../types";

export const useBevStore = defineStore("BeverageStore", {
  state: () => {
    return { storedbeverages: [] as BevType[] };
  },
});
