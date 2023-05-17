import { createStore } from "vuex";
import axios from 'axios'

const store = createStore({
    state() {
		return {
			authWindow: {
				authModalWindowIsActive: true,
				error: {
					errorWindowActive: false,
					text: 'Неправильные почта или пароль'
				}
			},
			api: {
				api_base: 'http://127.0.0.1:8000/api/',
			},
			
			user: {
				authorized: false,
				tokens: {
					access: '',
					refresh: ''
				},
				info: {
					name: '',
					role: '',
					email: '',
					birth_date: '',
					city: ''
				}
				
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
		}
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

		closeErrorWindow ({ commit }) {
			setTimeout(() => {
				commit('authErrorWindowChangeActive')
			}, 4000)
		}
	}
})

export default store;