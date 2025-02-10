<script lang="ts" setup>
const { data } = defineProps<{
  data: {
    total: number
    moms: number
    momsBasis: number
    betalingsMiddel: string
    emner: Array<[name: string, price: number, count?: number]>
    nummer: number
  }
}>()
</script>

<template>
  <div class="text-base/4">

    <ItemSpacer />
    <div class="flex justify-between text-md/0">
      <div>Vare</div>
      <div class="text-right">Beløb</div>
    </div>
    <ItemSpacer />

    <ItemLine v-for="[name, price, count], key in data.emner" :key  :name :price :count />
    <ItemSpacer />
    <div class="flex justify-between text-md/0">
      <div class="font-bold">TOTAL</div>
      <div class="text-right font-bold">{{ useDanskPris(data.total) }} kr</div>
    </div>
    <div class="flex justify-between text-md/0 mb-4">
      <div>{{ data.betalingsMiddel }}</div>
      <div class="text-right">{{ useDanskPris(data.total) }} kr</div>
    </div>
    <div class="flex justify-between text-md/0">
      <div>Moms 25% ({{ useDanskPris(data.momsBasis) }}) </div>
      <div class="text-right">{{ useDanskPris(data.moms) }} kr</div>
    </div>
    <ItemSpacer />
    <div class="text-center w-40 mx-auto mt-2 mb-6">Tak fordi du benyttede selvscanning på Retskaffen</div>
  </div>
</template>
