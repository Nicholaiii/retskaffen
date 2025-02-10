<script lang="ts" setup>
const formatted = useDateFormat(Date.now(), 'YYYY-MM-DD HH:mm:ss')
</script>

<template>
  <div class="text-base/6">
    Dato: {{ formatted }}
  </div>
</template>

<style scoped>

</style>
