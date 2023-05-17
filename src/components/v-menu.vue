<template>
	<button @click="onOff" class="menu__icon">
		<img src="@/svg/menu.svg" alt="search">
	</button>
	<div v-if="menuActive" class="menu-container">
		<router-link @click="off" class="menu-link" to="/">
			<div class="menu-button">Все категории</div>
		</router-link>
		<router-link @click="off" class="menu-link" to="/user">
			<div class="menu-button">Аккаунт</div>
		</router-link>
		<router-link @click="off" class="menu-link" to="/user/cart">
			<div class="menu-button">Корзина</div>
		</router-link>
		<router-link @click="off" class="menu-link" to="/user/order">
			<div class="menu-button">Заказы</div>
		</router-link>
		<router-link @click="off" class="menu-link" to="/">
			<div class="menu-button">О нас</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "vMenu",
	data () {
		return {
			menuActive: false
		}
	},

	methods: {
		onOff() {
			this.menuActive = !this.menuActive;
		},

		off() {
			this.menuActive = false;
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.menu-link
{
	display: flex;
	justify-content: center;
}

.menu__icon
{
	width: 27px;
	height: 27px;

	border-radius: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	background-color: $backgroung-color-white;

	img
	{
		width: 20px;
		height: 20px;
	}
	@media screen and (min-width: 768px) {
		display: none;
	}
}
.menu-container
{
	position: absolute;
	top: 90px;
	left: 0;
	width: 100%;
	height: 420px;

	z-index: 999;

	border-radius: 15px;

	background-color: $background-color-gray;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	
	.menu-button
	{
		text-align: center;
		width: 220px;
		height: 50px;

		border-radius: 15px;
		background-color: $backgroung-color-yelow;
		box-shadow: 0px 4px 0px #C1BA00;

		display: flex;
		align-items: center;
		justify-content: center;

		color: #000;
		font-size: 20px;
		font-weight: 400;

		font-family: $font-family;

	}

	@media screen and (min-width: 768px) {
		width: 70%;
	}
}
</style>

