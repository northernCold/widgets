<template>
  <div class="wechat-avatar" ></div>
</template>
<script setup>
const props = defineProps({
  url: String,
});
console.log(props)
</script>
<style lang="scss" scoped>
.wechat-avatar {
  display: block;
  width: 45px;
  height: 45px;
  margin: 0;
  border-radius: 2px;
}
</style>
