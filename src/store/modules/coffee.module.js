import CoffeeService from "../../services/Coffee.service";

const state = {
  coffee: [{ hihi: "hih" }],
};

const getters = {
  getAllCoffee(state) {
    return state.coffee;
  },
};

const mutations = {
  setCoffe(state, payload) {
    state.coffee = payload;
  },
};

const actions = {
  async getCoffeeByActions({ commit }) {
    const data = await CoffeeService.getAllCoffee();
    await commit("setCoffe", data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
