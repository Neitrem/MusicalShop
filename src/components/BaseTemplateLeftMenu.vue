<template>
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