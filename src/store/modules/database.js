const state = {
    users: [],
    products: []
  };
  
  const mutations = {
    setUsers(state, users) {
      state.users = users;
    },
    setProducts(state, products) {
      state.products = products;
    }
  };
  
  const actions = {
    async fetchUsers({ commit }) {
      try {
        // Загрузка данных пользователей из db.json
        const response = await fetch('./db.json');
        const data = await response.json();
        commit('setUsers', data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
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