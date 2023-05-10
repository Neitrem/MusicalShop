<template>
	<footer class="footer">
		<div class="footer__wrapper">
			<div class="footer__nav">
				<router-link to="/" class="link">
					<p class="link__text">Главная</p>
				</router-link>
				<router-link to="/catecories" class="link">
					<p class="link__text">Категории</p>
				</router-link>
				<router-link to="/about" class="link">
					<p class="link__text">О нас</p>
				</router-link>
			</div>
			<p class="rights">(C)</p>
		</div>
	</footer>
</template>

<script lang="js">
export default {

}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
.footer
{

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&__wrapper
	{
		width: 90%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		margin: 0 10%;
	}

	height: 32px;
	width: 100%;
	background-color: $background-color-gray;

	&__nav
	{
		
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.link
		{
			&__text
			{
				font-size: 14px;
				@extend %text-white;
				@media screen and (min-width: 1440px){
					font-size: 16px;
				}
			}

			margin-left: 10px
		}
	}

	.rights
	{
		font-size: 14px;
		@extend %text-white;
		@media screen and (min-width: 1440px){
			font-size: 16px;
		}
	}
	
}




</style>