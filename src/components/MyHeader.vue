<template>
	<header class="header">
		<div class="header__wrapper">
			<router-link to="/">
				<div class="logo">
					<p class="logo__text">CustomShop</p>
				</div>
			</router-link>
			<input class="search" placeholder="Начните вводить...">
			<div class="menu">
				<router-link to="/orders">
					<div class="menu__icon">
						<img src="@/svg/orders.svg" alt="orders">
					</div>
				</router-link>

				<router-link to="/profile">
					<div class="menu__icon">
						<img src="@/svg/profile.svg" alt="profile">
					</div>
				</router-link>
				
				<router-link to="/cart">
					<div class="menu__icon">
						<img src="@/svg/cart.svg" alt="cart">
					</div>
				</router-link>
			</div>
		</div>
	</header>
</template>

<script lang="js">
export default {

}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
.header
{
	background-color: $background-color-gray;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 160px;
	width: 90%;

	margin: 0 auto;

	border-radius: 0 0 15px 15px;

	&__wrapper
	{
		width: 90%;
		height: 60%;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		.logo{
			background-color: $bacgroung-color-yelow;
			border-radius: 15px;
			box-shadow: 0 4px 0 0 $shadow-color-yelow;
			
			width: 338px;
			height: 86px;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			&__text{
				color: $logo-text-color-white;

				font-family: 'Inter';
				font-style: normal;
				font-weight: 800;
				font-size: 48px;
				line-height: 58px;

				text-shadow: 0 4px 4px rgba($color: #000000, $alpha: 0.25);
			}
		}
		.search
		{
			border-radius: 15px;
			background-color: $bacgroung-color-white;

			max-width: 417px;
			width: 40%;

			height: 48px;
			
			font-size: 32px;
			border: none;

			&:focus
			{
				outline: none;
			}


			&::placeholder
			{
				font-family: 'Inter';
				font-style: normal;
				font-weight: 400;
				font-size: 32px;

				color: #A3A3A3;

				
			}


		}

		.menu
		{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			width: 25%;

			&__icon
			{
				width: 56.92px;
				height: 60px;

				border-radius: 15px;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;

				background-color: $bacgroung-color-white;
			}
		}
	}

	
}
</style>