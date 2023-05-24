<template>
  <div class="categories__wrapper">
    <div class="products">
      <ul class="products__list">
        <router-link v-for="guitar in guitars" :key="guitar.id" to="/gituar/id"
          ><li class="products__item"><CardProduct :guitar="guitar" /></li
        ></router-link>
      </ul>
    </div>
    <aside>
      <btnAside name="Гитары" />
      <btnAside name="Усилители" />
      <btnAside name="Аксессуары" />
    </aside>
  </div>
</template>

<script lang="js">
import btnAside from '@/components/UI/button-aside.vue';
import CardProduct from '@/components/CardProduct.vue';

import { mapState, mapActions } from 'vuex';

export default {
  name: "AllCategoriesPage",
  components: {btnAside, CardProduct},

  methods: {
    ...mapActions('database', ['fetchGuitars'])
  },
  mounted() {
    this.fetchGuitars();
  },
  computed: {
    ...mapState('database', ['guitars'])
  },
};
</script>

<style scoped>
.categories__wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 80px;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "sidebar  products";
  margin-bottom: 20px;
}

a {
  color: black;
}

aside {
  grid-area: sidebar;
  background: #535353;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  padding: 44px 23px;
  
}

.products {
  grid-area: products;
  padding: 0;
  max-width: 900px;
  
}

.products__list {
  display: flex;
  flex-wrap: wrap; /* Установка свойства flex-wrap на wrap */
  column-gap: 80px;
  row-gap: 60px;
}

.products__item:hover {
  transition-duration: 0.7;
  opacity: 0.7;
}

@media (max-width: 530px) {
  .categories__wrapper {
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: "sidebar fd  products  ds";
  }
}
</style>
