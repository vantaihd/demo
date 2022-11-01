<template>
  <div class="auth h-[100vh] flex justify-center items-center">
    <div
      class="
        form
        bg-[#F4F4F4]
        h-[600px]
        w-[400px]
        rounded-[10px]
        flex flex-col
        items-center
      "
    >
      <h1 class="text-4xl mt-[49px]">Đăng nhập</h1>
      <form class="m-[74px]" @submit.prevent="onHandleSubmit">
        <div class="flex flex-col w-[300px] h-[80px] mb-[20px]">
          <label for="userName" class="mb-[10px]">Tên người dùng</label>
          <input
            type="text"
            name="userName"
            id="userName"
            class="rouned-[10px] h-[28px] p-[10px]"
            v-model.lazy="form.username"
          />
          <span class="text-red-500" v-if="!userNameIsValid"> Bắt buộc </span>
        </div>
        <div class="flex flex-col w-[300px] h-[80px] mb-[30px]">
          <label for="userName" class="mb-[10px]">Mật khẩu</label>
          <input
            type="text"
            name="pasword"
            id="pasword"
            class="rouned-[10px] h-[28px] p-[10px]"
            v-model.lazy="form.password"
          />
          <span class="text-red-500" v-if="!passwordIsValid"> Bắt buộc </span>
        </div>
        <div class="flex justify-center">
          <button
            class="
              bg-[#546FFF]
              rounded-[10px]
              p-[10px]
              pl-[20px]
              pr-[20px]
              text-white
            "
            type="submit"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { LocalStorageService } from "@/share/storage";
const localStorage = new LocalStorageService();
export default {
  name: "AuthView",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    userNameIsValid() {
      return !!this.form.username;
    },
    passwordIsValid() {
      return !!this.form.password;
    },
    formIsValid() {
      return this.userNameIsValid && this.passwordIsValid;
    },
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async onHandleSubmit() {
      if (!this.formIsValid) return;
      const result = await this.login(this.form);
      if (result) {
        localStorage.set("isLogin", true);
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
.auth {
  background-image: url("@/assets/images/login-bg.png");
}
</style>
