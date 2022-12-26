<template>
  <div class="button-box">
    <my-button t="home.question" plain @click="$router.push('/question')" />
    <my-button t="home.info" plain @click="$router.push('/info')" />
  </div>
  <div class="about">
    <svg-icon name="about-us" size="36px" @click="$router.push('/about')" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.button-box {
  display: grid;
  @include auto-grid(200px);
  padding: 10px;
  gap: 10px;
  margin-top: 40vh;
  transform: translateY(-50%);
}
.about {
  width: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 20vh;
}
</style>
