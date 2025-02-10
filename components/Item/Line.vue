<script lang="ts" setup>
const { name, price, count = 1 } = defineProps<{
  name: string
  price: number
  count?: number
}>()
</script>

<template>
  <div class="flex justify-between text-md/0">
    <div>{{name}}</div>
    <div class="text-right">{{useDanskPris(price*count)}} kr</div>
  </div>
  <div v-if="count > 1" class="ml-2">{{ count}} x {{ useDanskPris(price)}}</div>
</template>

<style scoped>

</style>
