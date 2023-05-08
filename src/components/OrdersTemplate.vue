<template>
  <BaseTemplateLeftMenu>
    <div class="container">
      <div v-for="order in order_list" :key="order.id" class="order-item">
        <div class="item-photo">
          <img :src="order.order_photo_link" alt=".">
        </div>
        <div class="item-body">
          <h4>Номер заказа {{order.order_number}}</h4>
          <h2>{{order.order_name}}</h2>
          <h3 v-if="order.is_paid === true">Оплачено ✔️</h3>
          <h3 v-if="order.is_paid === false">Не оплачено ❌</h3>
        </div>
      </div>
    </div>
  </BaseTemplateLeftMenu>
</template>

<script>
import BaseTemplateLeftMenu from './BaseTemplateLeftMenu.vue';

export default {
  name: "OrdersTemplate",
  components: {BaseTemplateLeftMenu,},
  data() {
    return {
      order_list: [
        {
          "id": 0,
          "order_number": "123#456",
          "order_name": "EPIPHONE LES PAUL STUDIO E1 EBONY",
          "is_paid": true,
          "order_photo_link": "https://avatars.mds.yandex.net/i?id=762c73a0d38ad7cfc5d75f40df7a3087ae345ce5-7030343-images-thumbs&n=13"
        },
        {
          "id": 1,
          "order_number": "123#457",
          "order_name": "EPIPHONE LES PAUL STUDIO E1 EBONY",
          "is_paid": false,
          "order_photo_link": "https://avatars.mds.yandex.net/i?id=762c73a0d38ad7cfc5d75f40df7a3087ae345ce5-7030343-images-thumbs&n=13"
        },
      ]
    }
  }
}
</script>
<style scoped>
@import '@/styles/OrdersTemplate.css';
</style>