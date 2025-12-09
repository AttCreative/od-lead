<template>
  <div class="rental-page">
    <PageSpHeader title="RENTAL & MANAGEMENT" subtitle="不動産賃貸・管理事業" />

    <img
      src="/public/images/rental/rental.svg"
      alt="レンタル画像"
      class="rental-page-hero-image"
    />

    <div class="rental-page-intro-strong">
      <p>この街をよく知る私たちが、“この街らしい暮らし”を支えます。</p>
      <p>
        賃貸物件のご紹介・契約手続きから、入居後の管理業務までをワンストップで対応。
      </p>
    </div>

    <div class="rental-page-intro-text">
      私たちは、単なる不動産会社ではありません。
      この街に深く根ざし、地域の魅力と可能性を熟知した住まいのプロフェッショナルです。
      オーナー様・入居者様双方にとって安心・快適な住環境をご提供します。
      地域密着型のきめ細やかなサービスで、住まいの“管理の質”にもこだわっています。
    </div>

    <div
      class="rental-page-section-title rental-page-accordion-toggle"
      @click="isBrokerageServiceOpen = !isBrokerageServiceOpen"
    >
      賃貸仲介サービス
      <img
        v-if="isBrokerageServiceOpen"
        src="/public/images/common/arrow-top.svg"
        class="rental-page-section-arrow"
      />
      <img
        v-else
        src="/public/images/common/arrow-bottom.svg"
        class="rental-page-section-arrow"
      />
    </div>
    <div v-if="isBrokerageServiceOpen" class="rental-page-section-content">
      <div class="rental-page-section-text">
        入居希望者への物件紹介から内見、 条件交渉、
        契約手続きまで一貫して対応します。お客様のご要望を丁寧にお聞きし、理想の住まい探しをお手伝いします。
      </div>
      <img
        src="/public/images/rental/sp/rental-brokerage-service.svg"
        alt="レンタル画像2"
        class="rental-page-image"
      />
    </div>

    <div
      class="rental-page-section-title rental-page-accordion-toggle"
      @click="isTenantVoiceOpen = !isTenantVoiceOpen"
    >
      入居者様の声
      <img
        v-if="isTenantVoiceOpen"
        src="/public/images/common/arrow-top.svg"
        class="rental-page-section-arrow"
      />
      <img
        v-else
        src="/public/images/common/arrow-bottom.svg"
        class="rental-page-section-arrow"
      />
    </div>
    <div v-if="isTenantVoiceOpen" class="rental-page-section-content">
      <img
        src="/public/images/rental/sp/tenant-voices.svg"
        alt="レンタル画像3"
        class="rental-page-image"
      />
    </div>

    <div class="rental-page-section-title">私たちの強み</div>
    <div class="rental-page-section-content">
      <img
        src="/public/images/rental/sp/our-strengths.svg"
        alt="レンタル画像4"
        class="rental-page-image"
      />
      <div class="rental-page-our-strengths-text">
        賃貸仲介から管理まで、 住まいの“その後”も安心サポート。
        オーナー様・入居者様双方にとって最適な住環境の実現をお手伝いします。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageSpHeader from "~/components/common/PageSpHeader.vue";

usePageTitle("RENTAL & MANAGEMENT");

definePageMeta({
  middleware: ["ua-device-redirect"],
});

const isBrokerageServiceOpen = ref<boolean>(false);
const isTenantVoiceOpen = ref<boolean>(false);
</script>

<style scoped lang="scss">
.rental-page {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.rental-page-hero-image {
  width: 100%;
  height: auto;
  display: block;
  margin-top: 24px;
}

.rental-page-intro-strong {
  text-align: left;
  width: 90%;
  margin: 32px auto;
  font-size: 16px;
  font-weight: 700;
}
.rental-page-intro-strong p {
  line-height: 1;
}

.rental-page-intro-text {
  font-size: 14px;
  text-align: left;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
}

.rental-page-section-title {
  font-size: 20px;
  font-weight: 700;
  color: #023482;
  margin: 32px auto 16px;
  text-align: left;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.rental-page-accordion-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 16px;
}
.rental-page-section-arrow {
  width: 16px;
  height: 16px;
}

.rental-page-section-text {
  font-size: 14px;
  text-align: left;
  width: 100%;
  margin: 0 0 24px;
}

.rental-page-section-content {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.rental-page-image {
  width: 90%;
  height: auto;
  display: block;
  max-width: none;
}

.rental-page-our-strengths-text {
  font-size: 14px;
  text-align: left;
  width: 90%;
  background: #f3eee3;
  margin: 16px auto;
  padding: 16px;
  border-radius: 8px;
}
</style>
