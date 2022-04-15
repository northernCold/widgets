<template>
  <div class="widget" @click.native="handleClick">
    <div class="widget-icon">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  href: String
})

const handleClick = () => {
  if (props.href) {
    window.open(props.href, "_blank")
  }
}
</script>
