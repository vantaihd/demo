<template>
  <Header />
  <slot />
  <Footer />
  <h1>182362876328</h1>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  }
}
</script>