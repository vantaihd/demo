<template>
  <div class="container">
    <div v-if="!registerActive" class="card login" style="border-radius: 15px;">
      <form class="form" @submit.prevent="doLogin">
        <div class="title">
          <h1>Đăng nhập</h1>
        </div>
        <div class="inputgroup title">
          <label>Tên người dùng</label>
          <input v-model="userNameLogin" placeholder="Nhập tên người dùng" />
          <span v-if="err1" style="color:red">Vui lòng nhập tên người dùng</span>
        </div>
        <div class="inputgroup title">
          <label>Mật khẩu</label>
          <input v-model="passWordLogin" placeholder="Nhập mật khẩu" />
          <span v-if="err2" style="color:red">Vui lòng nhập mật khẩu</span>
          <span v-if="err3" style="color:red">Thông tin không chính xác</span>
        </div>
        <div class="action">
          <button type="submit" class="btnStyle">Đăng nhập</button>
        </div>
        <div>
          <p>
            Chưa có tài khoản?
            <a href="#" @click="registerActive = !registerActive, emptyFields = false">Đăng ký</a>
          </p>
        </div>
      </form>
    </div>
    <div v-else class="card register" style="border-radius: 15px;">
      <form class="form" @submit.prevent="doRegister">
        <div class="title">
          <h1>Đăng ký</h1>
        </div>
        <div class="inputgroup title">
          <label>Tên người dùng</label>
          <input v-model="userNameReg" placeholder="Nhập tên người dùng" />
          <span v-if="errReg1" style="color:red">Vui lòng nhập tên người dùng</span>
        </div>
        <div class="inputgroup title">
          <label>Mật khẩu</label>
          <input v-model="passWordReg" placeholder="Nhập mật khẩu" />
          <span v-if="errReg2" style="color:red">Vui lòng nhập mật khẩu</span>
          <label>Nhập lại mật khẩu</label>
          <input v-model="confirmPassWordReg" placeholder="Nhập lại mật khẩu" />
          <span v-if="errReg3" style="color:red">Vui lòng nhập lại mật khẩu</span>
          <span v-if="errReg4" style="color:red">Mật khẩu không khớp</span>
        </div>
        <div class="action">
          <button type="submit" class="btnStyle">Đăng ký</button>
        </div>        
        <div>
          <p>
            Đã có tài khoản?
            <a href="#" @click="registerActive = !registerActive, emptyFields = false">Đăng nhập</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "LoginView",
  components: {},
  data() {
    return {
      registerActive: false,
      userNameLogin: "",
      passWordLogin: "",
      userNameReg: "",
      passWordReg: "",
      confirmPassWordRegReg: "",
      err1: false,
      err2: false,
      err3: false,
      errReg1: false,
      errReg2: false,
      errReg3: false,
      errReg4: false,
    };
  },
  methods: {
    doLogin() {
      //console.log(this.userNameLogin, this.passWordLogin)
      this.err3 = false;
      if (!this.userNameLogin) {
        this.err1 = true;
      } else {
        this.err1 = false;
      }
      if (!this.passWordLogin) {
        this.err2 = true;
      } else {
        this.err2 = false;
      }      
      if (this.userNameLogin && this.passWordLogin) {        
        if(this.userNameLogin.toLowerCase()=="admin" && this.passWordLogin.toLowerCase()=="123"){          
          
          this.$router.push({ path: "/" });
        }
        else{
            this.err3 = true;
        }
      }
    },
    doRegister() {
      //console.log(this.userNameReg, this.passWordReg)
      this.errReg4 = false;
      if (!this.userNameReg) {
        this.errReg1 = true;
      } else {
        this.errReg1 = false;
      }
      if (!this.passWordReg) {
        this.errReg2 = true;
      } else {
        this.errReg2 = false;
      }
      if(!this.confirmPassWordReg){
        this.errReg3 = true;
      }else{
        this.errReg3 = false;
      }
      if (this.userNameReg && this.passWordReg && this.confirmPassWordReg)
      {
        if(this.passWordReg !== this.confirmPassWordReg) {
          this.errReg4 = true;
        } else {
          this.errReg4 = false;
          alert('Đăng ký tài khoản thành công.')
          this.registerActive = false;
        }
      }
    }
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.form {
  width: 400px;
  height: 70%;
  background-color: #F4F4F4;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
}

.title {  
  margin: 20px 0;
}

.inputgroup {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

input {
  padding: 5px;
  border-radius: 10px;
  border: solid;
  border-width: 0.5px;
}

button { 
  padding: 5px;
  border-radius: 10px;
}

.btnStyle
{
  width: 180px;
  background-color: dodgerblue;
  color: white;
  border: none;
}
</style>
