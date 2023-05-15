<script setup lang="ts">
import PlayerCard from '@/classes/PlayerCard'
import Card from '@/classes/Card'

defineProps<{
  card: Card | PlayerCard
  playerAdjacent?: boolean
}>()
</script>

<template>
  <div
    class="card-wrapper"
    :class="{ 'card-wrapper--player-adjacent': playerAdjacent }"
  >
    <div class="card-header">
      <div></div>
      <div
        class="card-header--health"
        v-show="card.maxHealth"
      >
        <span class="card-header--health--heart">&#9829;</span> {{ card.health }}/{{ card.maxHealth }}
      </div>
    </div>
    <div>
      <img
        class="card-image"
        :src="card.img"
      >
    </div>
    <div class="card-footer">
      <div>
        <div
          v-if="(card as PlayerCard)?.weapon"
        >
          <img
            class="card-image--weapon"
            :src="(card as PlayerCard)?.weapon?.img"
          >
          {{ (card as PlayerCard)?.weapon?.hitPoints }}
        </div>
      </div>
      <div>
        {{ card.name }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-wrapper {
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  border: 7px solid $text-primary;
  cursor: pointer;
}
.card-wrapper--player-adjacent {
  border-color: gainsboro;
}
.card-wrapper--player-adjacent:hover {
  border-color: gold;
}
.card-header {
  display: flex;
  justify-content: space-between;
}
.card-header--health--heart {
  color: red;
}
.card-image {
  width: 100%;
}
.card-footer {
  padding-left: .2rem;
  padding-right: .2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;
}
</style>
