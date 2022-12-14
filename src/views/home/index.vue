<template>
  <div class="button-box">
    <my-button t="home.question" plain @click="$router.push('/question')" />
    <my-button t="home.info" plain @click="$router.push('/info')" />
  </div>
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
