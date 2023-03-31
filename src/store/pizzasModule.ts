import { Module } from "vuex";
import axios from "axios";

export type Pizza = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export type PizzasState = {
  pizzas: Pizza[];
};

export const pizzasModule: Module<PizzasState, any> = {
  state: () => ({
    pizzas: [],
  }),
  mutations: {
    setPizzas(state, pizzas: Pizza[]): void {
      state.pizzas = pizzas;
    },
  },
  actions: {
    async getPizzas({ commit }, categoryId) {
      try {
        const category = categoryId === 0 ? "" : categoryId;
        const { data } = await axios.get(
          `https://629a1bf36f8c03a97850e492.mockapi.io/items?category=${category}`,
        );
        commit("setPizzas", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
