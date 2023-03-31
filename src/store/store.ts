import { createStore } from "vuex";
import { pizzasFilterModule } from "./pizzasFilterModule";
import { pizzasModule } from "./pizzasModule";

export const store = createStore({
  modules: {
    pizzas: pizzasModule,
    pizzasFilter: pizzasFilterModule,
  },
});
