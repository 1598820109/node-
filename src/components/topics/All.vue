<template>
  <div class="all">
    <div class="pet_mian">
      <!-- 顶部导航 -->
      <div class="pet_head">
        <header data-am-widget="header" class="am-header am-header-default pet_head_block">
          <div class="am-header-left am-header-nav ">
            <a href="/" class="iconfont pet_head_jt_ico">&#xe601;</a>
          </div>
          <div class="text-center">
            <h3>{{message}}</h3>
          </div>
          <div class="am-header-right am-header-nav">
            <a href="javascript:;" class="iconfont pet_head_gd_ico">&#xe600;</a>
          </div>
          <loading v-if="!items.length"></loading>
        </header>
      </div>
      <!-- 顶部导航   end-->
      <!-- 内容列表 -->
      <div class="pet_content pet_content_list">
        <div class="pet_article_like">
          <div class="pet_content_main pet_article_like_delete">
            <div data-am-widget="list_news" class="am-list-news am-list-news-default am-no-layout">
              <div class="am-list-news-bd">
                <ul class="am-list">
                  <!--缩略图在标题右边-->
                  <router-link tag="li" :to="'/show/'+item.id" v-for="(item, index) in items" :key="index.id"
                    class="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-right pet_list_one_block">
                    <div class="pet_list_one_info">
                      <div class="pet_list_one_info_l">
                        <div class="pet_list_one_info_ico"><img v-lazy="item.author.avatar_url" alt=""></div>
                        <div class="pet_list_one_info_name">{{item.loginname}} </div>
                      </div>
                      <div class="pet_list_one_info_r">
                        <div class="pet_list_tag pet_list_tag_xxs" v-if="item.top">置顶</div>
                        <div class="pet_list_tag pet_list_tag_zzs" v-else-if="item.good">精华</div>
                        <div class="pet_list_tag pet_list_tag_mzt" v-else>{{Tab[item.tab]}}</div>
                      </div>
                    </div>

                    <div class=" am-u-sm-8 am-list-main pet_list_one_nr">
                      <h3 class="am-list-item-hd pet_list_one_bt"><a href="###" class="">{{item.title}}</a>
                      </h3>
                      <div class="am-list-item-text pet_list_one_text  otext">
                      </div>
                    </div>

                    <div class="am-u-sm-4 am-list-thumb">
                      <a href="###" class="">
                        <img v-lazy="item.author.avatar_url" class="pet_list_one_img" alt="" />
                      </a>
                    </div>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 内容列表 -->

      <!-- 无限加载组件 -->
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
  </div>
</template>

<script>
  import {
    getItemDate
  } from '@/getdate/http.js'

  //加载loading组件
  import Loading from '@/components/loading/loading.vue'
  // 引用无限加载组件
  import InfiniteLoading from 'vue-infinite-loading';

  export default {
    name: 'All',
    data() {
      return {
        message: "全部",

        items: [],
        // 分页
        page: 1,
        // 主题分类
        Tab: {
          good: '精华',
          share: "分享",
          ask: "问答",
          job: "招聘",
          dev: "测试",
        }
      }
    },

    components: {
      Loading,
      InfiniteLoading,
    },

    // 引入数据列表组件
    mounted() {
      // 调用方法
      getItemDate({
        page: this.page,
        limit: 40
      }).then((data) => {
        this.items = data.data.data;
      })
    },

    // 无限加载方法
    methods: {
      infiniteHandler($state) {
        setTimeout(() => {
          getItemDate({
            page: ++this.page,
            limit: 20
          }).then((data) => {
            this.items = this.items.concat(data.data.data)
            $state.loaded();
          })
        }, 1000);
      },
    },
  }

</script>

<style>
  @import '../../assets/css/amazeui.min.css';
  /*引入公共样式*/
  @import '../../assets/css/wap.css';
  /*引入公共样式*/
</style>
