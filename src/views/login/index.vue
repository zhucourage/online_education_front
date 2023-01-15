<template>
  <div class="login-container">
    <!-- 返回 -->
    <div class="back" @click="$router.back()">
      <van-icon name="arrow-left" size="25" color="white" />
    </div>
    <!-- log in -->
    <div class="nav">Log In</div>
    <!-- 表单 -->
    <div class="inputs">
      <div class="id">
        <van-icon name="contact" color="white" size="27" />
        <input type="number" v-model="user.mobile"/>
      </div>
      <div class="password">
        <van-icon name="closed-eye" color="white" size="27" />
        <input type="password" v-model="user.code"/>
      </div>
    </div>
    <!-- 输入错误提示 -->
    <div class="tips">Incorrect code</div>
    <!-- 登陆按钮 -->
    <div class="login">
      <button>Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        moblie: "",
        code: "",
      },
    };
  },
};
</script>

<style lang="less" scoped>
.login-container {
  position: relative;
  height: 100vh;
  padding: 50px 40px 0 40px;
  background-color: #444a58;
  .nav {
    color: white;
    font-weight: 700;
    font-size: 30px;
    margin: 40px 0;
  }
  .inputs {
    margin-top: 70px;
    .van-icon {
      margin: auto 0;
    }
    .id,
    .password {
      display: flex;
      border-bottom: 1px solid rgb(223, 222, 222);
      margin-bottom: 27px;
    }
    input {
      margin: 0 0 5px 15px;
      background-color: transparent;
      border: none;
      height: 30px;
      width: 100%;
      color: white;
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
      background-color: rgb(35, 35, 35);
      color: white;         
      font-size: 25px; 
      font-weight: 600;
      border-radius: 28px;
      border: none;
      box-shadow: 0 2px 27px 6px rgba(219, 219, 219, 0.12);
    }
  }
}
</style>
