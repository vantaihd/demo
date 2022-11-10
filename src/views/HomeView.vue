<script>
import Layout from "./Base/Layout.vue";

export default {
  name: "HomeView",
  components:{
    Layout,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <main>
    <div>
        <nav class="navbar navbar-expand navbar-light fixed-top">
            <div class="container">
                <a href="#" class="navbar-brand">Home</a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="/auth/login" class="nav-link">Login</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Sign up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  </main>
  
</template>
