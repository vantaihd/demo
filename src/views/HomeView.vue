<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomwView",
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
    <h1 class="text-3xl font-bold underline">Coffee</h1>
    {{ getAllCoffee }}
    <ul>
      <li></li>
    </ul>
  </main>
</template>
