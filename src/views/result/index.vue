<template>
  <el-descriptions :column="1" border ref="cell">
    <i18n-box class="cell-left" t="name" size="small" />

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

  <my-button class="button" t="button.confirm" @click="toImg" size="small" />

  <el-dialog v-model="imgShow" fullscreen>
    <div class="imgShow" v-viewer>
      <img class="img" :src="imgUrl" />
    </div>
  </el-dialog>
</template>

<script setup>
import script from '@/script'
import { useStore } from '@/store'
import { ref, computed } from '@vue/reactivity'
import dom2image from '@/utils/dom2image'

const store = useStore()
const devResult = {
  1: 'button.yes',
  2: ['list.lang.en-US', 'list.lang.vi-VN', 'list.lang.id-ID'],
  4: 'button.yes',
  5: ['list.help.1', 'list.help.3', 'list.help.5', 'list.help.8', 'list.help.7'],
  6: 'button.yes',
  7: ['list.need.3', 'list.need.5'],
}
const result = computed(() => {
  if (import.meta.env.DEV) return { ...store.result, ...devResult }
  return store.result
})

const cell = ref()
const imgUrl = ref()
const imgShow = ref()
async function toImg() {
  const url = await dom2image(cell.value.$el)
  imgUrl.value = url
  imgShow.value = true
}
</script>

<style lang="scss" scoped>
.cell {
  &-left {
    font-weight: 400;
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
      box-sizing: border-box;
      border: 1px #091e421f solid;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}

.button {
  margin: 20px auto;
  width: min(50vw, 500px);
}

.imgShow {
  display: flex;

  .img {
    width: 90vw;
    height: 80vh;
    object-fit: contain;
  }
}
</style>
