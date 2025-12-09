<template>
  <div class="footer-company">
    <div>
      <div>〒231-0052</div>
      <div>神奈川県横浜市中区英町5番地7</div>
      <NuxtLink
        to="/privacy"
        class="privacy-policy-link"
        aria-label="個人情報保護方針"
      >
        個人情報保護方針
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer-company {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 12px;
  font-size: 12px;
}

.privacy-policy-link {
  display: block;
  margin-bottom: 64px;
  color: #000000;
  text-decoration: underline;
  font-size: 12px;
}
</style>
