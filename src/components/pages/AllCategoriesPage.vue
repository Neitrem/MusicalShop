<template>
  <div class="categories__wrapper">
    <div class="products">
      <h1>Welcome</h1>
      <p>Hi!</p>
    </div>
    <aside>
      <button class="categories__btn-choose">Гитары</button>
      <button class="categories__btn-choose">Усилители</button>
      <button class="categories__btn-choose">Аксессуары</button>
    </aside>
  </div>
</template>

<script>
export default {
  name: "AllCategoriesPage",
};
</script>

<style>
.categories__wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "sidebar  products";
}

aside {
  grid-area: sidebar;
  width: 220px;
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
  background-color: #20bf6b;
  padding: 20px;
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
</style>
