<template>
	<header class="header">
		<div class="header__wrapper">
			<router-link to="/">
				<div class="logo">
					<p class="logo__text">CustomShop</p>
				</div>
			</router-link>
			<div class="search">
				<input class="search__input" placeholder="Начните вводить...">
				<button class="search__button">
					<img src="@/svg/search.svg" alt="search">
				</button>
			</div>
			
			
			<div class="menu">
				<button class="search-icon menu__icon">
					<img src="@/svg/search.svg" alt="search">
				</button>

				<router-link v-if="this.$store.getters.getAuthState" class="order_icon" to="/user/orders">
					<div class="menu__icon">
						<img src="@/svg/orders.svg" alt="orders">
					</div>
				</router-link>

				<router-link v-if="this.$store.getters.getAuthState" class="profile_icon" to="/user">
					<div class="menu__icon">
						<img src="@/svg/profile.svg" alt="profile">
					</div>
				</router-link>

				<button @click="this.$store.commit('authModalWindowChangeActive')" v-if="!this.$store.getters.getAuthState" class="profile_icon">
					<div class="menu__icon">
						<img src="@/svg/profile.svg" alt="profile">
					</div>
				</button>
				
				<router-link v-if="this.$store.getters.getAuthState" class="cart_icon" to="/user/cart">
					<div class="menu__icon">
						<img src="@/svg/cart.svg" alt="cart">
					</div>
				</router-link>

				<vMenu class="menu_icon" />

				
			</div>
		</div>
		<nav class="menu-buttons">
			<router-link to="/" class="menu-button">
				<p class="menu-button__text">
					Все категории
				</p>
			</router-link>
			<router-link to="/" class="menu-button">
				<p class="menu-button__text">
					О нас
				</p>
			</router-link>
		</nav>
		<vBottomLine/>
		<vAuthentication :dataType="'log-in'" v-show="this.$store.getters.getAuthModalWindowActive"/>
	</header>
</template>

<script lang="js">
import vBottomLine from './UI/v-bottom-line.vue';
import vAuthentication from './v-authentication.vue';
import vMenu from './v-menu.vue';

export default {
	name: "v-header",
	components: {vBottomLine, vAuthentication, vMenu},
	data () {
		return {
			modalWindowActive: false
		}
	},
	methods: {
		openCloseModalWindow() {
			this.modalWindowActive = !this.modalWindowActive;
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';




.menu-buttons {
    display: none;
    justify-content: space-between;
}

@media (min-width: 768px) {
	.menu-buttons {
		width: 80%;
		display: flex;
        margin-top: 15px;
		display: flex;
		justify-content: space-between;
	}

	.menu-button {
		width: 180px;
		height: 40px;
		text-align: center;

		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 15px;
		background-color: #F1E80A;
		box-shadow: 0 3px 0 0 #A59E00;

		&__text
		{

			font-size: 16px;
			color: black;
			font-style: normal;
			font-weight: 400;
			font-family: 'Inter';

			text-shadow: 0 4px 4px rgba(255, 255, 255, 0.25);
		}
	}

}
@media (min-width: 1440px) {
	.menu-button {
		width: 210px;
		height: 50px;

		&__text
		{
			font-size: 20px;
		}
	}

}

// Phone
.header
{
	
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;


	width: 100%;


	&__wrapper
	{
		background-color: $background-color-gray;
		width: 96%;
		padding: 0 2%;
		height: 60px;
		
		border-radius: 0 0 15px 15px;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		
		.logo{
			background-color: $backgroung-color-yelow;
			border-radius: 15px;
			box-shadow: 0 1px 0 0 $shadow-color-yelow;
			
			width: 134px;
			height: 40px;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			&__text{
				@extend %text-logo;
			}
		}
		.search
		{
			
			display: none;

			&__input
			{
				@extend %text-search;
			}
		}
		.menu
		{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			width: 50%;

			&__icon
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
			}

			.order_icon, .cart_icon
			{
				display: none;
			}

			.profile_icon
			{
				background: none;
				cursor: pointer;
			}

			
		}
	}

	
}

// Tablet
@media (min-width: 768px)
{
	.header
	{
		
		width: 90%;
		margin: 0 auto;
		&__wrapper
		{
			height: 90px;
			.logo
			{
				width: 194px;
				height: 55px;

				box-shadow: 0 4px 0 0 $shadow-color-yelow;

			}

			.search
			{
				width: 30%;
				position: relative;
				display: block;
				&__input
				{
					border: none;
					border-radius: 15px;

					background-color: $backgroung-color-white;

					width: 100%;
					height: 28px;
					margin: 0 5px;

					&:focus
					{
						outline: none;
					}

					&::placeholder
					{
						color: #A3A3A3;	
					}
				}

				&__button
				{
					position: absolute;
					right: 5%;
					top: 2.3px;

					width: 25px;
					height: 25px;

					background: none;

					img
					{
						width: 25px;
						height: 25px;
					}
				}
			}
			
			.menu
			{
				width: 30%;
				.search-icon
				{
					display: none;
				}

				&__icon
				{
					width: 43px;
					height: 43px;

					img
					{
						width: 31px;
						height: 31px;
					}
				}
				.order_icon, .cart_icon
				{
					display: block;
				}

				.menu_icon
				{
					display: none;
				}
			}
		}
	}
}

// PC / Laptop
@media (min-width: 1440px)
{
	.header{
		
		&__wrapper
		{
			width: 90%;
			height: 134px;
			
		}
		.logo
		{
			width: 338px;
			height: 86px;
		}

		.search
			{
				width: 35%;
				&__input
				{
					width: 100%;
					height: 48px;
				}

				&__button
				{
					top: 5px;

					width: 38px;
					height: 38px;
					img
					{
						width: 38px;
						height: 38px;
					}
				}
			}

		.menu
			{
				width: 30%;
				.search-icon
				{
					display: none;
				}

				&__icon
				{
					width: 60px;
					height: 60px;

					img
					{
						width: 45px;
						height: 45px;
					}
				}
			}
	}
}
</style>