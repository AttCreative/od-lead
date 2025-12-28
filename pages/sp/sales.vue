<template>
  <div class="sales-page">
    <PageSpHeader title="SALES & RESALE" subtitle="不動産売買・再販事業" />

    <img src="/images/sales/sales.svg" class="sales-page-hero-image" />

    <div class="sales-page-intro-strong">
      <p>
        横浜で培った地域知見を活かし、<br />
        価値ある不動産活用を提案。
      </p>
      <p>
        横浜で30年以上。地域を知り尽くした目で、<br />
        土地の魅力を引き出し、パートナーと共に<br />
        未来へつなぐ。
      </p>
    </div>

    <div class="sales-page-intro-text">
      リードは、不動産事業者様やオーナー様と連携し、土地や建物の特性・地域のニーズ・背景に応じた最適なプランニングをご提案します。<br />
      特に代表の宮本は、横浜で30年以上暮らし、地域の歴史や文化、街の変化を肌で感じてきた経験を持っています。<br />
      私たちは単なる仲介や販売ではなく、“地域に根ざした価値づくり”を支えるパートナーとして、未来につながる不動産活用を実現します。<br />
      <br />
      その地域知見を活かし、新築・更地活用・戸建て・駐車場・ビル・マンションなど、<br />
      多様な活用方法を視野に入れ、既存の価値を高めるアイデアを共に創出します。
    </div>

    <div class="sales-page-row">
      <div class="sales-page-text-col">
        <div class="sales-page-intro-strong">
          “住まいを整える”だけでなく、<br />
          “価値を高める”こと。
        </div>
        <div class="sales-page-intro-text">
          私たちは、地域ごとの歴史や文化、将来性といったエリア特性を深く理解し、
          その魅力を最大限に引き出す住まい・新たな不動産の形をご提案しています。
          <br />
          <br />
          小規模ながらも柔軟な対応力を強みに、土地に寄り添った住まいづくりで地域の暮らしを支えます。
          また、地域コミュニティとのつながりも大切にし、持続可能な街づくりに貢献します。
        </div>
      </div>
      <img src="/images/sales/sales-feature.svg" class="sales-page-image" />
    </div>

    <div
      class="sales-page-section-title sales-page-accordion-toggle"
      @click="isSupportProcessOpen = !isSupportProcessOpen"
    >
      私たちのサポートプロセス
      <img
        v-if="isSupportProcessOpen"
        src="/images/common/arrow-top.svg"
        class="sales-page-section-arrow"
      />
      <img
        v-else
        src="/images/common/arrow-bottom.svg"
        class="sales-page-section-arrow"
      />
    </div>
    <div v-if="isSupportProcessOpen" class="sales-page-section-content">
      <div class="sales-page-section-text">
        お客様と二人三脚で、地域に根ざした価値づくりを実現します。どの段階からでもお気軽にご相談ください。
      </div>
      <img
        src="/images/sales/sp/sales-support-process.svg"
        class="sales-page-image"
      />
    </div>

    <div
      class="sales-page-section-title sales-page-accordion-toggle"
      @click="isTransactionOpen = !isTransactionOpen"
    >
      不動産売買
      <img
        v-if="isTransactionOpen"
        src="/images/common/arrow-top.svg"
        class="sales-page-section-arrow"
      />
      <img
        v-else
        src="/images/common/arrow-bottom.svg"
        class="sales-page-section-arrow"
      />
    </div>
    <div v-if="isTransactionOpen" class="sales-page-section-content">
      <div class="sales-page-section-text">
        個人のお客様にも、再販事業で培った経験と知識を活かした丁寧な仲介サービスを提供しています。
      </div>
      <img
        src="/images/sales/sp/sales-transaction.svg"
        class="sales-page-image"
      />
    </div>

    <div class="sales-page-section-title">アフターフォロー体制</div>
    <div class="sales-page-section-after-follow-text">
      販売後も定期的な点検や相談窓口の設置など、購入者の安心をサポートする体制を整えていきます。
    </div>
  </div>
</template>

<script setup lang="ts">
import PageSpHeader from "~/components/common/PageSpHeader.vue";

usePageTitle("SALES & RESALE");

const isSupportProcessOpen = ref<boolean>(false);
const isTransactionOpen = ref<boolean>(false);
</script>

<style scoped lang="scss">
.sales-page {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.sales-page-hero-image {
  width: 100%;
  height: auto;
  display: block;
  margin-top: 24px;
}

.sales-page-intro-strong {
  text-align: left;
  width: 90%;
  margin: 32px auto;
  font-size: 16px;
  font-weight: 700;
}

.sales-page-intro-strong p {
  line-height: 1;
}

.sales-page-intro-text {
  font-size: 14px;
  text-align: left;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
}

.sales-page-section-title {
  font-size: 20px;
  font-weight: 700;
  color: #023482;
  margin: 32px auto 16px;
  text-align: left;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.sales-page-accordion-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 16px;
}
.sales-page-section-arrow {
  width: 16px;
  height: 16px;
}

.sales-page-section-text {
  font-size: 14px;
  text-align: left;
  width: 100%;
  margin: 0 0 24px;
}
.sales-page-section-after-follow-text {
  font-size: 14px;
  text-align: left;
  width: 90%;
  margin: 0 auto 32px;
}

.sales-page-section-content {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sales-page-image {
  width: 100%;
  height: auto;
  display: block;
  max-width: none;
  max-width: none;
  object-fit: cover;
}

.sales-page-row {
  display: flex;
  flex-direction: column;
}

.sales-page-text-col {
  order: 2;
}
</style>
