<template>
  <BaseTemplateLeftMenu>
    <div class="container">
      <div v-for="order in order_list" :key="order.id" class="order-item">
        <div class="item-photo">
          <img :src="order.order_photo_link" alt=".">
        </div>
        <div class="item-body">
          <h2>{{order.order_name}}</h2>
          <div class="cart-items-count">
            <div class="count-buttons">
              <div class="minus radius" @click="order.count -= 1; this.summa-=order.cost"></div>
              <h2>{{order.count}}</h2>
              <div class="plus radius" @click="order.count += 1; this.summa+=order.cost"></div>
            </div>
            <div class="item-cost">
              <h3>{{order.cost}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-result">
      <h2>Итог: {{this.summa}}</h2>
      <router-link to="/" class="cart-result-button">
        <div class="cart-result-logo">
          <p class="cart-result-text">Оформить</p>
        </div>
      </router-link>
    </div>
  </BaseTemplateLeftMenu>
</template>

<script>
import BaseTemplateLeftMenu from './BaseTemplateLeftMenu.vue';

export default {
  name: "CartTemplate",
  components: {BaseTemplateLeftMenu,},
  data() {
    return {
      order_list: [
        {
          "id": 0,
          "order_name": "EPIPHONE LES PAUL STUDIO E1 EBONY",
          "cost": 35000,
          "count": 1,
          "order_photo_link": "https://avatars.mds.yandex.net/i?id=762c73a0d38ad7cfc5d75f40df7a3087ae345ce5-7030343-images-thumbs&n=13"
        },
        {
          "id": 1,
          "order_name": "EPIPHONE LES PAUL STUDIO E1 EBONY",
          "cost": 35000,
          "count": 1,
          "order_photo_link": "https://avatars.mds.yandex.net/i?id=762c73a0d38ad7cfc5d75f40df7a3087ae345ce5-7030343-images-thumbs&n=13"
        },
      ],
      summa: 0
    }
  },
  methods: {
    summa_start: function () {
      for (let i = 0; i < this.order_list.length; i++) {
        this.summa += this.order_list[i]['cost'] * this.order_list[i]['count']
      }
    }
  },
  created: function () {
    this.summa_start()
  }
}
</script>
<style scoped>
@import '@/styles/CartTemplate.css';
</style>