<script lang="ts" setup>
import { computed } from 'vue'
import Card from '@/classes/Card'
import GridCard from './GridCard.vue'
import { areAdjacentCards } from '@/utils/gridTools'
import type PlayerCard from '@/classes/PlayerCard'

const props = defineProps<{
  columns: number
  rows: number
  cards: (Card | PlayerCard)[]
}>()

const playerCardIndex = computed(() => props.cards.findIndex(c => c.type === 'Player'))

const playerCard = computed(() => props.cards[playerCardIndex.value] as PlayerCard)

const playerAdjacent = (index: number) => areAdjacentCards(index, playerCardIndex.value, props.rows, props.columns)

const clickAction = (index: number) => {
  const card = props.cards[index]
  if (!playerAdjacent(index)) {
    return
  }
  const returnDamage = card.damage(playerCard.value.weapon?.hitPoints || playerCard.value.health || 0)
  if (playerCard.value.weapon) {
    playerCard.value.weapon.damage(returnDamage)
    if (playerCard.value.weapon.hitPoints === 0) {
      playerCard.value.weapon = undefined
    }
  } else {
    playerCard.value.damage(returnDamage)
  }
}
</script>

<template>
  <div class="grid-area">
    <GridCard
      v-for="card, index in cards"
      :key="card.id"
      :card="card"
      :player-adjacent="playerAdjacent(index)"
      @click="() => clickAction(index)"
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
