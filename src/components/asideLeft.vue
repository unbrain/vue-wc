<template>
  <div :class="$style.asideleft">
    <svg
      :class="{[$style.icon]:1,[$style.iconbig]:1}"
      aria-hidden="true"
    >
      <use xlink:href="#icon-spiderman"></use>
    </svg>

    <svg
      :class="{[$style.icon]:1,[$style.iconbig]:1}"
      aria-hidden="true"
    >
      <use xlink:href="#icon-spider"></use>
    </svg>
    <div :class="$style.controller">
      <div
        :class="$style.controllericonwrap"
        v-for="(item, index) in controllerSvgDeatail"
        :key="index"
      >
        <svg
          :class="$style.icon"
          aria-hidden="true"
        >
          <use :xlink:href="item.name"></use>
        </svg>
        <span
          :class="$style.iconbubble"
          v-text="item.message"
        > </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      controllerSvgDeatail: [
        { name: '#icon-search', message: 'search' },
        { name: '#icon-clear', message: 'clear redis data' },
        { name: '#icon-switch', message: 'restart' }]
    }
  }
};
</script>

<style lang="postcss" module>
@import "../base/gobal.css";
.asideleft {
  @mixin flexbox;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
.icon {
  @mixin svg;
}
.icon:hover {
  background: #262e35;
  fill: #fff;
}
.iconbig {
  margin: 12px;
  width: 36px;
  height: 36px;
}
.controller {
  @mixin flexbox;
  flex-direction: column;
  padding-bottom: 36px;
}
.controllericonwrap {
  position: relative;
  & .iconbubble {
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
    transition: all 1s;
    opacity: 0;
    white-space: nowrap;
  }
  & .iconbubble::before {
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
.controllericonwrap:hover {
  & .iconbubble {
    opacity: 1;
  }
}
</style>
