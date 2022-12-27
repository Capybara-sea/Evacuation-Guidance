<template>
  <div class="link">
    <el-link
      href="https://www.clair.or.jp/j/multiculture/tagengo/saigai.html"
      type="primary"
    >
      <svg-icon name="link" />{{ $t('info.link') }}
    </el-link>
  </div>

  <div class="demo-collapse">
    <el-collapse accordion>
      <el-collapse-item
        v-for="(item, index) in intro"
        :title="$t(item.title)"
        :name="index"
      >
        {{ $t(item.content) }}
      </el-collapse-item>
    </el-collapse>
  </div>

  <br />
  <el-divider border-style="dotted" />
  <br />

  <el-tabs class="tabs" v-model="activeName" type="card">
    <el-tab-pane
      v-for="item in images"
      :label="$t(item.title)"
      :name="$t(item.title)"
    >
      <img class="image" :src="item.url" v-viewer />
    </el-tab-pane>
  </el-tabs>

  <br />
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { useI18n } from 'vue-i18n'

const intro = [
  {
    title: 'info.intro.1.title',
    content: 'info.intro.1.content',
  },
  {
    title: 'info.intro.2.title',
    content: 'info.intro.2.content',
  },
]

const images = [
  {
    title: 'info.pics.1',
    url: 'images/earthquake/left.jpg',
  },
  {
    title: 'info.pics.2',
    url: 'images/earthquake/right.jpg',
  },
]

const { t } = useI18n()
const activeName = ref(t(images[0].title))
</script>

<style lang="scss" scoped>
.link {
  width: 100%;
  text-align: center;
  padding: 16px;
}
.tabs {
  .image {
    width: 100%;
    object-fit: contain;
    padding: 10px;
  }
}
</style>
