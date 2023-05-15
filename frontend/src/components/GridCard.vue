<script setup lang="ts">
import Card from '../classes/Card'

defineProps<{
  card: Card
}>()
</script>

<template>
  <div class="card-wrapper">
    <img :src="card.img">
  </div>
</template>

<style scoped lang="scss">
.card-wrapper {
  border: 7px solid $text-primary;
}
</style>
