<template>
  <div class="pizza__pizza-page pizza-page">
    <div class="pizza-page__filter filter">
      <PizzaCategories />
    </div>
    <h2 class="pizza-page__title">Все пиццы</h2>
    <div class="pizza-page__pizzas">
      <PizzaCard v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza" />
    </div>
  </div>
</template>

<script lang="ts">
import PizzaCard from '@/components/PizzaCard.vue';
import PizzaCategories from '@/components/PizzaCategories.vue';
import { mapState } from 'vuex';
export default {
  components: {
    PizzaCard,
    PizzaCategories
  },
  computed: {
    ...mapState({
      pizzas: (state: any) => state.pizzas.pizzas
    })
  }
}
</script>

<style>
.pizza-page__title {
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.01em;
  color: #000000;
  margin-bottom: 35px;
}

.pizza-page__filter {
  margin-bottom: 32px;
}

.pizza-page__pizzas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 65px;
}
</style>