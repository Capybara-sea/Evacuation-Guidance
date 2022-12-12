<template>
  <div class="i18n-container" :class="[size]">
    <section class="top" v-show="isTopShow" v-html="_tI"></section>
    <section class="main" v-html="_mI"></section>
  </div>
</template>

<script setup>
import { reactive, computed } from '@vue/reactivity'
import { useI18n } from 'vue-i18n'
import { langList, messages } from '@/i18n/index'

const props = defineProps({
  t: String,
  topShow: {
    type: Boolean,
    default: true,
  },
  lang: {
    type: String,
    default: 'ja-JP',
    validator: (value) => langList.includes(value),
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['large', 'default', 'small'].includes(value),
  },
})

// 设置上层语言环境
const i18n = reactive(useI18n())
const topI18n = useI18n({ messages: getMessages(props.lang) })
function getMessages(lang) {
  const localMessages = {}
  langList.forEach((key) => (localMessages[key] = messages[lang]))
  return localMessages
}

const _tI = computed(() => topI18n.t(props.t))
const _mI = computed(() => i18n.t(props.t))

// 是否显示上层
const isTopShow = computed(() => {
  if (i18n.locale == props.lang) return false
  if (_tI.value == _mI.value) return false
  return props.topShow
})
</script>

<style lang="scss" scoped>
.i18n-container {
  line-height: 1;
  width: fit-content;
  word-wrap: break-word;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial,
    sans-serif;

  .top {
    font-size: 0.7em;
    opacity: 0.8;
    margin-bottom: 0.2em;
  }
  &.small {
    font-size: $font-size-s !important;
  }
  &.default {
    font-size: $font-size-m !important;
  }
  &.large {
    font-size: $font-size-l !important;
  }
}
</style>
