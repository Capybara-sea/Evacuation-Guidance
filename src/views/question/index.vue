<template>
  <div v-if="cq" class="container">
    <div class="content">
      <i18n-box class="content-i18n" :t="cq.content" size="large" />
    </div>

    <div class="image-box">
      <div class="image" v-for="(item, index) in cq.images" :key="item.url">
        <van-image v-showPrview="{ images: cq.images.map(({ url }) => url), index }" :src="item.url" fit="scale-down" />
        <div class="description">{{ item.description }}</div>
      </div>
    </div>

    <el-divider border-style="dotted" style="margin: 2px 0" />

    <my-checkbox-group v-if="cq.type == 'grid'" class="checkbox-group" v-model="checked">
      <my-checkbox v-for="item in cq.list" class="checkbox-group-item" :label="item.text" v-slot="{ checked }">
        <my-button class="button" plain :color="checked ? '#67c23a' : '#606266'">
          <van-image class="image" v-if="item.image" :src="item.image" fit="scale-down" radius="8px" />
          <i18n-box class="i18n-box" :t="item.text" />
          <svg-icon class="select-icon" :name="checked ? 'select-fill' : 'select'" size="140%" />
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
$list-image-size: 80px;

.container {
  width: 100%;
  min-height: 100%;

  .content {
    font-size: 40px;
    padding: $container-padding;
  }

  .image-box {
    .image {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      .van-image {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
      }
      .description {
      }
    }
  }

  .checkbox-group {
    padding: $container-padding;
    @include auto-grid(50vw);
    gap: 10px;

    &-item {
      height: fit-content;

      .button {
        width: 100%;
        display: grid;
        grid-template-columns: auto 1fr 30px;
        grid-template-areas: 'image i18n icon';
        gap: 10px;
        align-items: center;
        justify-items: center;

        .image {
          grid-area: image;
          min-width: $list-image-size;
          width: $list-image-size;
        }

        .i18n-box {
          grid-area: i18n;
          height: fit-content;
        }

        .select-icon {
          grid-area: icon;
        }
      }
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
