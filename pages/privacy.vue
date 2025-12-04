<template>
  <PageHeader title="PRIVACY POLICY" subtitle="個人情報保護方針" />
  <div class="privacy-policy-main-text" v-html="html" />
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";
import PageHeader from "@/components/common/PageHeader.vue";
import privacyMd from "@/assets/privacy.md?raw";

usePageTitle("PRIVACY");

const md = new MarkdownIt({
  html: true,
  breaks: true,
});

const html = md.render(privacyMd);
</script>

<style scoped lang="scss">
.privacy-policy-main-text {
  width: 90%;
  margin: 64px auto;
  font-size: 20px;
  font-weight: 400;
}

.privacy-policy-main-text :deep(h3) {
  margin-bottom: 0;
  font-size: 24px;
}

.privacy-policy-main-text :deep(h3 + p) {
  margin: 0;
}

.privacy-policy-main-text :deep(.privacy-policy-description) {
  text-align: center;
  margin-bottom: 80px;
}
</style>
