<template>
  <el-descriptions :column="1" border>
    <template #title>
      <i18n-box class="cell-left" t="name" size="small" />
    </template>
    <template v-for="item in script">
      <el-descriptions-item v-if="result[item.id]">
        <!-- title -->
        <template #label>
          <i18n-box class="cell-left" :t="item.content" size="small" />
        </template>

        <!-- result -->
        <div class="cell-right">
          <template v-if="item.type == 'check'">
            <i18n-box :t="result[item.id]" size="small" />
          </template>
          <template v-else-if="item.type == 'grid'">
            <i18n-box class="grid" v-for="text in result[item.id]" :t="text" size="small" />
          </template>
        </div>

        <!--  -->
      </el-descriptions-item>
    </template>
  </el-descriptions>
</template>

<script setup>
import script from '@/script'
import { useStore } from '@/store'
import { computed } from '@vue/reactivity'

const store = useStore()
const defaultResult = {
  1: 'button.yes',
  2: ['list.lang.en-US', 'list.lang.vi-VN', 'list.lang.id-ID'],
  4: 'button.yes',
  5: ['list.help.1', 'list.help.3', 'list.help.5', 'list.help.8', 'list.help.7'],
  6: 'button.yes',
  7: ['list.need.3', 'list.need.5'],
}
const result = computed(() => {
  if (import.meta.env.DEV) return { ...store.result, ...defaultResult }
  return store.result
})
</script>

<style lang="scss" scoped>
.cell {
  &-left {
    min-width: 30vw;
  }

  &-right {
    display: flex;
    flex-wrap: wrap;
    .grid {
      margin: 4px 8px 4px 0;
      padding: 4px 6px;
      border-radius: 4px;
      background: #fff;
      // width: 100%;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
