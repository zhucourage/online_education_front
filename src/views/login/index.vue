<template>
  <div class="login-container">
    <!-- $router.back() -->
    <div class="back" @click="$router.back()">
      <van-icon name="arrow-left" size="25" color="white" />
    </div>
    <div class="nav">Log In</div>

    <div class="inputs">
      <div class="id">
        <van-icon name="contact" color="white" size="27" />
        <input type="text" />
      </div>
      <div class="password">
        <van-icon name="closed-eye" color="white" size="27" />
        <input type="password" />
      </div>
    </div>

    <div class="tipsAndLogin">
      <div class="tips">Incorrect code</div>
      <div class="login">
        <button>Log In</button>
      </div>
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
  height: 100vh;
  width: 100vw;
  padding: 40px;
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
      margin: 0 0 5px 10px;
      background-color: transparent;
      border: none;
      height: 30px;
    }
  }
  .tips {
    color: rgb(246, 89, 89);
    font-size: 17px;
  }
  .login {
    button {
      margin: 30px auto;
      width: 230px;
      height: 60px;
      background-color: rgb(35, 35, 35);
      color: white;
      font-size: 25px;
      font-weight: 600;
      border-radius: 28px;
      border: none;
    }
  }
}
</style>
