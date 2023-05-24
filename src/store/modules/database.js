const state = {
    guitars: [],
    products: []
  };
  
  const mutations = {
    setGuitars(state, guitars) {
      state.guitars = guitars;
    },
    setProducts(state, products) {
      state.products = products;
    }
  };
  
  const actions = {
    async fetchGuitars({ commit }) {
      try {
        const response = await fetch('../db.json');
        const data = await response.json();
        commit('setGuitars', data.guitars);
      } catch (error) {
        console.error('Error fetching guitars:', error);
      }
    },
    async fetchProducts({ commit }) {
      try {
        // Загрузка данных продуктов из db.json
        const response = await fetch('@/db.json');
        const data = await response.json();
        commit('setProducts', data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  };