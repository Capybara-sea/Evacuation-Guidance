<template>
  <div v-if="cq" class="container">
    <div class="content">
      <i18n-box class="content-i18n" :t="cq.content" size="large" />
    </div>

    <!-- <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in cq.images" v-showPrview="{ images: cq.images, index }">
      <van-image :key="item" :src="item" fit="scale-down" height="200px" />
    </van-swipe-item>
  </van-swipe> -->

    <van-image
      v-for="(item, index) in cq.images"
      v-showPrview="{ images: cq.images, index }"
      :key="item"
      :src="item"
      fit="scale-down"
      height="200px"
    />

    <el-divider border-style="dotted" style="margin: 2px 0" />

    <el-checkbox-group v-if="cq.type == 'grid'" v-model="checked" size="small">
      <el-checkbox v-for="item in cq.list" :label="item.text" border>
        <i18n-box class="content-i18n" :t="item.text" />
      </el-checkbox>
    </el-checkbox-group>

    <el-row justify="center">
      <el-col class="button-box" :xs="24" :sm="8" :md="6" v-for="item in cq.button">
        <my-button class="button" :t="item.text" plain @click="question.next(item)" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Question from './question'

// currQuestion
const cq = ref()
const checked = ref()

// route
const route = useRoute()
const router = useRouter()

// question Class
const question = new Question({ cq, checked, route, router })

// Watching the Url id change
watch(
  () => route.params,
  ({ id }, { id: oldId } = {}) => id != oldId && question.setCq(id),
  { immediate: true },
)
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100%;
  .content {
    font-size: 40px;
    padding: 16px;
  }
  .button-box {
    display: flex;
    justify-content: center;
    padding: 10px;

    .button {
      width: 90%;
      height: fit-content;
    }
  }
}
.button-i18n {
  font-size: 30px;
}
:deep(.el-image__inner) {
  -webkit-user-drag: none;
}
// .swipe {
//   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
// }
</style>
