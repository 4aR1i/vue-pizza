<template>
  <div class="pizza">
    <div class="pizza__wrapper">
      <PizzasHeader />
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import PizzasHeader from './components/PizzasHeader.vue';
export default defineComponent({
  components: {
    PizzasHeader
  },
  methods: {
    ...mapActions({
      fetchPizzas: 'getPizzas',
    })
  },
  mounted() {
    this.fetchPizzas('');
  },
  watch: {
    activeCategory(id: number) {
      this.fetchPizzas(id);
    }
  },
  computed: {
    ...mapState({
      activeCategory: (state: any) => state.pizzasFilter.category
    }),
  },
}) 
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

body {
  min-height: 100vh;
  width: 100%;
  background: #FFDF8C;
}

.pizza__wrapper {
  background-color: #fff;
  border-radius: 10px;
  height: 100%;
  margin: 50px auto;
  min-height: 90vh;
  width: 90vw;
  padding: 49px 50px 96px 67px;
}
</style>
