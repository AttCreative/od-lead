<template>
  <div class="renovation-page">
    <component
      :is="isTablet ? PageTabletHeader : PageHeader"
      title="RENOVATION & DESIGN"
      subtitle="リフォーム事業"
    />

    <Breadcrumbs
      :items="[
        { label: '事業内容', to: '/#overview' },
        { label: 'リフォーム事業' },
      ]"
    />

    <div class="renovation-page-hero">
      <img
        src="/public/images/renovation/renovation.svg"
        class="renovation-page-hero-img"
      />
    </div>

    <div class="renovation-page-intro-strong">
      <p>再販で鍛えた、実戦的リフォーム力。</p>
      <p>リード株式会社だからできる、高品質 × 適正価格の空間提案。</p>
    </div>

    <div class="renovation-page-intro-text">
      <p>
        リード株式会社は、再販事業で培ってきた豊富なリフォーム実績を活かし、
      </p>
      <p>
        戸建て・マンションを問わず、あらゆる住まいに対して最適なプランをご提案します。
      </p>
      <p>
        単なる修繕にとどまらず、生活導線やデザイン性まで考慮した空間づくりにより、
      </p>
      <p>「住みやすさ」と「付加価値」を両立したリフォームを実現しています。</p>
      <p>
        物件の価値を高めるだけでなく、お客様のライフスタイルにフィットする住まいの再設計を目指しています。
      </p>
    </div>

    <div class="renovation-page-row">
      <div class="renovation-page-col-img">
        <img
          src="/public/images/renovation/home-renovation.svg"
          class="renovation-page-image-sm"
        />
      </div>
      <div class="renovation-page-col">
        <div class="renovation-page-feature-lines">
          <p>戸建ても、マンションでも</p>
          <p>現場経験で磨いた提案力と施工力に、</p>
          <p>“価格の納得感”も、しっかり備えています。</p>
        </div>
      </div>
    </div>

    <div class="renovation-page-section-title">リフォームサービス</div>
    <hr class="renovation-page-divider" />
    <div class="renovation-page-section-image">
      <img
        src="/public/images/renovation/rental-brokerage-service.svg"
        class="renovation-page-image-sm"
      />
    </div>

    <div class="renovation-page-section-title">施工事例：価値再設計の実績</div>

    <div class="renovation-page-section-content renovation-photos">
      <div class="photo-groups">
        <div class="photo-group photo-group-1">
          <div class="renovation-photo-title">築56年リフォーム前</div>
          <div class="photo-row photo-row-1">
            <img
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
            <img
              src="/images/renovation/56-years-old-before-renovation2.png"
              class="photo"
              @click="
                openImageModal(
                  '/images/renovation/56-years-old-before-renovation2.png'
                )
              "
            />
            <img
              src="/images/renovation/56-years-old-before-renovation3.png"
              class="photo"
              @click="
                openImageModal(
                  '/images/renovation/56-years-old-before-renovation3.png'
                )
              "
            />
            <img
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
            <img
              src="/images/renovation/56-years-old-before-renovation5.png"
              class="photo"
              @click="
                openImageModal(
                  '/images/renovation/56-years-old-before-renovation5.png'
                )
              "
            />
            <img
              src="/images/renovation/56-years-old-before-renovation6.png"
              class="photo"
              @click="
                openImageModal(
                  '/images/renovation/56-years-old-before-renovation6.png'
                )
              "
            />
            <img
              src="/images/renovation/56-years-old-before-renovation7.png"
              class="photo"
              @click="
                openImageModal(
                  '/images/renovation/56-years-old-before-renovation7.png'
                )
              "
            />
          </div>
        </div>

        <div class="photo-group photo-group-2">
          <div class="renovation-photo-title">築56年リフォーム後</div>
          <div class="photo-row photo-row-2">
            <img
              src="/images/renovation/56-years-old-after-renovation1.png"
              class="photo"
              @click="
                openImageModal(
                  '/images/renovation/56-years-old-after-renovation1.png'
                )
              "
            />
            <img
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
            <img
              src="/images/renovation/56-years-old-after-renovation3.png"
              class="photo"
              @click="
                openImageModal(
                  '/images/renovation/56-years-old-after-renovation3.png'
                )
              "
            />
            <img
              src="/images/renovation/56-years-old-after-renovation4.png"
              class="photo"
              @click="
                openImageModal(
                  '/images/renovation/56-years-old-after-renovation4.png'
                )
              "
            />
            <img
              src="/images/renovation/56-years-old-after-renovation5.png"
              class="photo"
              @click="
                openImageModal(
                  '/images/renovation/56-years-old-after-renovation5.png'
                )
              "
            />
          </div>
        </div>

        <div class="photo-group photo-group-3">
          <div class="renovation-photo-title">築40年リフォーム後</div>
          <div class="photo-row photo-row-2-vertical">
            <img
              src="/images/renovation/40-years-old-after-renovation1.png"
              class="photo photo-left"
              @click="
                openImageModal(
                  '/images/renovation/40-years-old-after-renovation1.png'
                )
              "
            />
            <div class="photo-right-col">
              <img
                src="/images/renovation/40-years-old-after-renovation2.png"
                class="photo photo-right"
                @click="
                  openImageModal(
                    '/images/renovation/40-years-old-after-renovation2.png'
                  )
                "
              />
              <img
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
      </div>
    </div>

    <div class="renovation-page-row">
      <div class="renovation-page-col">
        <div
          class="renovation-page-section-title renovation-page-section-title--inline"
        >
          まずはお気軽にご相談ください
        </div>
        <div class="renovation-page-consult-text">
          <div>
            リード株式会社は再販事業で培った経験と技術力で、あなたの住まいに最適なリフォームプランを
            ご提案します。お客様のライフスタイルや将来のビジョンを伺いながら、
            「住みやすさ」と「付加価値」を両立した空間づくりを実現します。
          </div>
          <br />
          <div>
            また、自社施工や工程の効率化により、品質はそのままに、コストも抑えたご提案が可能です。
            「価格面でも安心して任せられる」
            と多くのお客様からご好評をいただいています。
          </div>
          <br />
          <p>
            無料相談・お見積りを随時承っております。お電話またはウェブサイトからお気軽にお問い合わせください。
          </p>
        </div>
      </div>
      <div class="renovation-page-col">
        <img
          src="/public/images/renovation/consultation-support.svg"
          class="renovation-page-image-md"
        />
      </div>
    </div>
  </div>
  <ImageModal v-model:image-src="modalImageSrc" />
</template>

<script setup lang="ts">
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import PageHeader from "@/components/common/PageHeader.vue";
import PageTabletHeader from "@/components/common/PageTabletHeader.vue";
import ImageModal from "@/components/common/ImageModal.vue";

usePageTitle("RENOVATION & DESIGN");

definePageMeta({
  middleware: ["ua-device-redirect"],
});

const isTablet = useIsTablet();

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

.renovation-page-hero {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.renovation-page-hero-img {
  width: 85%;
  height: auto;
  display: block;
}

.renovation-page-intro-strong {
  text-align: left;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  font-size: 24px;
  font-weight: 700;
}
.renovation-page-intro-strong p {
  line-height: 1;
}

.renovation-page-intro-text {
  font-size: 16px;
  text-align: left;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
}

.renovation-page-consult-text {
  font-size: 16px;
  text-align: left;
  width: 85%;
  margin-left: 0;
  margin-right: auto;
  margin-bottom: 100px;
}

.renovation-page-section-title {
  font-size: 32px;
  font-weight: 700;
  color: #023482;
  margin-top: 90px;
  margin-bottom: 30px;
  text-align: left;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}

.renovation-page-section-title--inline {
  margin-top: 0;
  margin-bottom: 20px;
  width: 100%;
}

.renovation-page-section-image {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}

.renovation-page-row {
  display: flex;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  gap: 0;
  margin-bottom: 100px;
}
.renovation-page-col {
  width: 50%;
}
.renovation-page-col-img {
  width: 50%;
  display: flex;
  justify-content: center;
}

.renovation-page-image-sm {
  max-width: 100%;
  height: auto;
}
.renovation-page-image-md {
  max-width: 90%;
  height: auto;
}

.renovation-page-divider {
  border: none;
  border-top: 1px solid #023482;
  width: 85%;
  margin: 0 auto 50px;
}

.renovation-page-feature-lines {
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  padding-left: 60px;
}
.renovation-page-feature-lines p {
  line-height: 1;
}

.renovation-page-case-title {
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.renovation-page-case-text {
  font-size: 14px;
  text-align: left;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  line-height: 1;
}

.renovation-page-section-content {
  width: 90%;
  justify-content: center;
  align-items: center;
}

.renovation-photo-title {
  font-size: 16px;
  font-weight: 700;
  margin: 24px auto 16px;
}

.renovation-page-section-content.renovation-photos {
  width: 85%;
  margin: 0 auto 32px;

  --h: 160px;
  --h-2: 240px;
  --h-3: 240px;
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

.renovation-page-section-content.renovation-photos .photo-groups {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: start;
}

.renovation-page-section-content.renovation-photos .photo-group-2 {
  --h: var(--h-2);
}

.renovation-page-section-content.renovation-photos .photo-group-3 {
  grid-column: 1 / -1;
  width: calc((100% - 16px) / 2);
  justify-self: start;
  --h: var(--h-3);
}
</style>
