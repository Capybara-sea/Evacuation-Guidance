<template>
  <header>
    <iconfont name="xiangzuo" @click="$router.back()" />
    <iconfont name="zhuye" @click="$router.push('/')" />
    <iconfont class="right" name="yuyan" @click="showLangPicker = true" />
  </header>

  <main><slot /></main>

  <el-dialog v-model="showLangPicker" fullscreen>
    <lang-picker />
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import LangPicker from '@/components/langPicker/index.vue'

const showLangPicker = ref(false)
</script>

<style lang="scss" scoped>
$header-height: 50px;
$icon-size: 30px;

@media screen and (min-width: 1200px) {
  header,
  main {
    padding: 0 calc((100vw - 1200px) / 2);
  }
}
header {
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 5;
  font-size: $icon-size;

  background: #f5f7fa;
  width: 100vw;
  height: $header-height;

  > * {
    margin: calc(($header-height - $icon-size) / 2);
    &.right {
      margin-left: auto;
    }
  }
}

main {
  width: 100vw;
  height: 100vh;
  padding-top: $header-height;
  background: #fafafa;
}
</style>
