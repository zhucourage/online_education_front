<template>
  <div class="home-container">
    <div class="header">
      <div class="title">XStudy</div>
      <van-icon name="search" size="30" />
    </div>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://w.wallhaven.cc/full/l8/wallhaven-l83o92.jpg"
            alt="loading..."
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://hbr.org/resources/images/article_assets/2022/04/01-BI_WEB3_STACKPOLE_HERO-1536x669.jpg"
            alt="loading..."
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://w.wallhaven.cc/full/rr/wallhaven-rrd6gj.jpg"
            alt="loading..."
          />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="type">
      <div class="perType">
        <img src="" alt="">
      </div>
    </div>
    <div class="hotArticle">
      <div class="title">Hot Articles</div>
      <div class="perArticle"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      // direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      autoplay: true,
      effect: "slide",
    });
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
      background-color: rgb(249, 246, 246);
    }
  }
  .swiper-container {
    border-radius: 10px;
    width: 100%;
    height: 190px;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: 30px;
    img {
      width: inherit;
      height: auto;
      object-fit: cover;
    }
  }
  .hotArticle {
    .title {
      font-size: 25px;
      margin-bottom: 20px;
    }
    .perArticle {
      width: 150px;
      height: 200px;
      border: 2px solid red;
    }
  }
}
</style>