<template>
  <div class="lang-picker-container">
    <my-button
      class="button"
      v-for="item in i18nContent"
      :color="item.code == i18n.locale ? '#529b2e' : ''"
      @click="i18n.locale = item.code"
      plain
    >
      <div v-html="item.name" />
    </my-button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { messages as i18nContent } from '@/i18n'
const i18n = reactive(useI18n())
</script>

<style lang="scss" scoped>
.info {
  width: 100%;
  // height: 40px;
  text-align: center;
  padding: 10px;
  .i18n {
    font-size: 24px;
  }
}
.lang-picker-container {
  width: 100%;
  height: 100%;
  padding: 20px;

  @include auto-grid(40%);
  @media screen and (min-width: 900px) {
    @include auto-grid(10%);
  }
  gap: 10px;
}
.button {
  display: flex;
  align-items: center;
}
</style>
