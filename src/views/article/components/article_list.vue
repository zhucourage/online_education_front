<template>
  <div class="article_list_container">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item.id" :title="item.title" />
    </van-list>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    // async onLoad() {
    //   const { data } = await getArticleById({
    //     id: this.type.id
    //   })
    //   this.list.push(...data.data)
    //   this.loading = false;
    // },
  },
  props: {
    type: {
      require: true,
      type: Object,
    },
  },
  computed: {},
  watch: {},
  created() {},
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
.article_list_container {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  top: 46px;
  overflow-y: auto;
}
</style>
