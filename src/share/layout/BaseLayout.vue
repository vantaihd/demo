<template>
  <header>
    <slot name="header"></slot>
  </header>
  <main><slot name="main"></slot></main>
</template>
<script>
export default {
  name: "BaseLayout",
};
</script>

<style>
@import "./style.css";
</style>
