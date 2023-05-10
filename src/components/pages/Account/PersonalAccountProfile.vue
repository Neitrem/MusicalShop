<template>
    <div class="container">
      <div class="column">
        <div class="input-area">
          <h3>
            Имя:
          </h3>
          <input v-model="input_name" placeholder="Иван" class="input-text">
        </div>
        <div class="input-area">
          <h3>
            Контактный телефон:
          </h3>
          <input v-model="input_number" placeholder="+7 999 999 99 99" class="input-text">
        </div>
        <div class="input-area">
          <h3>
            Город:
          </h3>
          <input v-model="input_name" placeholder="Москва" class="input-text">
        </div>

      </div>
      <div class="column">
        <div class="input-area">
          <h3>
            Email:
          </h3>
          <input v-model="input_name" placeholder="example@gmail.com" class="input-text">
        </div>
        <div class="input-area">
          <h3>
            Дата рождения:
          </h3>
          <input v-model="input_name" placeholder="01.01.2000" class="input-text">
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "PersonalAccountProfile",
  input_name: ""
}
</script>
<style scoped>
@import '@/styles/PersonalAccountProfile.css';
</style>