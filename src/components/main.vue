<template>
  <div :class="$style.main">
    <div :class="$style.mask">
      <div>

      </div>
      <div
        v-for="(item, index) in gzh.gzhs_list_data.data"
        :key="index"
        :class="$style.cardwrap"
      >
        <div :class="$style.card">
          <div :class="$style.cardtitle">
            <div :class="[$style.titlenum, $style.textwrap]">
              <div v-text="item.article_num"></div>
              <span :class="$style.textbubble">总计爬取文章数</span>
            </div>
            <div :class="$style.textwrap">
              <div v-text="item.update_time"></div>
              <span :class="$style.textbubble">上次爬取时间</span>
            </div>
          </div>
          <div :class="[$style.cardbody, $style.textwrap]">
            <div v-text="item.nickname"></div>
            <span :class="$style.textbubble">公众号名称</span>
          </div>
          <div :class="[$style.cardfooter, $style.textwrap]">
            <div v-text="item.update_num"></div>
            <span :class="$style.textbubble">上次更新文章数</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gzh: { phone_crawler_data: [], gzhs_list_data: [] },
    }
  },
  computed: {
    list() {
      return (this.gzh.gzhs_list_data = this.$store.state.ls);
    }
  },
  watch: {
    list(n, o) {
      n = o;
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
  width: 260px;
  border-radius: 12px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.11);
  background-color: rgb(52, 60, 67);
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
.textwrap:hover {
  & .textbubble {
    opacity: 1;
  }
}
</style>
