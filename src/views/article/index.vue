<template>
  <div class="article_container"></div>
</template>

<script>
import ArticleList from "./components/article_list";
export default {
  components: {
    ArticleList,
  },
  data() {
    // 这里存放数据
    return {
      active: 0,
    };
  },
  methods: {},

  created() {
    this.getTypes();
  },
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang='less' scoped>
</style>
