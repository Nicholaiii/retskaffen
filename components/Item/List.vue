<script lang="ts" setup>
const FornuftigeIndkøb: Array<[name: string, price: number, count?: number]> = [
  ['A.M.O.C Yunnan Gesha', 217.08, 3],
  ['Rum Baba Coco Brazil', 95.56],
  ['Datura HLE Noria Washed', 518.00],
  ['Coffee Collective Takesi', 300],
  ['Buddhas Kafferösteri Julebox', 587.34]
]

const tilfældigtElement = <T>(a: T[]): T => a[Math.floor(Math.random() * a.length)]

const betalingsMidler = [
  'Kontant',
  'Betalingskort',
  'Kreditkort',
  'Gavekort',
  'Kryptovaluta',
  'Matadorsedler',
  'Salte tårer'
] as const

const total = FornuftigeIndkøb.reduce((acc, e) => e[1]*(e[2] ?? 1) + acc, 0)
const moms = computed(() => total*0.2)
const momsBasis = computed(() => total*0.8)
</script>

<template>
  <div class="text-base/4">

    <ItemSpacer />
    <div class="flex justify-between text-md/0">
      <div>Vare</div>
      <div class="text-right">Beløb</div>
    </div>
    <ItemSpacer />

    <ItemLine v-for="[name, price, count], key in FornuftigeIndkøb" :key  :name :price :count />
    <ItemSpacer />
    <div class="flex justify-between text-md/0">
      <div class="font-bold">TOTAL</div>
      <div class="text-right font-bold">{{ useDanskPris(total) }} kr</div>
    </div>
    <div class="flex justify-between text-md/0 mb-4">
      <div>{{tilfældigtElement(betalingsMidler)}}</div>
      <div class="text-right">{{ useDanskPris(total) }} kr</div>
    </div>
    <div class="flex justify-between text-md/0">
      <div>Moms 25% ({{ useDanskPris(momsBasis) }}) </div>
      <div class="text-right">{{ useDanskPris(moms) }} kr</div>
    </div>
    <ItemSpacer />
    <div class="text-center w-40 mx-auto mt-2 mb-6">Tak fordi du benyttede selvscanning på Retskaffen</div>
  </div>
</template>
