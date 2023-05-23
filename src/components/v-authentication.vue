<template>
<div v-show="active" class="auth-panel-wrapper">
	<div class="auth-panel">
		<div @click="this.$store.commit('authModalWindowChangeActive')" class="close">
			<img src="../svg/close.svg" alt="close">
		</div>
		<div @click="this.$store.dispatch('log_in_develop')" class="close__dev">
			<img style="color:red" src="../svg/close.svg" alt="log_in">
		</div>
		<div v-show="this.$store.getters.getAuthErrorActive" class="error-panel">
			<p class="error-panel__text">
				{{ this.$store.getters.getAuthErrorText }}
			</p>
		</div>
		<h3 class="auth-panel__title"> {{ this.dataTypes[dataType].text.title }}</h3>
		<form  path="" class="auth-panel__inner">
			<div class="inputs">
				<div class="input-item">
					<p class="input-item__name"></p>
					<input v-model="user.email" type="text" name="email" placeholder="E-mail">
				</div>
				<div class="input-item">
					<p class="input-item__name"></p>
					<input v-model="user.password" type="text" name="password" placeholder="Password">
				</div>
			</div>
			<button type="submit" @click.prevent="sendRequest" class="submit-btn">
				{{ this.dataTypes[dataType].text.action }}
			</button>
		</form>
	</div>
</div>
</template>

<script>
export default {
	name: "auth-panel",
	data() {
		return {
			dataTypes: {
				"log-in": {
					action: "log_in",
					text: {
						title: "Вход",
						action: "Войти"
					}
				},
				"registration": {
					action: "reg",
					text: {
						title: "Регистрация",
						action: "Зарегистрироваться"
					}
				}
			},
			user: {
				email: '',
				password: ''
			}
		}
	},
	props: {
		dataType: {
			type: String,
			default: "log-in"
		}
	},
	methods: {
		sendRequest() {
			const user = this.user;
			this.$store.dispatch(
				this.dataTypes[this.dataType].action,
				user
			);
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.close
{
	position: absolute;
	right: 5%;
	top: 5%;
	scale: 0.8;
	cursor: pointer;

	&__dev {
		position: absolute;
	right: 5%;
	top: 5%;
	scale: 0.8;
	cursor: pointer;
		top: 15%;
		background-color: red;
	}
}
.auth-panel-wrapper
{
	z-index: 999;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;

	backdrop-filter: blur(10px);

	display: flex;
	justify-content: center;
	align-items: center;
	
}
.auth-panel
{
	position: relative;
	width: 80%;
	height: 40%;	

	border-radius: 15px;

	background-color: $background-color-gray;

	display:  flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	.error-panel
	{
		width: 80%;
		min-height: 80px;
		border-radius: 0  0 15px 15px;

		position: absolute;
		top: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: rgba($color: red, $alpha: 0.4);
		&__text
		{	
			font-family: $font-family;
			font-size: 20px;
			color: $text-color-white;
			text-align: center;
		}
	}

	&__title
	{
		font-family: $font-family;
		color: $text-color-white;
		font-size: 18px;
	}

	&__inner
	{
		height: 50%;
		width: 90%;
		display:  flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		.submit-btn
		{
			border-radius: 15px;
			font-family: $font-family;
			background-color: $backgroung-color-yelow;
			box-shadow: 0 1px 0 0 $shadow-color-yelow;
			width: 45%;
			font-size: 16px;
			line-height: 25px;
			cursor: pointer;
		}

		.inputs
		{
			display:  flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			.input-item input
			{
				border-radius: 15px;
				margin-bottom: 15px;
				height: 25px;
				padding-left: 10px;

				border: none;

				&:focus
				{
					outline: none;
				}
			}
		}
	}
}

@media screen and (min-width: 768px) {
	.auth-panel{
		width: 50%;
		height: 50%;
	}
}

@media screen and (min-width: 768px) {
	.auth-panel
	{
		text-align: center;
		width: 50%;
		height: 60%;	

		&__title
		{
			font-size: 25px;
		}

		&__inner
		{
			.submit-btn
			{
				font-size: 18px;
				line-height: 35px;
			}

			.inputs
			{
				
				width: 40%;
				.input-item{
					width: 100%;
				}
				.input-item input
				{
					width: 90%;
					height: 35px;
					padding-left: 10px;
				}
			}
		}
	}
}
</style>