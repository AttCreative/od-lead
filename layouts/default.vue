<template>
  <SiteHeader />

  <main>
    <slot />
  </main>

  <SiteFooter :is-contact="true" />
</template>
