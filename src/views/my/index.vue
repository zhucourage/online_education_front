<template>
  <div class="my-container">
    <div class="header">
      <div class="logining">
        <div class="img">
          <img src="http://rok8si1hi.hb-bkt.clouddn.com/online_education/profile_photo/test.jpg" alt="">
        </div>
        <div class="info">
          <div class="name"></div>
          <div class="number">17863900390</div>
        </div>
        <div class="more">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="logined"  @click="toLogin">
        点击登陆
      </div>
    </div>


  </div>
</template>

<script>
export default {
  methods: {
    toLogin() {
      this.$router.push('/login')
    }
  }


}
</script>

<style lang="less" scoped>
.my-container {
  padding: 40px 25px;

  .header {
    display: flex;
    flex-wrap: wrap;
    height: auto;

    .img {
      width: 90px;
      height: 90px;
      border-radius: 50px;
      border: 2px solid white;
      overflow: hidden;
      margin-right: 10px;

      img {
        width: 100%;
      }
    }

    .info {
      position: relative;
      width: auto;

      .name {
        font-size: 26px;
      }

      .number {
        position: absolute;
        bottom: 0;
        font-size: 20px;
        color: gray;
      }
    }

    .more {}

  }

  .login {
    border: 1px solid red;
    color: red;
  }


}
</style>
