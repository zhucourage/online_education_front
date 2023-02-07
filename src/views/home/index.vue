<template>
  <div class="home-container">


    <!-- header & search  -->
    <div class="header">
      <div class="title">XStudy</div>
      <van-icon name="search" size="35" />
    </div>


    <!-- swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://w.wallhaven.cc/full/l8/wallhaven-l83o92.jpg" alt="loading..." />
        </div>
        <div class="swiper-slide">
          <img src="http://rok8si1hi.hb-bkt.clouddn.com/online_education/thumbnail/machine.png"
            alt="loading..." />
        </div>
        <div class="swiper-slide">
          <img src="https://w.wallhaven.cc/full/l8/wallhaven-l83o92.jpg" alt="loading..." />
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>


    <!-- 分类 -->
    <div class="type">
      <div class="perType">
        <img src="http://rok8si1hi.hb-bkt.clouddn.com/online_education/thumbnail/java-icon-images-5.png" alt="" />
        <div class="name">java</div>
      </div>
      <div class="perType">
        <img src="http://rok8si1hi.hb-bkt.clouddn.com/online_education/thumbnail/linux-icon.png" alt="" />
        <div class="name">Linux</div>
      </div>
      <div class="perType">
        <img src="http://rok8si1hi.hb-bkt.clouddn.com/online_education/thumbnail/java-icon-images-5.png" alt="" />
        <div class="name">java</div>
      </div>
      <div class="perType">
        <img src="http://rok8si1hi.hb-bkt.clouddn.com/online_education/thumbnail/java-icon-images-5.png" alt="" />
        <div class="name">java</div>
      </div>
      <div class="perType">
        <img src="http://rok8si1hi.hb-bkt.clouddn.com/online_education/thumbnail/java-icon-images-5.png" alt="" />
        <div class="name">java</div>
      </div>
      <div class="perType">
        <img src="http://rok8si1hi.hb-bkt.clouddn.com/online_education/thumbnail/java-icon-images-5.png" alt="" />
        <div class="name">java</div>
      </div>
      <div class="perType">
        <img src="http://rok8si1hi.hb-bkt.clouddn.com/online_education/thumbnail/obsidian.png" alt="" />
        <div class="name">java</div>
      </div>
      <div class="perType">
        <img src="http://rok8si1hi.hb-bkt.clouddn.com/online_education/thumbnail/flag-united-states_1f1fa-1f1f8.png" alt="" />
        <div class="name">java</div>
      </div>
      <div class="perType">
        <img src="http://rok8si1hi.hb-bkt.clouddn.com/online_education/thumbnail/machine_Learning_2.png" alt="" />
        <div class="name">java</div>
      </div>
      <div class="perType">
        <img src="http://rok8si1hi.hb-bkt.clouddn.com/online_education/thumbnail/d-python-symbol-white-background-rendering-224812812-removebg-preview.png" alt="" />
        <div class="name">java</div>
      </div>
    </div>


    <!-- hot article -->
    <div class="title">Hot Articles</div>
    <div class="hotArticle">
      <div class="perArticle">
        <div class="img"></div>
        <div class="name">dddd</div>
      </div>
      <div class="perArticle">
        <div class="img"></div>
        <div class="name"></div>
      </div>
      <div class="perArticle">
        <div class="img"></div>
        <div class="name"></div>
      </div>
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
      // background-color: rgb(249, 246, 246);
    }
  }

  .swiper-container {
    border-radius: 5px;
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

  .type {
    width: 100%;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .perType {
      width: 17%;
      height: auto;
      img {
        width: 85%;
      }
      .name {
        font-size: 17px;
        color: gray;
        text-align: center;
      }
    }
  }
  .title {
      font-size: 25px;
      margin-bottom: 20px;
    }
  .hotArticle {
    border: 1px solid green;
    width: 100%;
    height: 200px;
    white-space: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
    .perArticle {
      width: 200px;
      height: inherit;
      display: inline-block;
      margin-right: 20px;
      box-sizing: border-box;
      .img {
        width: 100%;
        height: 170px;
        background-color: rgb(152, 121, 121);
        img {
          width: 100%;
        }
      }
      .name {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
        background-color: rgb(183, 105, 105);
      }
    }
  }
}
</style>
