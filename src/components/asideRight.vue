<template>
  <div :class="$style.asideright">
    <div :class="[$style.iconwrap,$style.dashiconwrap]">
      <svg
        :class="$style.icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-icon-dashboard"></use>
      </svg>
      <div :class="[$style.content,$style.dashcontent]">Dashboard</div>
    </div>
    <div
      :class="$style.iconwrap"
      v-for="(item, index) in iconDetails"
      :key="index"
    >
      <svg
        :class="$style.icon"
        aria-hidden="true"
      >
        <use :xlink:href="item.name"></use>
      </svg>
      <div
        :class="$style.content"
        v-text="item.message"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconDetails: [
        { name: '#icon-list', message: 'gzh list' },
        { name: '#icon-details', message: 'crawel detail' },
        { name: '#icon-setting', message: 'setting' }]
    }
  }
};
</script>

<style lang="postcss" module>
@import "../base/gobal.css";
.asideright {
  height: 100vh;
  background-color: #1d2329;
}
.dashiconwrap {
  padding-top: 24px;
  padding-bottom: 24px;
}

.dashcontent {
  color: white;
  line-height: 48px;
  font-size: 20px;
}
.iconwrap {
  @mixin flexbox;
  justify-content: flex-start;
  padding-left: 24px;
  padding-right: 24px;
}
.iconwrap:hover {
  & .icon {
    fill: #fff;
  }
  & .content {
    transition: all 1s;
    color: #fff;
  }
}
.icon {
  @mixin svg;
  width: 24px;
  height: 24px;
}
.content {
  cursor: pointer;
}
</style>
