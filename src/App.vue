<template>
  <div>
    <Beverage
      :isIced="currentTemp === 'Cold'"
      :creamer="currentCreamer"
      :syrup="currentSyrup"
      :beverage="currentBeverage"
    />
    <ul>
      <li> Temperature:
        <template v-for="temp in temps" :key="temp">
          <label> 
            <input
              type="radio"
              name="temperature"
              :id="`rtemp${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li> Creamer:
        <template v-for="creamer in creamers" :key="creamer">
          <label> 
            <input
              type="radio"
              name="Creamer"
              :id="`rcreamer${creamer}`"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer }}
          </label>
        </template>
      </li>
      <li> Syrup:
        <template v-for="syrup in syrups" :key="syrup">
          <label> 
            <input
              type="radio"
              name="Syrup"
              :id="`rsyrup${syrup}`"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup }}
          </label>
        </template>
      </li>
      <li> Base Beverage:
        <template v-for="baseBeverage in baseBeverages" :key="baseBeverage">
          <label> 
            <input
              type="radio"
              name="Base Beverage"
              :id="`rbase${baseBeverage}`"
              :value="baseBeverage"
              v-model="currentBeverage"
            />
            {{ baseBeverage }}
          </label>
        </template>
      </li>
      <li>
        <input id="bevname" type="text" v-model="bevname"/>
      </li>
      <li>
    
        <button
          type="button"
          name="Make Beverage"
          @click="addToList(getBeverage())"
          >
          
          Make
        </button>
         
      </li>
      <template v-for="storedBev in bevStore.storedbeverages" :key="`storedBev-${idx}`">
        <li>
          <label> 
            <input
              type="radio"
              name=storedBev.name
              :id="`rbase${storedBev}`"
              :value="storedBev"
              
            />
            {{ storedBev.name }}
          </label>
        </li>
        </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
// define pinia
import { useBevStore } from "./stores/BeverageStore";
import { BevType } from "./types";
const bevStore = useBevStore();
const getBeverage = () => {
  return {
    name: bevname.value,
    temperature: currentTemp.value,
    creamer: currentCreamer.value,
    syrup: currentSyrup.value,
    base: currentBeverage.value,
  };
};
const addToList = (bev: BevType) => {
  bevStore.$patch((state) => {
    
    state.storedbeverages.push(bev);
    
  });
};

//const { item } = defineProps<{ item: BevType }>();
defineEmits(["addToCart"]);
const bevname = ref("");

// Define reactive data
const temps = ref(["Hot", "Cold"]);
const currentTemp = ref("Hot");
const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const currentCreamer = ref("None");
const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const currentSyrup = ref("None");
const baseBeverages = ref(["Coffee", "Green Tea", "Black Tea"]);
const currentBeverage = ref("Coffee");
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
