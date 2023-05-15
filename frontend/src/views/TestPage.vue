<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'
import Card from '@/classes/Card'
import PlayerCard from '@/classes/PlayerCard'
import GridArea from '@/components/GridArea.vue'
import { enemies, items, players } from '@/assets/cards'
import Weapon from '@/classes/Weapon'
import weapons from '@/assets/weapons'

const cardChoices = [...enemies, ...enemies, ...enemies, ...items]
const playerCardOptions = players[0]

const playerCard = new PlayerCard({
  ...playerCardOptions,
  weapon: new Weapon(weapons[0])
})

const rows = ref(3)
const columns = ref(4)
const numCards = computed(() => rows.value * columns.value)

const cards = ref<Card[]>()

const updateGrid = (grid: (Card | undefined)[]) => {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i] === undefined) {
      grid[i] = new Card()
    }
  }
  cards.value = grid as Card[]
}

onMounted(() => {
  cards.value = []
  for (let i = 0; i < numCards.value; i++) {
    if (i === 4) {
      cards.value.push(playerCard)
    } else {
      cards.value.push(
        new Card(cardChoices[Math.floor(Math.random() * cardChoices.length)])
      )
    }
  }
})
</script>

<template>
  <GridArea
    v-if="cards"
    :rows="rows"
    :columns="columns"
    :cards="cards"
    @update-grid="updateGrid"
  />
</template>

<style scoped lang="scss">
</style>
