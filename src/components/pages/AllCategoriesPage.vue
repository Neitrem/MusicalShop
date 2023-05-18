<template>
  <div class="categories__wrapper">
    <div class="products">
      <ul class="products__list">
          <li class="products__item"><CardProduct/></li>
          <li class="products__item"><CardProduct/></li>
          <li class="products__item"><CardProduct/></li>
          <li class="products__item"><CardProduct/></li>
          <li class="products__item"><CardProduct/></li>
          <li class="products__item"><CardProduct/></li>
      </ul>
      
    </div>
    <aside>
      <btnAside class="btnAside" name="Гитары" />
      <btnAside class="btnAside" name="Усилители" />
      <btnAside class="btnAside" name="Аксессуары" />
    </aside>
  </div>
</template>

<script lang="js">
import btnAside from '@/components/UI/button-aside.vue';
import CardProduct from '@/components/CardProduct.vue'

export default {
  name: "AllCategoriesPage",
  components: {btnAside, CardProduct}
};
</script>

<style>

.categories__wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 80px;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "sidebar  products";
}

.btnAside:hover {
  opacity: 0.9;
  cursor: pointer;
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

.categories__btn-choose {
  background: #ffffff;
  border-radius: 15px;
  width: 174px;
  height: 49px;
  font-weight: 400;
  font-size: 20px;
  filter: drop-shadow(0px 5px 0px #a7a7a7);
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
</style>
