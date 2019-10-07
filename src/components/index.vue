<template>
  <div class="index">
    <div data-am-widget="gotop" class="am-gotop am-gotop-fixed">
      <a href="#top" title="返回顶部">
        <img class="am-gotop-icon-custom" src="../assets/img/goTop.png" />
      </a>
    </div>

    <div class="pet_mian" id="top">
      <!-- 轮播图 -->
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/img/fl01.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/img/fl02.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/img/fl03.png" alt />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- Swiper -->
      <!-- 轮播图    end -->

      <!-- 导航栏部分 -->
      <div class="pet_circle_nav">
        <ul class="pet_circle_nav_list">
          <router-link to tag="li">
            <a href class="iconfont pet_nav_xinxianshi">&#xe61e;</a>
            <span>热门</span>
          </router-link>
          <router-link to="/good" tag="li">
            <a href class="iconfont pet_nav_zhangzhishi">&#xe607;</a>
            <span>精华</span>
          </router-link>
          <router-link to="/ask" tag="li">
            <a href class="iconfont pet_nav_kantuya">&#xe62c;</a>
            <span>问答</span>
          </router-link>
          <router-link to="/share" tag="li">
            <a href class="iconfont pet_nav_mengzhuanti">&#xe622;</a>
            <span>分享</span>
          </router-link>
          <router-link to="/all" tag="li">
            <a href class="iconfont pet_nav_meirong">&#xe629;</a>
            <span>订阅</span>
          </router-link>
          <router-link to="/dev" tag="li">
            <a href class="iconfont pet_nav_yiyuan">&#xe602;</a>
            <span>PC测试</span>
          </router-link>
          <router-link to="/job" tag="li">
            <a href class="iconfont pet_nav_dianpu">&#xe604;</a>
            <span>招聘</span>
          </router-link>
          <router-link to="/all" tag="li">
            <a href class="iconfont pet_nav_gengduo">&#xe600;</a>
            <span>全部</span>
          </router-link>
          <!-- <li> <a href="javascript:;" class="iconfont pet_nav_gengduo ">&#xe600;</a><span>全部</span></li> -->
        </ul>
      </div>
      <!-- 导航栏部分end -->
      <div class="pet_content_main">
        <div data-am-widget="list_news" class="am-list-news am-list-news-default">
          <div class="am-list-news-bd">
            <ul class="am-list">
              <router-link
                :to="'/show/'+ item.id  "
                tag="li"
                v-for="item in items"
                :key="item.id"
                class="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-right pet_list_one_block"
              >
                <div class="pet_list_one_info">
                  <div class="pet_list_one_info_l">
                    <div class="pet_list_one_info_ico">
                      <img v-lazy="item.author.avatar_url" alt />
                    </div>
                    <div class="pet_list_one_info_name">{{item.author.loginname}}</div>
                  </div>
                  <div class="pet_list_one_info_r">
                    <div class="pet_list_tag pet_list_tag_xxs" v-if="item.top">置顶</div>
                    <div class="pet_list_tag pet_list_tag_zzs" v-else-if="item.good">精华</div>
                    <div class="pet_list_tag pet_list_tag_mzt" v-else>{{tab[item.tab]}}</div>
                  </div>
                </div>
                <div class="am-u-sm-8 am-list-main pet_list_one_nr">
                  <h3 class="am-list-item-hd pet_list_one_bt">
                    <a href="###" class>{{item.title}}</a>
                  </h3>
                  <div class="am-list-item-text pet_list_one_text otext"></div>
                </div>
                <div class="am-u-sm-4 am-list-thumb">
                  <a href="###" class>
                    <img v-lazy="item.author.avatar_url" class="pet_list_one_img" alt />
                  </a>
                </div>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
      <!-- 无限加载组件 -->
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      <!-- <div class="pet_article_dowload pet_dowload_more_top_off">
        <div class="pet_article_dowload_content pet_dowload_more_top_bg">
          <div class="pet_article_dowload_triangle pet_dowload_more_top_san"></div>
          <div class="pet_article_dowload_ico"><img src="../assets/img/footdon.png" alt=""></div>
          <div class="pet_article_dowload_content_font">
            Amaze UI 以移动优先（Mobile first）为理念，从小屏逐步扩展到大屏，最终实现所有屏幕适配，适应移动互联潮流。 </div>
          <div class="pet_article_dowload_all">
            <a href="###" class="pet_article_dowload_Az am-icon-apple"> App store</a>
            <a href="###" class="pet_article_dowload_Pg am-icon-android"> Android</a>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
// 引入主题数据的模块
import { getItemDate } from "@/getdate/http.js";
// 引用无限加载组件
import InfiniteLoading from "vue-infinite-loading";
export default {
  name: "Index",
  data() {
    return {
      // 主题数据
      items: [],
      page: 1,
      //主题分类对象
      tab: {
        good: "精华",
        share: "分享",
        ask: "问答",
        job: "招聘",
        dev: "测试"
      }
    };
  },

  components: {
    InfiniteLoading
  },

  // 引入数据列表组件
  mounted() {
    // 调用方法
    getItemDate({ limit: 10, page: this.page }).then(data => {
      this.items = data.data.data;
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

<style>
@import "../assets/css/amazeui.min.css";
/*引入公共样式*/
@import "../assets/css/wap.css";
</style>
