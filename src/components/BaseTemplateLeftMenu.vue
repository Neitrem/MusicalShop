<template>
  <div class="page-content">
    <div class="personal-account">
      <div class="personal-account-menu">
        <div class="personal-account-buttons">
          <router-link class="link" to="/user">
            <div class="personal-account-icon">
              <img src="../svg/profile.svg" alt="profile" class="icon">
            </div>
            <div class="personal-account-logo">
              <p class="personal-account-text">Персональные данные</p>
            </div>
          </router-link>
          <router-link class="link" to="/user/orders">
            <div class="personal-account-icon">
              <img src="../svg/orders.svg" alt="orders" class="icon">
            </div>
            <div class="personal-account-logo">
              <p class="personal-account-text">Заказы</p>
            </div>
          </router-link>
          <router-link class="link" to="/user/cart">
            <div class="personal-account-icon">
              <img src="../svg/cart.svg" alt="cart" class="icon">
            </div>
            <div class="personal-account-logo">
              <p class="personal-account-text">Корзина</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="personal-account-data">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "BaseTemplateLeftMenu",
}
</script>

<style scoped>
@import '@/styles/BaseTemplateLeftMenu.css';
</style>