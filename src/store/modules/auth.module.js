const state = {
  user: {},
};

const getters = {
  getuser(state) {
    return state.user;
  },
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};

const actions = {
  async login({ commit }, payload) {
    console.log(payload, "payload");
    const { username, password } = payload;
    if (username === "admin" || password === "123456") {
      delete payload.password;
      commit("setUser", payload);
      return true;
    } else {
      return false;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
