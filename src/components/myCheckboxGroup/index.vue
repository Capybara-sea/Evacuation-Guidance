<template>
  <div class="my-checkbox-group-container">
    <!-- checkbox-group modelValue {{ modelValue }} checkList {{ checkList }} -->
    <slot> </slot>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'

// define Props&Emit
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

// define checkList
const defaultModelValue = (() => {
  const e = props.modelValue
  return Array.isArray(e) ? e : []
})()
const checkList = ref(defaultModelValue)

function onChange(check) {
  const index = checkList.value.indexOf(check)
  if (index == -1) {
    checkList.value.push(check)
  } else {
    checkList.value.splice(index, 1)
  }
  emit('update:modelValue', checkList.value)
}

provide('myCheckboxGroup', {
  checkList,
  onChange,
})
</script>

<style lang="scss" scoped>
// .my-checkbox-group-container{
//   display: grid;
//   gap: 10px;
// }
</style>
