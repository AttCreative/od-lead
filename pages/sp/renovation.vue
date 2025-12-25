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
      class="renovation-page-section-content renovation-photos"
    >
      <div class="renovation-photo-title">築56年リフォーム前</div>
      <div class="photo-row photo-row-1">
        <NuxtImg
          format="webp"
          loading="lazy"
          src="/images/renovation/56-years-old-before-renovation1.png"
          class="photo"
          @click="
            openImageModal(
              '/images/renovation/56-years-old-before-renovation1.png'
            )
          "
        />
      </div>
      <div class="photo-row photo-row-3">
        <NuxtImg
          format="webp"
          loading="lazy"
          src="/images/renovation/56-years-old-before-renovation2.png"
          class="photo"
          @click="
            openImageModal(
              '/images/renovation/56-years-old-before-renovation2.png'
            )
          "
        />
        <NuxtImg
          format="webp"
          loading="lazy"
          src="/images/renovation/56-years-old-before-renovation3.png"
          class="photo"
          @click="
            openImageModal(
              '/images/renovation/56-years-old-before-renovation3.png'
            )
          "
        />
        <NuxtImg
          format="webp"
          loading="lazy"
          src="/images/renovation/56-years-old-before-renovation4.png"
          class="photo"
          @click="
            openImageModal(
              '/images/renovation/56-years-old-before-renovation4.png'
            )
          "
        />
      </div>
      <div class="photo-row photo-row-3">
        <NuxtImg
          format="webp"
          loading="lazy"
          src="/images/renovation/56-years-old-before-renovation5.png"
          class="photo"
          @click="
            openImageModal(
              '/images/renovation/56-years-old-before-renovation5.png'
            )
          "
        />
        <NuxtImg
          format="webp"
          loading="lazy"
          src="/images/renovation/56-years-old-before-renovation6.png"
          class="photo"
          @click="
            openImageModal(
              '/images/renovation/56-years-old-before-renovation6.png'
            )
          "
        />
        <NuxtImg
          format="webp"
          loading="lazy"
          src="/images/renovation/56-years-old-before-renovation7.png"
          class="photo"
          @click="
            openImageModal(
              '/images/renovation/56-years-old-before-renovation7.png'
            )
          "
        />
      </div>

      <div class="renovation-photo-title">築56年リフォーム後</div>
      <div class="photo-row photo-row-2">
        <NuxtImg
          format="webp"
          loading="lazy"
          src="/images/renovation/56-years-old-after-renovation1.png"
          class="photo"
          @click="
            openImageModal(
              '/images/renovation/56-years-old-after-renovation1.png'
            )
          "
        />
        <NuxtImg
          format="webp"
          loading="lazy"
          src="/images/renovation/56-years-old-after-renovation2.png"
          class="photo"
          @click="
            openImageModal(
              '/images/renovation/56-years-old-after-renovation2.png'
            )
          "
        />
      </div>
      <div class="photo-row photo-row-3">
        <NuxtImg
          format="webp"
          loading="lazy"
          src="/images/renovation/56-years-old-after-renovation3.png"
          class="photo"
          @click="
            openImageModal(
              '/images/renovation/56-years-old-after-renovation3.png'
            )
          "
        />
        <NuxtImg
          format="webp"
          loading="lazy"
          src="/images/renovation/56-years-old-after-renovation4.png"
          class="photo"
          @click="
            openImageModal(
              '/images/renovation/56-years-old-after-renovation4.png'
            )
          "
        />
        <NuxtImg
          format="webp"
          loading="lazy"
          src="/images/renovation/56-years-old-after-renovation5.png"
          class="photo"
          @click="
            openImageModal(
              '/images/renovation/56-years-old-after-renovation5.png'
            )
          "
        />
      </div>

      <div class="renovation-photo-title">築40年リフォーム後</div>
      <div class="photo-row photo-row-2-vertical">
        <NuxtImg
          format="webp"
          loading="lazy"
          src="/images/renovation/40-years-old-after-renovation1.png"
          class="photo photo-left"
          @click="
            openImageModal(
              '/images/renovation/40-years-old-after-renovation1.png'
            )
          "
        />
        <div class="photo-right-col">
          <NuxtImg
            format="webp"
            loading="lazy"
            src="/images/renovation/40-years-old-after-renovation2.png"
            class="photo photo-right"
            @click="
              openImageModal(
                '/images/renovation/40-years-old-after-renovation2.png'
              )
            "
          />
          <NuxtImg
            format="webp"
            loading="lazy"
            src="/images/renovation/40-years-old-after-renovation3.png"
            class="photo photo-right"
            @click="
              openImageModal(
                '/images/renovation/40-years-old-after-renovation3.png'
              )
            "
          />
        </div>
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
  <ImageModal v-model:image-src="modalImageSrc" />
</template>

<script setup lang="ts">
import PageSpHeader from "@/components/common/PageSpHeader.vue";
import ImageModal from "@/components/common/ImageModal.vue";

usePageTitle("RENOVATION & DESIGN");

definePageMeta({
  middleware: ["ua-device-redirect"],
});

const isBrokerageServiceOpen = ref(false);
const isRenovationBeforeAfterOpen = ref(false);

const modalImageSrc = ref<string | null>(null);

const openImageModal = (src: string) => {
  modalImageSrc.value = src;
};
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

.renovation-photo-title {
  font-size: 16px;
  font-weight: 700;
  margin: 24px auto 16px;
}

.renovation-page-section-content.renovation-photos {
  width: 90%;
  margin: 0 auto;

  --h: 160px;
}

.renovation-page-section-content.renovation-photos .photo-row {
  display: grid;
  gap: 0;
  margin: 0;
}

.renovation-page-section-content.renovation-photos .photo-row-1 {
  grid-template-columns: 1fr;
}

.renovation-page-section-content.renovation-photos .photo-row-2 {
  grid-template-columns: repeat(2, 1fr);
}

.renovation-page-section-content.renovation-photos .photo-row-3 {
  grid-template-columns: repeat(3, 1fr);
}

.renovation-page-section-content.renovation-photos img.photo {
  width: 100%;
  height: var(--h);
  display: block;
  margin: 0;
  object-fit: cover;
  object-position: center;
}

.renovation-page-section-content.renovation-photos .photo-row-2-vertical {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0;
}

.renovation-page-section-content.renovation-photos
  .photo-row-2-vertical
  .photo-left {
  height: calc(var(--h) * 2);
}

.renovation-page-section-content.renovation-photos
  .photo-row-2-vertical
  .photo-right-col {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 0;
}

.renovation-page-section-content.renovation-photos
  .photo-row-2-vertical
  .photo-right {
  height: var(--h);
}
</style>
