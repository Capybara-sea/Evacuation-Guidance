<template>
  <div v-if="cq" class="container">
    <!-- content -->
    <div class="content">
      <i18n-box class="content-i18n" :t="cq.content" size="large" />
    </div>

    <!-- images -->
    <div v-if="cq.images" class="image-box" v-viewer>
      <div class="image-item" v-for="item in cq.images" :key="item.url">
        <img :src="item.url" :alt="item.description && $t(item.description)" />
        <i18n-box v-if="item.description" class="description" :t="item.description" size="small" />
      </div>
    </div>

    <el-divider border-style="dotted" style="margin: 2px 0" />

    <!-- grid [type==grid] -->
    <my-checkbox-group v-if="cq.type == 'grid'" class="checkbox-group" v-model="checked">
      <my-checkbox
        v-for="item in cq.list"
        class="checkbox-group-item"
        :label="item.text"
        v-slot="{ checked }"
      >
        <my-button class="button" plain :color="checked ? '#67c23a' : (store.darkMode ? '#606266' : '#606266')">
          <img class="image" v-if="item.image" :src="item.image" fit="scale-down" />
          <i18n-box class="i18n-box" :t="item.text" />
          <svg-icon class="select-icon" :name="checked ? 'select-fill' : 'select'" size="140%" />
        </my-button>
      </my-checkbox>
    </my-checkbox-group>

    <!-- button -->
    <el-affix position="bottom" :offset="0" :key="affixKey">
      <div class="button-box">
        <my-button
          v-for="item in cq.button"
          class="button"
          :t="item.text"
          plain
          @click="question.next(item)"
        />
      </div>
    </el-affix>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import { useStore } from '@/store'
import myCheckboxGroup from '@/components/myCheckboxGroup/index.vue'
import myCheckbox from '@/components/myCheckbox/index.vue'
import Question from './question'

// store
const store = useStore()

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

// Change key when cq.id/windowWidth changes Force refresh
const { width: windowWidth } = useWindowSize()
const affixKey = computed(() => '' + cq.value.id + windowWidth.value)
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
    @include auto-grid(200px);
    gap: 20px;
    width: 100%;
    padding: $container-padding;

    .image-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        object-fit: contain;
        width: 100%;
        height: min(40vw, 200px);
      }
      .description {
        margin: 6px;
        opacity: 0.6;
        height: fit-content;
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

        .image {
          grid-area: image;
          min-width: $list-image-size;
          width: $list-image-size;
          border-radius: 8px;
        }

        .i18n-box {
          grid-area: i18n;
          height: fit-content;
        }

        .select-icon {
          grid-area: icon;
          align-self: center;
          justify-self: center;
        }
      }
    }
  }

  .button-box {
    @include auto-grid(min(47vw, 500px));
    justify-items: center;
    padding: $container-padding;
    padding-top: calc($container-padding * 2);
    gap: 10px;
    background: linear-gradient(to top, $bg-1 90%, transparent 100%);
    transition: background $theme-transition;

    .button {
      width: min(100%, 600px);
      height: fit-content;
    }
  }
}
</style>
