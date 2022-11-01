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
    <base-layout>
      <template #header>
        <base-header />
      </template>
      <template #main>
        <base-main />
      </template>
    </base-layout>
  </main>
</template>
