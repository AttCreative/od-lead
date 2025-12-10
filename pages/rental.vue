<template>
  <div class="rental-page">
    <component
      :is="isTablet ? PageTabletHeader : PageHeader"
      title="RENTAL & MANAGEMENT"
      subtitle="不動産賃貸・管理事業"
    />

    <Breadcrumbs
      :items="[
        { label: '事業内容', to: '/#overview' },
        { label: '不動産賃貸・管理事業' },
      ]"
    />

    <div class="rental-page-hero">
      <img
        src="/public/images/rental/rental.svg"
        alt="レンタル画像"
        class="rental-page-hero-img"
      />
    </div>

    <div class="rental-page-intro-strong">
      <p>この街をよく知る私たちが、“この街らしい暮らし”を支えます。</p>
      <p>
        賃貸物件のご紹介・契約手続きから、入居後の管理業務までをワンストップで対応。
      </p>
    </div>

    <div class="rental-page-intro-text">
      <p>私たちは、単なる不動産会社ではありません。</p>
      <p>
        この街に深く根ざし、地域の魅力と可能性を熟知した住まいのプロフェッショナルです。
      </p>
      <p>オーナー様・入居者様双方にとって安心・快適な住環境をご提供します。</p>
      <p>
        地域密着型のきめ細やかなサービスで、住まいの“管理の質”にもこだわっています。
      </p>
    </div>

    <div class="rental-page-section-title">賃貸仲介サービス</div>
    <div class="rental-page-section-image">
      <img
        src="/public/images/rental/rental-brokerage-service.svg"
        alt="レンタル画像2"
        class="rental-page-image-sm"
      />
    </div>

    <div class="rental-page-section-title">入居者様の声</div>
    <div class="rental-page-section-image">
      <img
        src="/public/images/rental/tenant-voices.svg"
        alt="レンタル画像3"
        class="rental-page-image-sm"
      />
    </div>

    <div class="rental-page-section-title">私たちの強み</div>
    <div class="rental-page-section-image">
      <img
        src="/public/images/rental/our-strengths.svg"
        alt="レンタル画像4"
        class="rental-page-image-sm"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import PageHeader from "@/components/common/PageHeader.vue";
import PageTabletHeader from "@/components/common/PageTabletHeader.vue";

usePageTitle("RENTAL & MANAGEMENT");

definePageMeta({
  middleware: ["ua-device-redirect"],
});

const isTablet = useIsTablet();
</script>

<style scoped lang="scss">
.rental-page {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.rental-page-hero {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.rental-page-hero-img {
  width: 90%;
  height: auto;
  display: block;
}

.rental-page-intro-strong {
  text-align: left;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
  font-size: 24px;
  font-weight: 700;
}
.rental-page-intro-strong p {
  line-height: 1;
}

.rental-page-intro-text {
  font-size: 16px;
  text-align: left;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
}

.rental-page-section-title {
  font-size: 32px;
  font-weight: 700;
  color: #023482;
  margin-top: 90px;
  margin-bottom: 30px;
  text-align: left;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.rental-page-section-image {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}
.rental-page-image-sm {
  width: 90%;
  height: auto;
  display: block;
  max-width: none;
}
</style>
