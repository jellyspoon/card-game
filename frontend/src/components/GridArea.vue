<script lang="ts" setup>
import Card from '../classes/Card'
import GridCard from './GridCard.vue'

defineProps<{
  columns: number
  rows: number
  cards: Card[]
}>()
</script>

<template>
  <div class="grid-area">
    <GridCard
      v-for="card in cards"
      :key="card.id"
      :card="card"
    />
  </div>
</template>

<style scoped lang="scss">
.grid-area {
  width: 66vh;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(v-bind(columns), 1fr);
  grid-template-rows: repeat(v-bind(rows), 1fr);
  gap: 1rem;
}
</style>
