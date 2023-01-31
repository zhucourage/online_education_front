<template>
  <div class="login-container">
    <!-- 返回 -->
    <div class="back" @click="$router.back()">
      <van-icon name="arrow-left" size="25" />
    </div>


    <!-- title -->
    <div class="nav">Log In</div>


    <!-- 表单 -->
    <div class="inputs">
      <div class="id">
        <van-icon name="contact" size="27" />
        <input type="text" v-model="user.id"/>
      </div>
      <div class="password">
        <van-icon name="closed-eye" size="27" />
        <input type="password" v-model="user.code"/>
      </div>
    </div>


    <!-- 错误提示 -->
    <div class="tips">Incorrect code</div>
    

    <!-- 登陆按钮 -->
    <div class="login" >
      <button @click="onLogin">Log In</button>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: "",
        code: "",
      },
    };
  },
  methods:{
    onLogin(){
      console.log(123);
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  position: relative;
  padding: 50px 40px 0 40px;
  .nav {
    font-weight: 700;
    font-size: 30px;
    margin: 40px 0;
  }
  .inputs {
    margin-top: 70px;
    .van-icon {
      margin: auto 0;
    }
    .id {
      display: flex;
      border-bottom: 1px solid rgb(0, 0, 0);
      margin-bottom: 27px;
      input {
        letter-spacing: 2px;
      }
    }
    .password {
      display: flex;
      border-bottom: 1px solid rgb(0, 0, 0);
      margin-bottom: 27px;
      letter-spacing: 5px;
      input {
        letter-spacing: 5px;
      }
    }
    input {
      margin: 0 0 5px 15px;
      background-color: transparent;
      border: none;
      height: 30px;
      width: 100%;
      font-size: 20px;
    }
  }
  .tips,
  .login {
    position: absolute;
  }
  .tips {
    color: rgb(246, 89, 89);
    font-size: 17px;
    left: 30%;
    margin-top: -13px;
  }

  .login {
    left: 20%;
    button {
      margin: 50px auto;
      width: 230px;
      height: 60px;
      font-size: 25px; 
      font-weight: 600;
      border-radius: 28px;
      border: none;
      box-shadow: 0 10px 15px 2px rgba(36, 36, 36, 0.12);
    }
  }
}
</style>
