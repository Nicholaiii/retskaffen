<script lang="ts" setup>
const { data } = await useFetch('/api/kvitteringer')
</script>

<template>
  <div class="text-base/4">
    Kvittering: {{ String(data).padStart(5, '0') }}
  </div>
</template>
