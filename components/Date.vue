<script lang="ts" setup>
const formatted = useDateFormat(Date.now(), 'YYYY-MM-DD HH:mm:ss')
</script>

<template>
  <div>
    {{ formatted }}
  </div>
</template>

<style scoped>

</style>
