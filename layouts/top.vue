<template>
  <SiteHeader />

  <main>
    <slot />
  </main>

  <SiteFooter :is-contact="true" :is-privacy-policy="true" />
</template>
