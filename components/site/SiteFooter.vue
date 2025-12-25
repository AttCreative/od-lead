<template>
  <NuxtLink
    v-if="isContact"
    to="/contact"
    class="footer-cta-link"
    aria-label="お問い合わせページへ"
  >
    <div class="info-footer">
      <div class="info-footer-en">CONTACT US</div>
      <div class="info-footer-jp">お問い合わせ</div>
      <img
        src="/images/common/arrow-right-white.svg"
        class="arrow-right-icon"
        aria-hidden="true"
      />
    </div>
  </NuxtLink>

  <div class="footer-company">
    <img src="/images/common/company-logo.svg" />
    <div>
      <div>〒231-0052</div>
      <div>横浜市中区英町1番地隆峰ビル301号</div>
    </div>
  </div>

  <NuxtLink
    to="/privacy"
    class="privacy-policy-link"
    aria-label="個人情報保護方針"
  >
    個人情報保護方針
  </NuxtLink>
</template>

<script setup lang="ts">
type Props = {
  isContact?: boolean;
};

defineProps<Props>();
</script>

<style scoped lang="scss">
.footer-cta-link {
  display: block;
  text-decoration: none;
  color: inherit;
  outline: none;
}
.info-footer {
  width: 100%;
  background-color: #023482;
  margin-top: 96px;
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  transition: transform 200ms ease, box-shadow 200ms ease, filter 200ms ease;
  cursor: pointer;
  border-radius: 0;
}
.footer-cta-link:hover .info-footer,
.footer-cta-link:focus-visible .info-footer {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
  filter: brightness(1.03);
}
.footer-cta-link:focus-visible .info-footer {
  outline: 3px solid rgba(255, 255, 255, 0.7);
  outline-offset: -3px;
}

.info-footer-en {
  font-family: "Oswald", sans-serif;
  font-size: 64px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 40px;
}
.info-footer-jp {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 100px;
}

.footer-company {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.privacy-policy-link {
  display: block;
  text-align: center;
  margin-bottom: 64px;
  color: #000000;
  text-decoration: underline;
}

.arrow-right-icon {
  width: 80px;
  height: 80px;
}
</style>
