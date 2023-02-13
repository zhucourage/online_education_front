<template>
  <div class="my-container">
    <van-cell-group :border="false" class="user_info">
      <van-cell title="zhucourage" value="" center :border="false">
        <van-image
          slot="icon"
          round
          width="80"
          height="80"
          src="./user.png"
          fit="cover"
        />
        <van-icon name="arrow" slot="right-icon" size="22" />
      </van-cell>
    </van-cell-group>
    <van-grid :column-num="2" center>
      <van-grid-item icon="star-o" text="收藏" />
      <van-grid-item icon="browsing-history-o" text="历史" />
    </van-grid>

    <van-cell title="单元格" is-link />

    <!-- <div class="logined" @click="toLogin">点击登陆</div> -->
  </div>
</template>

<script>
export default {
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.my-container {
  margin-top: 40px;
  .user_info {
    margin: 0 25px;
    .van-cell__title {
      margin-left: 25px;
      font-size: 20px;
    }
    .van-image {
      border: 2px solid rgb(221, 220, 220);
    }
  }
}
</style>
