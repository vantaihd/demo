import { createStore } from "vuex";
import coffee from "./modules/coffee.module";
import auth from "./modules/auth.module";
const store = createStore({
  modules: {
    coffee,
    auth,
  },
});

export default store;
