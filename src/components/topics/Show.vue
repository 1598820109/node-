<template>
  <div class="show">
    <div class="pet_mian">
      <div class="pet_head">
        <header data-am-widget="header" class="am-header am-header-default pet_head_block">
          <div class="am-header-left am-header-nav">
            <router-link v-if="good" :to="'/good'" tag="a" class="iconfont pet_head_jt_ico">&#xe601;</router-link>
            <router-link v-else :to="'/'+tab" tag="a" class="iconfont pet_head_jt_ico">&#xe601;</router-link>
            <!-- <a href="/" class="iconfont pet_head_jt_ico">&#xe601;</a> -->
          </div>

          <h1 class="am-header-title pet_article_user">
            <div class="pet_article_user_info_tab">
              <div class="pet_article_user_info_tab_font">
                <div class="pet_article_user_info_tab_font_triangle"></div>
                <div class="pet_article_user_info_tab_font_center">
                  <i>文章</i>
                  <span>16篇</span>
                </div>
              </div>
            </div>
            <span class="pet_article_user_ico">
              <img :src="author_url" alt class />
            </span>
            <span class="pet_article_user_name">{{ authorName }}</span>
          </h1>

          <div class="am-header-right am-header-nav">
            <router-link to="/all" tag="a" class="iconfont pet_head_gd_ico">&#xe600;</router-link>
          </div>
        </header>
      </div>
      <div class="pet_content">
        <div class="pet_content_block">
          <article class="am-paragraph am-paragraph-default pet_content_article">
            <h1 class="pet_article_title">{{title}}</h1>
            <div class="pet_article_user_time">发表于：{{time}}</div>
            <p v-html="content" class="paragraph-default-p"></p>
          </article>
          <ul class="like_share_block">
            <li>
              <a class="link_share_button" href="###">
                <i class="iconfont share_ico_link">&#xe62f;</i>
                {{heat}}
              </a>
            </li>
            <li>
              <a class="link_share_button" href="###">
                <i class="iconfont share_ico_wx">&#xe630;</i>微信
              </a>
            </li>
            <li>
              <a class="link_share_button" href="###">
                <i class="iconfont share_ico_pyq">&#xe62e;</i>朋友圈
              </a>
            </li>
          </ul>
          <div class="pet_article_dowload">
            <div class="pet_article_dowload_title">关于Amaze UI</div>
            <div class="pet_article_dowload_content">
              <div class="pet_article_dowload_triangle"></div>
              <div class="pet_article_dowload_ico">
                <img src="../../assets/img/footdon.png" alt />
              </div>
              <div
                class="pet_article_dowload_content_font"
              >Amaze UI 以移动优先（Mobile first）为理念，从小屏逐步扩展到大屏，最终实现所有屏幕适配，适应移动互联潮流。</div>
              <div class="pet_article_dowload_all">
                <a href="###" class="pet_article_dowload_Az am-icon-apple">App store</a>
                <a href="###" class="pet_article_dowload_Pg am-icon-android">Android</a>
              </div>
            </div>
          </div>
        </div>

        <div class="pet_comment_list">
          <div class="pet_comment_list_wap">
            <div class="pet_comment_list_title">精彩评论</div>

            <div data-am-widget="tabs" class="am-tabs am-tabs-default pet_comment_list_tab">
              <ul class="am-tabs-nav am-cf pet_comment_list_title_tab">
                <li class="am-active">
                  <a href="[data-tab-panel-0]">人气</a>
                </li>
                <li class>
                  <a href="[data-tab-panel-1]">最新</a>
                </li>
                <li class>
                  <a href="[data-tab-panel-2]">最早</a>
                </li>
              </ul>

              <div class="am-tabs-bd pet_pl_list">
                <div data-tab-panel-0 class="am-tab-panel am-active">
                  <div
                    class="pet_comment_list_block"
                    v-for="(coms, index) in comments"
                    :key="index.id"
                  >
                    <div class="pet_comment_list_block_l">
                      <img :src="coms.author.avatar_url" alt />
                    </div>
                    <div class="pet_comment_list_block_r">
                      <div class="pet_comment_list_block_r_info">{{coms.author.loginname}}</div>
                      <div class="pet_comment_list_block_r_text" v-html="coms.content"></div>
                      <div class="pet_comment_list_block_r_bottom">
                        <div class="pet_comment_list_bottom_info_l">{{coms.create_at}}</div>
                        <div class="pet_comment_list_bottom_info_r">
                          <span>
                            <i class="iconfont">&#xe631;</i>5
                          </span>
                          <span>回复</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入数据模块
import { getArticleDate } from "@/getdate/http.js";

export default {
  name: "Show",
  data() {
    return {
      msg: "内容页",
      title: "",
      time: "",
      authorName: "",
      author_url: "",
      content: "",
      heat: "",
      comments: [],
      tab: "",
      good: ""
    };
  },

  // 钩子函数
  mounted() {
    // 获取栏目列表的id 取相对于的文章内容数据
    var params = this.$route.params.id;
    getArticleDate(params).then(data => {
      var authorData = data.data.data;
      console.log(data);

      this.title = authorData.title;
      this.time = authorData.create_at;
      this.authorName = authorData.author.loginname;
      this.author_url = authorData.author.avatar_url;
      this.content = authorData.content;
      this.heat = authorData.visit_count;
      this.tab = authorData.tab;
      this.good = authorData.good;

      // 获取评论
      this.comments = authorData.replies;
    });
  }
};
</script>

<style>
@import "../../assets/css/amazeui.min.css";
/*引入公共样式*/
@import "../../assets/css/wap.css";
/*引入公共样式*/
</style>