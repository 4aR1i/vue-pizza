<template>
  <div class="filter__categories categories">
    <div class={{  }} v-for="category in categories" :key="category.id" @click="changeCategory(category.id)">{{
      category.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    categories: [{ id: 0, title: 'Все' }, { id: 1, title: 'Мясные' }, { id: 2, title: 'Вегетарианские' }, { id: 3, title: 'Гриль' }, { id: 4, title: 'Острые' }, { id: 5, title: 'Закрытые' }]
  }),
  methods: {
    ...mapMutations({
      changeCategory: "changeCategory",
    }),
  }
}
</script>

<style>
.categories {
  display: flex;
  align-items: center;
  gap: 9px;
}

.category {
  padding: 16px 25px;
  background: #F9F9F9;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.015em;
  color: #2C2C2C;
  cursor: pointer;
}

.category-active {
  padding: 16px 25px;
  background: #282828;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.015em;
  color: #FFF;
  cursor: pointer;
}
</style>