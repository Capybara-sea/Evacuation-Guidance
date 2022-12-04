<template>
  <el-descriptions title="result" :column="1" border>
    <template v-for="item in script">
      <el-descriptions-item v-if="result[item.id]">
        <!--  -->
        <template #label>
          <i18n-box :t="item.content" />
        </template>

        <template v-if="item.type == 'check'">
          <i18n-box :t="result[item.id]" />
        </template>
        <template v-else-if="item.type == 'grid'">
          <i18n-box v-for="text in result[item.id]" :t="text" />
        </template>

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
  2: ['list.lang.zh', 'list.lang.en'],
}
const result = computed(() => {
  return { ...defaultResult, ...store.result }
})
</script>

<style lang="scss" scoped></style>
