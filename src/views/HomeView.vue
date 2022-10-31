<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("coffee", ["getAllCoffee"]),
  },
  methods: {
    ...mapActions("coffee", ["getCoffeeByActions"]),
  },
  mounted() {
    // this.getCoffeeByActions();
  },
};
</script>

<template>
  <main>
  </main>
</template>
