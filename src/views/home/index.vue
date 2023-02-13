<template>
  <div class="home-container">
    <!-- header & search  -->
    <div class="header">
      <div class="title">XStudy</div>
      <van-icon name="search" size="35" />
    </div>

    <!-- swipe -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swipeList" :key="index">
        <img :src="item.pic_url[0].picUrl" />
      </van-swipe-item>
    </van-swipe>

    <!-- 分类 -->
    <div class="title">Channels</div>
    <van-grid :column-num="4" :border="false" :icon-size="45">
      <van-grid-item
        v-for="(item, index) in channels"
        :key="index"
        :icon="item.icon"
        :text="item.type"
      />
    </van-grid>

    <!-- hot article -->
    <div class="title">Hot Articles</div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
import { getChannel } from "@/api/index_init";
import { getLastArticle } from "@/api/index_init";
import { getHotArticle } from "@/api/index_init";
export default {
  data() {
    return {
      channels: [],
      swipeList: [],
      hotList: [],
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    async getChannel() {
      if (this.channels.length == 0) {
        const { data } = await getChannel();
        this.channels = data.data;
      }
    },
    async getLastArticle() {
      let { data } = await getLastArticle();
      this.swipeList = data.data;
    },
    async getHotArticle(pageNum) {
      let { data } = await getHotArticle(pageNum);
      console.log(data);
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
  created() {
    this.getChannel();
    this.getLastArticle();
    this.getHotArticle(2);
  },
};
</script>

<style lang="less" scoped="true">
.home-container {
  padding: 40px 32px;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .title {
      font-size: 29px;
      font-weight: 600;
    }

    .van-icon-search {
      box-sizing: border-box;
      border-radius: 20px;
      padding: 5px;
    }
  }

  .my-swipe {
    margin-bottom: 35px;
    .van-swipe-item {
      border-radius: 3px;
      text-align: center;
      height: 200px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .van-grid {
    margin-top: -15px;
    margin-bottom: 23px;
  }
  .title {
    font-size: 25px;
    margin-bottom: 20px;
  }
}
</style>
