<template>
  <div class="my-checkbox-container" @click="onClick">
    <slot :checked="isChecked">{{ label }}</slot>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { inject } from 'vue'

const props = defineProps({
  label: {
    type: String,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:modelValue'])

// Components<myCheckboxGroup>
const group = inject('myCheckboxGroup', undefined)

function onClick() {
  if (group) {
    group.onChange(props.label)
  }
  emit('update:modelValue', !props.modelValue)
}

const isChecked = computed(() => {
  if (group.checkList) {
    return group.checkList.value.indexOf(props.label) != -1
  } else {
    return props.modelValue
  }
})
</script>

<style lang="scss" scoped>
</style>
