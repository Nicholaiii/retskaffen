<script lang="ts" setup>
const { nummer } = defineProps<{
  nummer: number
  }>()
</script>

<template>
  <div class="text-base/4">
    Kvittering: {{ String(nummer).padStart(5, '0') }}
  </div>
</template>
