<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-wrapper">
    <h1>Dungeon Cards</h1>
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
