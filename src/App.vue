<template>
  <layout>
    <router-view></router-view>
  </layout>

  <!-- 
  You must have to import it in advance! 
  Because if you don't do this it will 
  cause the import of the CSS required 
  for the component to fail! 
  -->
  <van-image-preview />
</template>

<script setup>
import layout from '@/layout/index.vue'

// import Question from './views/question/index.vue'

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
