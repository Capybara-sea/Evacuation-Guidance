<template>
  <div class="container">
    <div
      :class="['button', item.code == i18n.locale ? 'select' : '']"
      v-for="item in i18nContent"
      :key="item.code"
      @click="i18n.locale = item.code"
      v-html="`<span>${item.name}</span>`"
    />
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
.container {
  width: 100%;
  height: 100%;
  padding: 20px;

  @include auto-grid(30%);
  @media screen and (min-width: 900px) {
    @include auto-grid(10%);
  }
  gap: 10px;

  .button {
    width: 100%;
    // @media screen and (max-width: 959px) {
    //   width: 27%;
    // }
    height: 40px;

    border-radius: 8px;
    background: #ecf5ff;
    border: 1px solid #a0cfff;

    //布局
    display: flex;
    align-items: center;
    justify-content: center;

    // 文字
    font-weight: 900;
    color: #337ecc;
    cursor: pointer; // 手型鼠标

    // 其他
    user-select: none;
    transition: all 0.1s;

    &:hover {
      color: #fff;
      background: #a0cfff;
    }

    &.select {
      color: #529b2e;
      background: #f0f9eb;
      border: 1px solid #95d475;

      &:hover {
        color: #fff;
        background: #95d475;
      }
    }
  }
}
</style>
