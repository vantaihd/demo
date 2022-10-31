import { api } from "./api";

export default {
  getAllCoffee() {
    return api("/coffee/hot");
  },
};
