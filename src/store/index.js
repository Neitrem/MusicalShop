import { createStore } from "vuex";
import axios from 'axios'
//import createPersistedState from 'vuex-persistedstate'
import database from './modules/database.js'

const store = createStore({
	modules: {
		database
	},
    state() {
		return {
			authWindow: {
				authModalWindowIsActive: false,
				error: {
					errorWindowActive: false,
					text: 'Неправильные почта или пароль'
				}
			},
			api: {
				api_base: 'http://127.0.0.1:8000/api/',
			},
			
			user: {
				authorized: true,
				tokens: {
					access: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3NDQ5MjA3LCJpYXQiOjE2ODc0NDg5MDcsImp0aSI6IjZlY2Y4OWRkZDNiMDQ3MGJhMmIxMTIxNTE1ZjI5ZjkzIiwidXNlcl9pZCI6MX0.CKZXXjHSc34qPZ0o53vgD1jtdaHfOGqvFWOcB4Mqlp0',
					refresh: ''
				},
				info: {
					name: 'dwddd',
					role: '',
					email: '',
					birth_date: 'wdwdd',
					city: '',
					phone: ''
				},
				cart: [],
				orders: []
				
			}
		}
    },
	
    mutations: {
		authModalWindowChangeActive(state) {
			state.authWindow.authModalWindowIsActive = !state.authWindow.authModalWindowIsActive;
		},

		authErrorWindowChangeActive(state) {
			state.authWindow.error.errorWindowActive = !state.authWindow.error.errorWindowActive;
		},

		setAccessToken(state, token) {
			state.user.tokens.access = token
		},

		deleteAccessToken(state) {
			state.user.tokens.access = '';
		},

		updateAccessToken(state, new_token) {
			state.user.tokens.access = new_token;
		},

		changeAuthStatus(state, status) {
			state.user.authorized = status
		},

		setUserInfo(state, data)
		{
			state.user.info.name = data.name
			state.user.info.role = data.role
			state.user.info.email = data.email
			state.user.info.birth_date = data.birth_date
			state.user.info.city = data.city
			state.user.info.phone = data.phone
		},

		setUserCart(state, data) {
			state.user.cart = data.items
		},

		setUserOrders(state, data) {
			state.user.orders = data.items
		},
		
	},
	getters: {
		getAuthModalWindowActive(state) {
			return state.authWindow.authModalWindowIsActive;
		},

		getAuthErrorActive(state) {
			return state.authWindow.error.errorWindowActive;
		},

		getAuthErrorText(state) {
			return state.authWindow.error.text;
		},

		getAuthState(state) {
			return state.user.authorized;
		},

		getCart(state) {
			return state.user.cart
		},

		getOrders(state) {
			return state.user.orders
		},

		getUserInfo(state) {
			return state.user.info
		}
	},
	
	actions: {
		// Входит в аккаунт и получает токен
		log_in ({commit, state}, user) {
			axios
				.post(state.api.api_base + 'users/login/', {
					email: user.email,
					password: user.password
				})
				.then(response => {
					console.log(response)
					commit('setAccessToken', response.data.access)
					commit("authModalWindowChangeActive")
					commit("changeAuthStatus", true)
					commit('setUserInfo', response.data)
					
					const config = {
						headers: { Authorization: `Bearer ${state.user.tokens.access}` }
					};
					console.log(config)
					axios
						.get(state.api.api_base + 'users/account/', config, config)
						.then(response => {
							console.log(response)
							console.log('ded')
							commit('setUserInfo', response.data)
						})
					
				})
				.catch((err) => {
					console.log('ERROR::LOG_IN' + '/n' + err)
					console.log(typeof(err.response.status))
					if([404, 401].includes(err.response.status))
					{
						commit('authErrorWindowChangeActive');
						this.dispatch('closeErrorWindow')
					}
				})
		},

		// Вход без сервера
		log_in_develop({commit})
		{
			commit("authModalWindowChangeActive")
			commit("changeAuthStatus", true)
		},

		exit({commit, state})
		{
			const config = {
				headers: { Authorization: `Bearer ${state.user.tokens.access}` }
			};
			console.log(config)
			axios
				.post(state.api.api_base + 'users/logout/', config, config)
				.then(response => {
					console.log(response)
					commit('setAccessToken', '')
					commit("changeAuthStatus", false),
					localStorage.clear()
				})
		},

		closeErrorWindow ({ commit }) {
			setTimeout(() => {
				commit('authErrorWindowChangeActive')
			}, 4000)
		},

		getCart({commit, state}) {
			const config = {
				headers: { Authorization: `Bearer ${state.user.tokens.access}` }
			};
			console.log(config)
			axios
				.get(state.api.api_base + 'carts/get/', config, config)
				.then(response => {
					console.log(response)
					commit('setUserCart', response.data)
				})
		},

		getOrders({commit, state}) {
			const config = {
				headers: { Authorization: `Bearer ${state.user.tokens.access}` }
			};
			console.log(config)
			axios
				.get(state.api.api_base + 'orders/get/', config, config)
				.then(response => {
					console.log(response)
					commit('setUserOrders', response.data)
				})
		},

		
	},
})

export default store;