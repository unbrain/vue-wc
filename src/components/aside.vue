<template>
  <div :class="$style.aside">
    <wc-aside-left></wc-aside-left>
    <wc-aside-right></wc-aside-right>
  </div>
</template>

<script>
import asideLeft from "@/components/asideLeft";
import asideRight from "@/components/asideRight";

export default {
  components: {
    "wc-aside-left": asideLeft,
    "wc-aside-right": asideRight
  }
};
</script>

<style lang="postcss" module>
@import "../base/gobal.css";

.aside {
  position: relative;
  @mixin flexbox;
  background-color: #16191c;
  height: 100vh;
}
</style>
