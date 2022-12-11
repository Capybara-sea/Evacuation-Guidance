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
  @include not-select;
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
  @mixin btn-theme($text, $bg, $border) {
    color: var($text);
    background: var($bg);
    border: 1px var($border) solid;
  }
  
  @include btn-theme(--mb-text-color, --mb-bg-color, --mb-border-color);

  @media (any-hover: hover) {
    &:hover {
      @include btn-theme(--mb-hover-text-color, --mb-hover-bg-color, --mb-hover-border-color);
    }
  }

  &:active {
    @include btn-theme(--mb-active-text-color, --mb-active-bg-color, --mb-active-border-color);
  }

  &.disabled {
    pointer-events: none;
    @include btn-theme(--mb-disabled-text-color, --mb-disabled-bg-color, --mb-disabled-border-color);
  }
}
</style>
