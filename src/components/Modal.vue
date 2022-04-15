<template>
  <transition
    name="modal-fade">
    <div v-show="props.visible" class="modal-wrapper">
      <div @click.self="handleWrapperClick" class="modal-mask"></div>
      <div class="modal-container">
        <slot></slot>
      </div>
    </div>

  </transition>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue';
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['clickOutside'])
const visible = ref(false);
const handleWrapperClick = () => {
  emit('clickOutside');
}
</script>
<style lang="scss" scoped>
.modal {
  &-mask {
    position: absolute;
    inset: 0px;
    background: rgba(15, 15, 15, 0.6);
  }
  &-wrapper {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    opacity: 1;
    transform: translateZ(0px);
  }
  &-container {
    position: relative;
    z-index: 1;
    box-shadow: rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 5px 10px, rgb(15 15 15 / 20%) 0px 15px 40px;
    border-radius: 3px;
    background: white;
    margin-bottom: 0px;
    width: 1150px;
    max-width: calc(100vw - 100px);
    height: calc(100vh - 100px);
    overflow: hidden;
    max-height: 715px;
  }
}
</style>