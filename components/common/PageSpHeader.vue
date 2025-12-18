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
  padding-left: 20px;
  margin: 32px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.2;
}
.page-title {
  font-family: "Oswald", sans-serif;
  color: #023482;
  font-size: 32px;
  font-weight: 600;
}

.page-subtitle {
  font-family: "Oswald", sans-serif;
  color: #023482;
  font-size: 14px;
  font-weight: 500;
}
</style>
