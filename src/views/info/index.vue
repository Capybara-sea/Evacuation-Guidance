<template>
  <el-link href="https://github.com/Capybara-sea/Evacuation-Guidance" type="primary" style="margin: 10px;">
    <svg-icon name="link" />参考サイト
  </el-link>

  <div class="demo-collapse">
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in info" :title="item.title" :name="index">
        <i18n-box v-for="content in item.content" :t="content" :topShow="false" />
      </el-collapse-item>
    </el-collapse>
  </div>

  <br />
  <el-divider border-style="dotted" />
  <br />

  <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane v-for="item in images" :label="item.title" :name="item.title">
      <i18n-box v-for="content in item.content" :t="content" :topShow="false" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref } from '@vue/reactivity'

const info = [
  {
    title: '参考サイト：一般財団法人自治体国際化協会（クレア）',
    content: [
      '日本に在住している外国人は日本語が不自由であったり、日本の生活環境に不案内であったり、災害のことを知らなかったりすることが多いため、災害弱者と位置づけられています。クレアでは、地域国際化協会、自治体などによる円滑な情報提供を支援することを目的として、平時から災害時対応を考え、多言語支援体制の構築に活かす「災害時の多言語支援のための手引き」や、多言語による文字情報の提供が可能な「多言語表示シート作成ツール」の提供など、災害時外国人支援のための情報を発信しています。',
    ],
  },
  {
    title: '震度階級対応関係図',
    content: [
      '震度の階級表には国際的に統一された標準的な規格はなく、それぞれの国や地域が採用したいくつかの指標があります。日本人が慣れ親しんでいる震度も、外国人にはなかなか伝わらないです。震度は各地の地震動の強さを表す指標であり、日本では0 ~ 7までの10段階の気象庁震度階級が使用されていますが、他国では異なる震度階級が使われています。海外では12階級の震度階級が一般的です。12階級が当たり前の外国人にとっては、震度7や震度6強は決して大きい震度とはいえないのです。そこで、筆者は地震加速度と揺れによる影響の二つの要素を取り入れ、世界各国で使われる震度階級と日本の気象庁震度階級との対応関係図を作成し、外国人が地震の危険性をより把握しやすいようにします。',
    ],
  },
]

const images = [
  {
    title: '震度階級図',
    content: ['震度階級図'],
  },
  {
    title: '対応関係図',
    content: ['対応関係図'],
  },
]

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
