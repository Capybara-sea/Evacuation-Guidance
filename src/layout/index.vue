<template>
  <header>
    <svg-icon name="left-arrow" :class="{ disabled }" @click="$router.back()" />
    <svg-icon name="home" @click="$router.push('/')" />
    <svg-icon class="right" :name="isDark ? 'light' : 'dark'" @click="isDark = !isDark" />
    <svg-icon name="language" @click="showLangPicker = !showLangPicker" />
  </header>
  <main><slot /></main>

  <el-dialog v-model="showLangPicker" fullscreen>
    <lang-picker />
  </el-dialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import LangPicker from '@/components/langPicker/index.vue'
import { useStore } from '@/store'
import { useDark } from '@vueuse/core'

const showLangPicker = ref(false)

// store
const store = useStore()

const disabled = computed(() => store.currentRouteName == 'home')

const isDark = useDark({
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})
watch(isDark, (dark) => (store.darkMode = dark), { immediate: true })
</script>

<style lang="scss" scoped>
$header-height: 50px;
$icon-size: 36px;
$active-icon-bg: rgba(0, 0, 0, 0.15);

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

  background: $bg-2;
  transition: all 0.1s;
  width: 100vw;
  height: $header-height;

  // top button
  > * {
    margin: calc(($header-height - $icon-size) / 2);
    transition: background $theme-transition;
    border-radius: $border-radius-x;
    padding: 4px;

    &:active {
      background: $active-icon-bg;
      box-shadow: 0 0 1px 2px $active-icon-bg;
    }

    &.right {
      margin-left: auto;
    }

    // disabled
    &.disabled {
      pointer-events: none;
      filter: grayscale(1) opacity(0.7);
    }
  }
}

main {
  width: 100vw;
  min-height: 100vh;
  padding-top: $header-height;
  background: $bg-1;
  transition: background $theme-transition;
}
</style>
