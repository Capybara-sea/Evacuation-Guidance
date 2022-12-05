<template>
  <div class="my-btn-container" :class="[{ disabled }, position]" :style="btnStyle">
    <slot>
      <i18n-box :t="t" :size="size" />
    </slot>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { btnColor } from './util'

const props = defineProps({
  color: {
    type: String,
    default: '',
  },
  plain: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: 'center',
    validator: (value) => ['left', 'center', 'right'].includes(value),
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['large', 'default', 'small'].includes(value),
  },
  t: {
    type: String,
    default: '',
  },
})

const btnStyle = computed(() => btnColor(props.color, props.plain, props.dark))
</script>

<style lang="scss" scoped>
.my-btn-container {
  padding: 8px;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;
  transition: all 0.1s;

  // position
  &.center {
    display: flex;
    justify-content: center;
    * {
      text-align: center;
    }
  }

  &.right {
    display: flex;
    justify-content: flex-end;
    * {
      text-align: end;
    }
  }

  // theme
  color: var(--my-button-text-color);
  background: var(--my-button-bg-color);
  border: 1px var(--my-button-border-color) solid;

  @media (any-hover: hover) {
    &:hover {
      color: var(--my-button-hover-text-color);
      background: var(--my-button-hover-bg-color);
      border: 1px var(--my-button-hover-border-color) solid;
    }
  }

  &:active {
    color: var(--my-button-active-text-color);
    background: var(--my-button-active-bg-color);
    border: 1px var(--my-button-active-border-color) solid;
  }

  &.disabled {
    pointer-events: none;
    color: var(--my-button-disabled-text-color);
    background: var(--my-button-disabled-bg-color);
    border: 1px var(--my-button-disabled-border-color) solid;
  }
}
</style>
