import { createStore } from "vuex";
import coffee from "./modules/coffee.module";
const store = createStore({
  modules: {
    coffee,
  },
});

export default store;
