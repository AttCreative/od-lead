<template>
  <div class="renovation-page">
    <PageHeader title="RENOVATION & DESIGN" subtitle="リフォーム事業" />

    <Breadcrumbs
      :items="[
        { label: '事業内容', to: '/#overview' },
        { label: 'リフォーム事業' },
      ]"
    />

    <div class="renovation-page-hero">
      <img
        src="/public/images/renovation/renovation.svg"
        alt="リフォーム画像"
        class="renovation-page-hero-img"
      />
    </div>

    <div class="renovation-page-intro-strong">
      <p>再販で鍛えた、実戦的リフォーム力。</p>
      <p>Leadだからできる、高品質 × 適正価格の空間提案。</p>
    </div>

    <div class="renovation-page-intro-text">
      <p>Leadは、再販事業で培ってきた豊富なリフォーム実績を活かし、</p>
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
          alt="リフォーム画像2"
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

    <div class="renovation-page-section-title">賃貸仲介サービス</div>
    <hr class="renovation-page-divider" />
    <div class="renovation-page-section-image">
      <img
        src="/public/images/renovation/rental-brokerage-service.svg"
        alt="リフォーム画像3"
        class="renovation-page-image-sm"
      />
    </div>

    <div class="renovation-page-section-title">施工事例：価値再設計の実績</div>
    <div class="renovation-page-row">
      <div class="renovation-page-col">
        <img
          src="/public/images/renovation/renovation-before-after-01.svg"
          alt="リフォーム画像4"
          class="renovation-page-image-md"
        />
      </div>
      <div class="renovation-page-col">
        <img
          src="/public/images/renovation/renovation-before-after-02.svg"
          alt="リフォーム画像5"
          class="renovation-page-image-md"
        />
      </div>
    </div>

    <div class="renovation-page-row">
      <div class="renovation-page-col">
        <p class="renovation-page-case-title">築30年戸建ての全面改装</p>
        <p class="renovation-page-case-text">
          構造補強と断熱改修を行いながら、開放的なLDKと家事動線を重視した間取りへ。
        </p>
        <p class="renovation-page-case-text">
          家族の時間を大切にする空間を実現しました。
        </p>
      </div>
      <div class="renovation-page-col">
        <p class="renovation-page-case-title">都心マンションの効率化</p>
        <p class="renovation-page-case-text">
          限られた空間を最大限に活用する収納計画と、 光を取り込む工夫で、
        </p>
        <p class="renovation-page-case-text">
          狭さを感じさせない快適な住まいへと生まれ変わりました。
        </p>
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
            Leadは再販事業で培った経験と技術力で、あなたの住まいに最適なリフォームプランを
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
          alt="リフォーム画像6"
          class="renovation-page-image-md"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import PageHeader from "@/components/common/PageHeader.vue";

usePageTitle("RENOVATION & DESIGN");
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
</style>
