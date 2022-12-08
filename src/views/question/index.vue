<template>
  <div v-if="cq" class="container">
    <div class="content">
      <i18n-box class="content-i18n" :t="cq.content" size="large" />
    </div>

    <div class="image-box">
      <van-image
        v-for="(item, index) in cq.images"
        v-showPrview="{ images: cq.images, index }"
        :key="item"
        :src="item"
        fit="scale-down"
        height="200px"
      />
    </div>

    <el-divider border-style="dotted" style="margin: 2px 0" />

    <!-- <el-checkbox-group v-if="cq.type == 'grid'" v-model="checked" size="small">
      <el-checkbox v-for="item in cq.list" :label="item.text" border>
        <i18n-box class="content-i18n" :t="item.text" />
      </el-checkbox>
    </el-checkbox-group> -->

    <my-checkbox-group v-if="cq.type == 'grid'" class="checkbox-group" v-model="checked">
      <my-checkbox v-for="item in cq.list" class="checkbox-group-item" :label="item.text" v-slot="{ checked }">
        <my-button class="button" plain :color="checked ? '#67c23a' : '#606266'">
          <van-image v-if="item.image" :src="item.image" fit="scale-down" height="100px" />
          <i18n-box class="content-i18n" :t="item.text" />
          <iconfont :name="checked ? 'select-fill' : 'select'" />
        </my-button>
      </my-checkbox>
    </my-checkbox-group>

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
import myCheckboxGroup from '@/components/myCheckboxGroup/index.vue'
import myCheckbox from '@/components/myCheckbox/index.vue'
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
$container-padding: 16px;
.container {
  width: 100%;
  min-height: 100%;
  .content {
    font-size: 40px;
    padding: $container-padding;
  }

  .image-box {
    box-sizing: border-box;
  }

  .checkbox-group {
    padding: $container-padding;
    @include auto-grid(50vw);
    gap: 10px;

    &-item {
      height: fit-content;
    }
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
</style>
