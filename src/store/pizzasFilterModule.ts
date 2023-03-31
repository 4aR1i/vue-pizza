import { Module } from "vuex";

type PizzasFilterState = {
  category: number;
};

export const pizzasFilterModule: Module<PizzasFilterState, any> = {
  state: () => ({
    category: 0,
  }),
  mutations: {
    changeCategory(state: any, id: number): void {
      state.category = id;
    },
  },
};
