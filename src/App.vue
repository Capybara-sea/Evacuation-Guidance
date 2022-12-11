<template>
  <layout>
    <router-view></router-view>
  </layout>
</template>

<script setup>
import layout from '@/layout/index.vue'

// let speech = new SpeechSynthesisUtterance()
// speech.text = '测试文字'
// speech.pitch = 1 // 设置话语的音调(0-2 默认1，值越大越尖锐,越低越低沉)
// speech.rate = 0.9 // 设置说话的速度(0.1-10 默认1，值越大语速越快,越小语速越慢)
// speech.volume = 10 // 设置说话的音量
// speech.lang = 'zh-CN' // 设置播放语言
// speechSynthesis.speak(speech)
// speechSynthesis.cancel()
</script>

<style scoped></style>
