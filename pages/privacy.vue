<template>
  <component
    :is="isMobile ? PageSpHeader : PageHeader"
    title="PRIVACY POLICY"
    subtitle="個人情報保護方針"
  />

  <div class="privacy-policy-main-text" v-html="html" />
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";
import PageHeader from "@/components/common/PageHeader.vue";
import PageSpHeader from "@/components/common/PageSpHeader.vue";
import privacyMd from "@/assets/privacy.md?raw";

usePageTitle("PRIVACY");

const isMobile = useIsMobile();

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

.privacy-policy-main-text :deep(p) {
  margin: 0;
}

.privacy-policy-main-text :deep(.privacy-policy-description) {
  text-align: center;
  margin-bottom: 80px;
}

.privacy-policy-main-text :deep(h3:last-of-type + p) {
  margin-bottom: 96px;
}

@media (max-width: 768px) {
  .privacy-policy-main-text {
    width: 90%;
    margin: 32px auto 48px;
    font-size: 14px;
  }

  .privacy-policy-main-text :deep(h3) {
    font-size: 18px;
  }

  .privacy-policy-main-text :deep(.privacy-policy-description) {
    margin-bottom: 40px;
  }

  .privacy-policy-main-text :deep(h3:last-of-type + p) {
    margin-bottom: 48px;
  }
}
</style>
