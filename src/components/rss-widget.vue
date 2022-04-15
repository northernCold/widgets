<template>
  <div class="widget large" :class="$style.rss">
    <div class="widget-icon">
      <div :class="$style.header">
        <svg
          viewBox="0 0 14 14"
          class="hamburgerMenu"
          style="
            width: 16px;
            height: 16px;
            display: block;
            fill: rgba(55, 53, 47, 0.85);
            flex-shrink: 0;
            backface-visibility: hidden;
          "
        >
          <path
            d="M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z"
          ></path>
        </svg>
      </div>
      <div class="rss-body"></div>
    </div>
    <div :class="$style.sidebar"></div>
  </div>
</template>
<script setup>
const props = defineProps({
  href: String,
});
</script>
<style lang="scss" module>
.rss {
  position: relative;
  overflow: hidden;
}
.header {
  padding: 12px 0;
}
.sidebar {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 245px;
  height: calc(100% - 30px);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background: white;
  box-shadow: 0 0 5px #0000001a;
}
</style>
