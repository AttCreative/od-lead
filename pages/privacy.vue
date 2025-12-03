<template>
  <div class="privacy-policy">{{ privacyPoliciesText }}</div>
</template>

<script setup lang="ts">
usePageTitle("PRIVACY");

const privacyPoliciesText = await $fetch("/privacyPolicies.txt");
</script>

<style scoped lang="scss">
.privacy-policy {
  width: 70%;
  margin: 64px auto;
  font-size: 16px;
  line-height: 1.8;
  font-weight: 400;
  white-space: pre-wrap;
}
</style>
