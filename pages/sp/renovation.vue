<template>
  <div class="renovation-page">
    <PageSpHeader title="RENOVATION & DESIGN" subtitle="リフォーム事業" />

    <img
      src="/public/images/renovation/renovation.svg"
      class="renovation-page-hero-image"
    />

    <div class="renovation-page-intro-strong">
      再販で鍛えた、実戦的リフォーム力。<br />
      リード株式会社だからできる、高品質×適正価格の空間提案。
    </div>

    <div class="renovation-page-intro-text">
      リード株式会社は、再販事業で培ってきた豊富なリフォーム実績を活かし、戸建て・マンションを問わず、あらゆる住まいに対して最適なプランをご提案します。<br />
      単なる修繕にとどまらず、生活導線やデザイン性まで考慮した空間づくりにより、「住みやすさ」と「付加価値」を両立したリフォームを実現しています。<br />
      物件の価値を高めるだけでなく、お客様のライフスタイルにフィットする住まいの再設計を目指しています。
    </div>

    <div class="renovation-page-row">
      <div class="renovation-page-text-col">
        <div class="renovation-page-intro-strong">
          戸建ても、マンションでも<br />
          現場経験で磨いた提案力と施工力に、<br />
          “価格の納得感”も、しっかり備えています。
        </div>
      </div>

      <img
        src="/public/images/renovation/home-renovation.svg"
        class="renovation-page-image"
      />
    </div>

    <div
      class="renovation-page-section-title renovation-page-accordion-toggle"
      @click="isBrokerageServiceOpen = !isBrokerageServiceOpen"
    >
      リフォームサービス
      <img
        v-if="isBrokerageServiceOpen"
        src="/public/images/common/arrow-top.svg"
        class="renovation-page-section-arrow"
      />
      <img
        v-else
        src="/public/images/common/arrow-bottom.svg"
        class="renovation-page-section-arrow"
      />
    </div>
    <div v-if="isBrokerageServiceOpen" class="renovation-page-section-content">
      <img
        src="/public/images/renovation/sp/rental-brokerage-service.svg"
        class="renovation-page-image"
      />
    </div>

    <div
      class="renovation-page-section-title renovation-page-accordion-toggle"
      @click="isRenovationBeforeAfterOpen = !isRenovationBeforeAfterOpen"
    >
      施工事例：価値再設計の実績
      <img
        v-if="isRenovationBeforeAfterOpen"
        src="/public/images/common/arrow-top.svg"
        class="renovation-page-section-arrow"
      />
      <img
        v-else
        src="/public/images/common/arrow-bottom.svg"
        class="renovation-page-section-arrow"
      />
    </div>
    <div
      v-if="isRenovationBeforeAfterOpen"
      class="renovation-page-section-content"
    >
      <img
        src="/public/images/renovation/renovation-before-after-01.svg"
        class="renovation-page-image"
      />
      <div class="renovation-page-section-strong">築30年戸建ての全面改装</div>
      <div class="renovation-page-section-text">
        <p>
          構造補強と断熱改修を行いながら、開放的なLDKと家事動線を重視した間取りへ。
        </p>
        <p>家族の時間を大切にする空間を実現しました。</p>
      </div>
      <img
        src="/public/images/renovation/renovation-before-after-02.svg"
        class="renovation-page-image"
      />
      <div class="renovation-page-section-strong">都心マンションの効率化</div>
      <div class="renovation-page-section-text">
        <p>
          限られた空間を最大限に活用する収納計画と、
          光を取り込む工夫で、狭さを感じさせない快適な住まいへと生まれ変わりました。
        </p>
      </div>
    </div>

    <div
      class="renovation-page-section-title renovation-page-section-title-inline"
    >
      まずはお気軽にご相談ください
    </div>
    <div class="renovation-page-section-content">
      <div>
        リード株式会社は再販事業で培った経験と技術力で、あなたの住まいに最適なリフォームプランを
        ご提案します。お客様のライフスタイルや将来のビジョンを伺いながら、
        「住みやすさ」と「付加価値」を両立した空間づくりを実現します。
      </div>
      <br />
      <div>
        また、自社施工や工程の効率化により、品質はそのままに、コストも抑えたご提案が可能です。「価格面でも安心して任せられる」
        と多くのお客様からご好評をいただいています。
      </div>
      <br />
      <p>
        無料相談・お見積りを随時承っております。お電話またはウェブサイトからお気軽にお問い
        合わせください。
      </p>
    </div>
  </div>
  <img
    src="/public/images/renovation/consultation-support.svg"
    class="renovation-page-image"
  />
</template>

<script setup lang="ts">
import PageSpHeader from "@/components/common/PageSpHeader.vue";

usePageTitle("RENOVATION & DESIGN");

definePageMeta({
  middleware: ["ua-device-redirect"],
});

const isBrokerageServiceOpen = ref(false);
const isRenovationBeforeAfterOpen = ref(false);
</script>

<style scoped lang="scss">
.renovation-page {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.renovation-page-hero-image {
  width: 100%;
  height: auto;
  display: block;
  margin-top: 24px;
}

.renovation-page-intro-strong {
  text-align: left;
  width: 90%;
  margin: 32px auto;
  font-size: 16px;
  font-weight: 700;
}
.renovation-page-intro-strong p {
  line-height: 1;
}

.renovation-page-intro-text {
  font-size: 14px;
  text-align: left;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
}

.renovation-page-section-title {
  font-size: 20px;
  font-weight: 700;
  color: #023482;
  margin: 32px auto 16px;
  text-align: left;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.renovation-page-accordion-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 16px;
}
.renovation-page-section-arrow {
  width: 16px;
  height: 16px;
}

.renovation-page-section-strong {
  text-align: left;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 8px;
}

.renovation-page-section-text {
  font-size: 14px;
  text-align: left;
  width: 100%;
  margin: 0 0 24px;
}

.renovation-page-section-title-inline {
  text-align: center;
  margin: 64px auto 32px;
}

.renovation-page-section-content {
  width: 90%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

.renovation-page-image {
  width: 100%;
  height: auto;
  display: block;
  max-width: none;
  max-width: none;
  object-fit: cover;
  margin: 24px 0;
}

.renovation-page-row {
  display: flex;
  flex-direction: column;
}

.renovation-page-text-col {
  order: 2;
}
</style>
