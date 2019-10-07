<template>
  <div class="ask">
    <!-- 加载组件 -->
    <topic-list :items="items" :title="title"></topic-list>
    <!-- 无限加载组件 -->
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
// 调用数据
import { getItemDate } from "@/getdate/http.js";

// 引入公用的数据列表模块
import TopicList from "@/components/topics/TopicList";
// 引用无限加载组件
import InfiniteLoading from "vue-infinite-loading";

// 引用公用组件
export default {
  name: "Ask",
  data() {
    return {
      // 问答数据
      items: [],
      title: [],
      page: 1
    };
  },

  // 定义组件
  components: {
    TopicList,
    InfiniteLoading
  },

  mounted() {
    //  获取专题数据
    getItemDate({
      tab: "ask",
      page: this.page
    }).then(data => {
      this.items = data.data.data;
      // 列表标题
      var date = data.data.data[0];
      this.title = date;
    });
  },

  // 无限加载方法
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        getItemDate({
          page: ++this.page,
          limit: 20
        }).then(data => {
          this.items = this.items.concat(data.data.data);
          $state.loaded();
        });
      }, 1000);
    }
  }
};
</script>

