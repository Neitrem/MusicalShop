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

// Phone
.header
{
	background-color: $background-color-gray;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 60px;
	width: 100%;

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
		}
	}

	
}

// Tablet
@media (min-width: 768px)
{
	.header
	{
		height: 90px;
		width: 90%;
		margin: 0 auto;
		&__wrapper
		{
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
			}
		}
	}
}

// PC / Laptop
@media (min-width: 1440px)
{
	.header{
		height: 134px;
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