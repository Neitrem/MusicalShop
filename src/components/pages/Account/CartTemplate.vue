<template>
    <div class="container-cart">
      <div v-for="order in order_list" :key="order.id" class="order-item">
        <div class="item-photo">
          <img :src="order.image_url" alt=".">
        </div>
        <div class="item-body">
          <h2>{{order.name}}</h2>
          <div class="cart-items-count">
            <div class="count-buttons">
              <div class="minus radius" @click="order.count -= 1; this.summa-=order.cost"></div>
              <h2>{{order.amount}}</h2>
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
          <button type="submit" class="cart-result-text">Оформить</button>
        </div>
      </router-link>
    </div>
</template>

<script>


export default {
  name: "CartTemplate",
  data() {
    return {
      order_list: [],
      summa: 0
    }
  },
  methods: {
    summa_start: function () {
      for (let i = 0; i < this.order_list.length; i++) {
        this.summa += this.order_list[i]['cost'] * this.order_list[i]['amount']
      }
    }
  },
  beforeMount() {
    this.$store.dispatch('getCart');
    
    this.summa_start()
  },
  mounted() {
    this.order_list = this.$store.getters.getCart;
  }
}
</script>
<style scoped>
@import '@/styles/CartTemplate.css';
</style>