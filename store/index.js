export const state = () => ({
  loggedIn: false,
  token: null
})

export const actions = {
  setToken ({ commit }, payload) {
    commit('SET_TOKEN', payload)
  }
}

export const mutations = {
  'SET_TOKEN' (state, payload) {
    const token = 'Bearer ' + payload.access_token

    // set values to auth store
    state.token = token
    state.loggedIn = !!state.token

    this.$router.push('/')
  }
}

export const getters = {}
