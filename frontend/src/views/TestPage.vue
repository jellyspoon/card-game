<script lang="ts" setup>
import { ref } from 'vue'
import Card from '../classes/Card'
import GridArea from '../components/GridArea.vue'

const rows = ref(3)
const columns = ref(3)

const cards = ref(
  new Array(rows.value * columns.value).fill(new Card())
)

</script>

<template>
  <GridArea
    :rows="rows"
    :columns="columns"
    :cards="cards"
  />
</template>

<style scoped lang="scss">
</style>
