<template>
  <component :is="isMobile ? SiteSpHeader : SiteHeader" />

  <main>
    <slot />
  </main>

  <component :is="isMobile ? SiteSpFooter : SiteFooter" />
</template>

<script setup lang="ts">
import SiteHeader from "@/components/site/SiteHeader.vue";
import SiteSpHeader from "@/components/site/SiteSpHeader.vue";
import SiteFooter from "@/components/site/SiteFooter.vue";
import SiteSpFooter from "@/components/site/SiteSpFooter.vue";

const isMobile = useIsMobile();
</script>
