import { createStore } from "vuex";
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
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
		},

		deleteAccessToken(state) {
			state.user.tokens.access = '';
		},

		updateAccessToken(state, new_token) {
			state.user.tokens.access = new_token;
		},

		changeAuthStatus(state, status) {
			state.user.authorized = status
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
		},

		getAuthState(state) {
			return state.user.authorized;
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

		closeErrorWindow ({ commit }) {
			setTimeout(() => {
				commit('authErrorWindowChangeActive')
			}, 4000)
		}
	},
	plugins: [createPersistedState()]
})

export default store;