<template>
  <div class="button-box">
    <!-- <el-button class="button" size="large" @click="$router.push('/question')">
      <i18n-box class="button-i18n" t="home.question" />
    </el-button>
    <el-button class="button" size="large">
      <i18n-box class="button-i18n" t="home.info" />
    </el-button> -->
    <my-button t="home.question" plain @click="$router.push('/question')" />
    <my-button t="home.info" plain @click="click(1)" />
  </div>

  <br />
  <br />

  <!-- <div style="padding: 5vw; display: flex; flex-direction: column; gap: 10px"> -->
  <!-- <div class="test">
    <my-button @click="click(1)" t="home.question"></my-button>
    <my-button @click="click(2)" t="content.1" plain></my-button>
    <my-button @click="click(3)" t="content.2" plain disabled></my-button>
    <my-button @click="click(4)" t="home.question" dark></my-button>
    <my-button @click="click(5)" t="content.1" dark plain></my-button>
    <my-button @click="click(6)" t="content.2" dark plain disabled></my-button>
  </div> -->
  <!-- <div v-for="item in style" :style="`width:100vw;height:30px;background:${item}`"></div> -->
</template>

<script setup>
</script>

<style lang="scss" scoped>
.button-box {
  display: grid;
  @include auto-grid(200px);
  padding: 10px;
  gap: 10px;
  margin-top: 40vh;
  transform: translateY(-50%);
}
.test {
  @include auto-grid(200px);
  padding: 10px;
  gap: 10px;
}
</style>
