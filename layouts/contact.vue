<template>
  <component :is="useSpLayout ? SiteSpHeader : SiteHeader" />

  <main>
    <slot />
  </main>

  <component :is="useSpLayout ? SiteSpFooter : SiteFooter" />
</template>

<script setup lang="ts">
import SiteHeader from "@/components/site/SiteHeader.vue";
import SiteSpHeader from "@/components/site/SiteSpHeader.vue";
import SiteFooter from "@/components/site/SiteFooter.vue";
import SiteSpFooter from "@/components/site/SiteSpFooter.vue";

const route = useRoute();
const isSpRoute = computed(() => route.path.startsWith("/sp/"));

const isMobile = useIsMobile();
const useSpLayout = computed(() => isSpRoute.value || isMobile.value);
</script>
