<template>
    <div class="container-order">
      <div v-for="order in order_list" :key="order.id" class="order-item">
        <div class="item-photo">
          <img :src="order.image_url" alt=".">
        </div>
        <div class="item-body">
          <h4>Номер заказа {{order.id + 'e' + '#de' + order.id * 2}}</h4>
          <h2>{{order.name}}</h2>
          <h3>{{ order.status }}</h3>
          
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "OrdersTemplate",
  data() {
    return {
      order_list: []
    }
  },
  data() {
    return {
      order_list: [],
      summa: 0
    }
  },
  beforeMount() {
    this.$store.dispatch('getOrders');
  },
  mounted() {
    this.order_list = this.$store.getters.getOrders;
    console.log(this.order_list)
  }
}
</script>
<style scoped>
@import '@/styles/OrdersTemplate.css';
</style>