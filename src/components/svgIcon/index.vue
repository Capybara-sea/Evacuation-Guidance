<template>
  <svg :class="svgClass" :style="svgStyle" aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  prefix: { type: String, default: 'icon' },
  name: { type: String, required: true },
  size: { type: String, default: '' },
  className: { type: String, default: '' },
  color: { type: String, default: '#409eff' },
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`
  }
  return 'svg-icon'
})
const svgStyle = computed(() => {
  if (props.size) {
    return { fontSize: props.size }
  }
  return {}
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>
