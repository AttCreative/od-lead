<template>
  <div class="page-header">
    <div class="page-title">{{ title }}</div>
    <div v-if="subtitle" class="page-subtitle">{{ subtitle }}</div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string;
  subtitle?: string;
};

defineProps<Props>();
</script>

<style scoped lang="scss">
.page-header {
  padding-left: 80px;
  display: flex;
  margin: 0 auto;
  align-items: baseline;
  gap: 8px;
}
.page-title {
  font-family: "Oswald", sans-serif;
  color: #023482;
  font-size: 90px;
}
.page-subtitle {
  font-family: "Oswald", sans-serif;
  color: #023482;
  font-size: 20px;
  font-weight: 600;
}
</style>
