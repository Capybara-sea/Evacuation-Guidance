<template>
  <div>
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
              <i18n-box
                class="grid"
                v-for="text in result[item.id]"
                :t="text"
                size="small"
              />
            </template>
          </div>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>

  <div class="button-box">
    <my-button plain @click="getImage" t="result.generateImage">
    </my-button>
  </div>
  <el-dialog v-model="showImage" fullscreen>
    <div class="image-box">
      <el-alert
        :title="$t('result.saveImage')"
        type="success"
        :closable="false"
        center
        show-icon
      />
      <img :src="imgUrl" />
    </div>
  </el-dialog>
</template>

<script setup>
import script from '@/script'
import { useStore } from '@/store'
import { ref, computed } from '@vue/reactivity'
import { useI18n } from 'vue-i18n'
import dom2image from '@/utils/dom2image'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'

const store = useStore()
const devResult = {
  1: 'button.yes',
  2: ['list.lang.en-US', 'list.lang.vi-VN', 'list.lang.id-ID'],
  4: 'button.yes',
  5: [
    'list.help.1',
    'list.help.3',
    'list.help.5',
    'list.help.8',
    'list.help.7',
  ],
  6: 'button.yes',
  7: ['list.need.3', 'list.need.5'],
}
const result = computed(() => {
  if (import.meta.env.DEV) return { ...store.result, ...devResult }
  return store.result
})

const cell = ref()
const imgUrl = ref()
const showImage = ref()
const { t } = useI18n()

async function getImage() {
  try {
    const url = await dom2image(cell.value.$el, 0)
    imgUrl.value = url
    showImage.value = true
  } catch (error) {
    ElMessage.error(t('result.generateFailed'))
  }
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
.button-box {
  width: 100%;
  padding: 8px;
}
.image-box {
  div {
    text-align: center;
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: contain;
    padding: 10px;
  }
}
</style>
