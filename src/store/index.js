import { createStore } from 'vuex'
import axios from "axios";

export const store = createStore({
  state: {
    token: null
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async register({dispatch}, data) {
      await axios.post('http://0.0.0.0:8001/v1/users/register', data)
      let cred = {}
      cred['username'] = data['username']
      cred['password'] = data['password']
      await dispatch('LogIn', cred)
    },
    async LogIn({commit}, data) {
      let resp = await axios.post("http://0.0.0.0:8001/v1/auth/login", data);
      await commit("setUser", resp['token']);
    },
    async LogOut({ commit }) {
      commit("logout", null);
    }
  },
  mutations: {
    setUser(state, token) {
      state.token = token;
    },
    logout(state, token) {
      state.token = token;
    },
  }
})
