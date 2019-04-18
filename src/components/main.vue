<template>
  <div :class="$style.main">
    <div :class="$style.mask">
      <svg
        :class="[$style.icon,$style.iconbig,$style.return]"
        aria-hidden="true"
        v-show="!show"
        @click="show=!show"
      >
        <use xlink:href="#icon-return"></use>
      </svg>
      <div
        v-show="show"
        v-for="(item, index) in gzh.gzhs_list_data.data"
        :key="index"
        :class="$style.cardwrap"
      >
        <div :class="$style.card">
          <div :class="$style.cardtitle">
            <div
              :class="[$style.titlenum, $style.textwrap]"
              @click="getArticleList(item.nickname)"
            >
              <div v-text="item.article_num"></div>
              <span :class="$style.textbubble">总计爬取文章数</span>
            </div>
            <div :class="$style.textwrap">
              <div v-text="item.update_time"></div>
              <span :class="$style.textbubble">上次爬取时间</span>
            </div>
          </div>
          <div :class="[$style.cardbody, $style.textwrap]">
            <div
              v-text="item.nickname"
              @click="getReport(item.nickname)"
            ></div>
            <span :class="$style.textbubble">公众号名称</span>
          </div>
          <div :class="[$style.cardfooter, $style.textwrap]">
            <div v-text="item.update_num"></div>
            <span :class="$style.textbubble">上次更新文章数</span>
          </div>
        </div>
      </div>
      <div
        v-show="!show"
        v-for="(item,index) in  this.$store.state.allArticles.articles"
        :key="item.content_url"
        :class="[$style.cardwrap,$style.articlecard]"
      >
        <div :class="$style.card">
          <div :class="$style.cardtitle">
            <div :class="[$style.titlenum, $style.textwrap]">
              <div v-text="index+1"></div>
              <span :class="$style.textbubble">index</span>
            </div>
            <div :class="$style.textwrap">
              <div v-text="item.p_date"></div>
              <span :class="$style.textbubble">发布时间</span>
            </div>
          </div>
          <div :class="[$style.cardbody, $style.textwrap]">
            <div
              v-text="item.title"
              :class="$style.articletextwrap"
              @click="open(item.content_url)"
            ></div>
            <span
              :class="$style.textbubble"
              v-text="item.title"
            ></span>
          </div>
          <div :class="$style.articlefooterwrap">
            <div :class="[$style.articlefooter, $style.textwrap]">

            </div>
            <div :class="[$style.articlefooter, $style.textwrap]">
              <svg
                :class="{[$style.icon]:1,[$style.iconbig]:1}"
                aria-hidden="true"
              >
                <use xlink:href="#icon-look"></use>
              </svg>
              <div v-text="item.read_num"></div>
              <span :class="$style.textbubble">阅读量</span>
            </div>
            <div :class="[$style.articlefooter, $style.textwrap]">
              <svg
                :class="{[$style.icon]:1,[$style.iconbig]:1}"
                aria-hidden="true"
              >
                <use xlink:href="#icon-money"></use>
              </svg>
              <div>{{item.reward_num | formatNum}}</div>
              <span :class="$style.textbubble">赞赏量</span>
            </div>
            <div :class="[$style.articlefooter, $style.textwrap]">
              <svg
                :class="{[$style.icon]:1,[$style.iconbig]:1}"
                aria-hidden="true"
              >
                <use xlink:href="#icon-comment"></use>
              </svg>
              <div>{{item.comment_num | formatNum}}</div>
              <span :class="$style.textbubble">评论量</span>
            </div>
            <div :class="[$style.articlefooter, $style.textwrap]">
              <svg
                :class="{[$style.icon]:1,[$style.iconbig]:1}"
                aria-hidden="true"
              >
                <use xlink:href="#icon-like"></use>
              </svg>
              <div v-text="item.like_num"></div>
              <span :class="$style.textbubble">点赞量</span>
            </div>
            <div
              :class="[$style.articlefooter, $style.textwrap]"
              v-if="item.author"
            >
              <svg
                :class="{[$style.icon]:1,[$style.iconbig]:1}"
                aria-hidden="true"
              >
                <use xlink:href="#icon-author"></use>
              </svg>
              <div v-text="item.author"></div>
              <span :class="$style.textbubble">作者</span>
            </div>
            <div
              :class="[$style.articlefooter, $style.textwrap]"
              v-if="item.upload_music[0]"
              @click="music(item.upload_music[0])"
            >
              <svg
                :class="{[$style.icon]:1,[$style.iconbig]:1}"
                aria-hidden="true"
              >
                <use xlink:href="#icon-Music"></use>
              </svg>
              <span :class="$style.textbubble">音乐</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { win32 } from 'path';
export default {
  data() {
    return {
      gzh: { gzh_all_article_data: [], gzhs_list_data: [] },
      show: true
    }
  },
  computed: {
    list() {
      return (this.gzh.gzhs_list_data = this.$store.state.ls);
    }
  },
  watch: {
    list(n, o) {
      console.log(o)
      n = o;
    }
  },
  filters: {
    formatNum(num) {
      if (num < 0) {
        return 0
      }
      return num
    }
  },
  methods: {
    getArticleList(nickname) {
      this.$socket.emit('emit_nickname', nickname);
      this.show = false
    },
    getReport(nickname) {
      this.open(`http://localhost:5000/gzh_report/${nickname}`, '_blank');
    },
    open(href) {
      window.open(href);
    },
    music(href) {
      window.open(href, '_blank');
    }
  },
}
</script>

<style lang="postcss" module>
@import "../base/gobal.css";
.main {
  @mixin bg "@/assets/bg.jpg";
  height: 100vh;
  flex-grow: 1;
  color: #768191;
}
.mask {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(30, 23, 29, 0.9);
}
.cardwrap {
  margin: 24px;
  padding: 12px;
  border-radius: 12px;
  background-color: rgb(44, 52, 58);
}
.card {
  padding: 20px;
  width: 399px;
  border-radius: 12px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.11);
  background-color: rgb(52, 60, 67);
}
.articlecard {
  position: relative;
}
.cardtitle {
  @mixin flexbox;
  justify-content: space-between;
}
.titlenum {
  padding: 5px 10px;
  border-radius: 6px;
  background-color: rgba(68, 97, 223, 0.25);
  font-size: 16px;
  line-height: 24px;
  color: #5776f6;
}
.cardbody {
  @mixin flexbox;
  justify-content: flex-start;
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 24px;
  text-overflow: ellipsis;
  color: #c5ced6;
}
.articlefooterwrap {
  display: flex;
  flex-wrap: wrap;
}
.articlefooter {
  @mixin flexbox;
  justify-content: flex-start;
  padding: 5px;
  font-size: 16px;
  color: #c5ced6;
}
.cardfooter {
  @mixin flexbox;
  justify-content: flex-end;
}

.textwrap {
  position: relative;
  cursor: pointer;
  & .textbubble {
    position: absolute;
    display: inline;
    margin-top: -15px;
    margin-left: 10px;
    padding: 2px 7px;
    left: 100%;
    top: 50%;
    height: 26px;
    border-radius: 6px;
    background-color: rgba(38, 46, 53, 0.8);
    line-height: 26px;
    font-size: 12px;
    color: #fff;
    transition: all 0.8s;
    opacity: 0;
    white-space: nowrap;
  }
  & .textbubble::before {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: -3px;
    margin-top: -3px;
    content: "";
    border-top: 3px solid transparent;
    border-right: 3px solid rgba(38, 46, 53, 0.8);
    border-bottom: 3px solid transparent;
  }
}
.articletextwrap {
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 360px;
  overflow: hidden;
}
.textwrap:hover {
  & .textbubble {
    opacity: 1;
  }
}
.icon {
  @mixin svg;
}
.icon:hover {
  fill: #fff;
}
.return {
  position: fixed;
  right: 30px;
  top: 30px;
}
</style>
