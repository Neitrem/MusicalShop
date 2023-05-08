<template>
  <MyHeader></MyHeader>
  <div class="menu-center">
    <div class="menu-buttons">
      <router-link to="/" class="menu-button">
        <div class="logo">
          <p class="menu-text">Все категории</p>
        </div>
      </router-link>
      <router-link to="/" class="menu-button">
        <div class="logo">
          <p class="menu-text">О нас</p>
        </div>
      </router-link>
    </div>
  </div>

  <div class="page-content">
    <div class="personal-account">
      <div class="personal-account-menu">
        <div class="personal-account-buttons">
          <router-link to="/">
            <div class="personal-account-logo">
              <p class="personal-account-text">Персональные данные</p>
            </div>
          </router-link>
          <router-link to="/">
            <div class="personal-account-logo">
              <p class="personal-account-text">Заказы</p>
            </div>
          </router-link>
          <router-link to="/">
            <div class="personal-account-logo">
              <p class="personal-account-text">Корзина</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="personal-account-data">
        <slot></slot>
      </div>
    </div>
  </div>


  <MyFooter></MyFooter>
</template>

<script>
import MyHeader from './MyHeader.vue';
import MyFooter from './MyFooter.vue';
export default {
  name: "BaseTemplateLeftMenu",
  components: {MyHeader, MyFooter}
}
</script>

<style scoped>
@import '@/styles/BaseTemplateLeftMenu.css';
</style>