<template>
  <div class="pizza-card">
    <div class="pizza-card__img">
      <img :src=pizza.imageUrl alt="Pizza">
    </div>
    <div class="pizza-card__title">
      {{ pizza.title }}
    </div>
    <div class="pizza-card__constructor constructor">
      <div class="constructor__type"></div>
      <div class="constructor__size"></div>
    </div>
    <div class="pizza-card__footer footer">
      <div class="footer__price">от {{ pizza.price }} ₽</div>
      <div class="footer__add">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="#EB5A1E" />
        </svg>
        <span>Добавить</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    pizza: {
      type: Object,
      required: true
    }
  },
}
</script>

<style>
.pizza-card {
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 1200px) {
  .pizza-card {
    width: 250px;
  }
}

.pizza-card__img {
  max-width: 260px;
}

.pizza-card__img img {
  width: 100%;
  margin-left: 8px;
}

.pizza-card__title {
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #000000;
  margin: 11px 0 22px;
  text-align: center;
  height: 50px;
}

.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__price {
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
  color: #000000;
}

.footer__add {
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #EB5A1E;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 0 14px 0 17px;
  cursor: pointer;
}

.footer__add svg {
  margin-right: 8px;
}

.footer__add span {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #EB5A1E;
}
</style>