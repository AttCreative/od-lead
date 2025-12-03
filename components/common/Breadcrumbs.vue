<template>
  <div class="breadcrumbs" role="navigation" aria-label="Breadcrumb">
    <div class="breadcrumbs-inner">
      <NuxtLink to="/" class="breadcrumbs-item breadcrumbs-link">⌂</NuxtLink>
      <template v-for="(c, i) in items" :key="i">
        <div class="breadcrumbs-separator" aria-hidden="true">></div>
        <NuxtLink
          v-if="c.to"
          :to="c.to"
          class="breadcrumbs-item breadcrumbs-link"
        >
          {{ c.label }}
        </NuxtLink>
        <div v-else class="breadcrumbs-item breadcrumbs-current">
          {{ c.label }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
type Crumb = { label: string; to?: string };
type Props = { items?: Crumb[] };

withDefaults(defineProps<Props>(), {
  items: () => [],
});
</script>

<style scoped lang="scss">
.breadcrumbs {
  font-size: 16px;
  padding-inline-end: 5%;
  margin: 32px auto;
  text-align: right;
}

.breadcrumbs-inner {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}

.breadcrumbs-item {
  display: inline-block;
  line-height: 1.4;
  white-space: nowrap;
}

.breadcrumbs-link {
  text-decoration: none;
  color: inherit;
  outline: none;
}
.breadcrumbs-link:hover {
  text-decoration: underline;
}

.breadcrumbs-current {
  font-weight: 600;
}

.breadcrumbs-separator {
  opacity: 0.9;
}
</style>
