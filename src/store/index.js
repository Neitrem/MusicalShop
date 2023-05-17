import { createStore } from "vuex";

const store = createStore({
    state() {
		return {
			authModalWindowIsActive: true
		}
    },
    mutations: {
		authModalWindowChangeActive(state) {
			state.authModalWindowIsActive = !state.authModalWindowIsActive;
		}
	},
	getters: {
		getAuthModalWindowActive(state) {
			return state.authModalWindowIsActive;
		}
	}
})

export default store;