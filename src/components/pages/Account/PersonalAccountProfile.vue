<template>
    <div class="container">
      <div class="column">
        <div class="input-area">
          <h3>
            Имя:
          </h3>
          <input :value="this.info.name" placeholder="Иван" class="input-text">
        </div>
        <div class="input-area">
          <h3>
            Контактный телефон:
          </h3>
          <input :value="this.info.phone" placeholder="+7 999 999 99 99" class="input-text">
        </div>
        <div class="input-area">
          <h3>
            Город:
          </h3>
          <input :value="this.info.city" placeholder="Москва" class="input-text">
        </div>

      </div>
      <div class="column">
        <div class="input-area">
          <h3>
            Email:
          </h3>
          <input :value="this.info.email" placeholder="example@gmail.com" class="input-text">
        </div>
        <div class="input-area">
          <h3>
            Дата рождения:
          </h3>
          <input :value="this.info.birth_date" placeholder="01.01.2000" class="input-text">
        </div>
      </div>
    <div class="exit-account" @click="this.$store.dispatch('exit'); $router.push({path: '/'})">
      Выйти
    </div>
    </div>
    
</template>

<script>

export default {
  name: "PersonalAccountProfile",
  data() {
    return {
      info: {
					name: '',
					role: '',
					email: '',
					birth_date: '',
					city: '',
					phone: ''
				},
    }
  },
  mounted() {
    const i = this.$store.getters.getUserInfo;
    this.info.name = i.name
    this.info.role = i.role
    this.info.email = i.email
    this.info.birth_date = i.birth_date
    this.info.city = i.city
    this.info.phone = i.phone
  }
}
</script>
<style scoped>
@import '@/styles/PersonalAccountProfile.css';
.exit-account {
  color: red;
  position: absolute;
  top: 2px;
  left: 25px;
  font-size: 14px;
  cursor: pointer;
}
</style>