import router from "@/router";
import axios from "axios";


let client = axios.create(
  {
    withCredentials: true,
    baseURL: 'http://localhost:8001/v1',
  }
)

const state = () => {
  return {
    authStatus: null
  }
}

const getters = {
  isAuth: (state) => {
    return state.authStatus
  }
}

// actions
const actions = {
  async register({ commit, state }, submitEvent) {
    try {
      await client.post('/users/register', {
        "email": submitEvent.target.elements.email.value,
        "password": submitEvent.target.elements.password.value,
        "confirm_password": submitEvent.target.elements.confirm_password.value,
      })
      await router.push({ name: 'tables'})
    } catch (e) {
      commit('failAuth', e)
    }
  },
  async login({ commit, state }, submitEvent) {
    let data = {
      "email": submitEvent.target.elements.email.value,
      "password": submitEvent.target.elements.password.value,
    }
    try {
      await client.post('/auth/login', data)
      await router.push({ name: 'tables'})
    } catch (e){
      commit('failAuth', e)
    }
  },
  async logout({ commit }) {
    try {
      await client.post('/auth/logout')
      await router.push({ name: 'main'})
    } catch (e){
      commit('failAuth', e)
    }
  },
  async check_auth({ commit }) {
    let result = await client.get('/auth/is_auth')
    commit("setStatus", result.data)
  }
}

const mutations = {
  failAuth(state, error) {
    alert(error)
  },
  setStatus(state, status){
    state.authStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
