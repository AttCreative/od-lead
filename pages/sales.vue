<template>
  <div class="sales-page">
    <component
      :is="isTablet ? PageTabletHeader : PageHeader"
      title="SALES & RESALE"
      subtitle="不動産売買・再販事業"
    />

    <Breadcrumbs
      :items="[
        { label: '事業内容', to: '/#overview' },
        { label: '不動産売買・再販事業' },
      ]"
    />

    <div class="sales-page-hero">
      <img
        src="/public/images/sales/sales.svg"
        alt="セールス画像"
        class="sales-page-hero-img"
      />
    </div>

    <div class="sales-page-intro-strong">
      <p>横浜で培った地域知見を活かし、価値ある不動産活用を提案。</p>
      <p>
        横浜で30年以上。地域を知り尽くした目で、土地の魅力を引き出し、パートナーと共に未来へつなぐ。
      </p>
    </div>

    <div class="sales-page-intro-text">
      <p>
        リードは、不動産事業者様やオーナー様と連携し、土地や建物の特性・地域のニーズ・背景に応じた最適なプランニングをご提案します。
      </p>
      <p>
        特に代表の宮本は、横浜で30年以上暮らし、地域の歴史や文化、街の変化を肌で感じてきた経験を持っています。
      </p>
      <p>
        私たちは単なる仲介や販売ではなく、“地域に根ざした価値づくり”を支えるパートナーとして、未来につながる不動産活用を実現します。
      </p>
      <br />
      <p>
        その地域知見を活かし、新築・更地活用・戸建て・駐車場・ビル・マンションなど、
      </p>
      <p>
        多様な活用方法を視野に入れ、既存の価値を高めるアイデアを共に創出します。
      </p>
    </div>

    <div class="sales-page-row">
      <div class="sales-page-col">
        <div class="sales-page-feature-title">
          “住まいを整える”だけでなく、“価値を高める”こと。
        </div>
        <div class="sales-page-feature-text">
          <p>
            私たちは、地域ごとの歴史や文化、将来性といったエリア特性を深く理解し、
          </p>
          <p>
            その魅力を最大限に引き出す住まい・新たな不動産の形をご提案しています。
          </p>
          <br />
          <p>
            小規模ながらも柔軟な対応力を強みに、土地に寄り添った住まいづくりで地域の暮らしを支えます。
          </p>
          <p>
            また、地域コミュニティとのつながりも大切にし、持続可能な街づくりに貢献します。
          </p>
        </div>
      </div>
      <div class="sales-page-col-img">
        <img
          src="/public/images/sales/sales-feature.svg"
          alt="セールス画像2"
          class="sales-page-image-sm"
        />
      </div>
    </div>

    <div class="sales-page-section-title">私たちのサポートプロセス</div>
    <div class="sales-page-section-image">
      <img
        src="/public/images/sales/sales-support-process.svg"
        alt="セールス画像3"
        class="sales-page-image-sm"
      />
    </div>

    <div class="sales-page-section-title">不動産売買</div>
    <div class="sales-page-section-image">
      <img
        src="/public/images/sales/sales-transaction.svg"
        alt="セールス画像4"
        class="sales-page-image-sm"
      />
    </div>

    <div class="aftercare-wrap">
      <div class="aftercare-box">
        <div class="aftercare-title">アフターフォロー体制</div>
        <div>
          販売後も定期的な点検や相談窓口の設置など、購入者の安心をサポートする体制を整えていきます。
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import PageHeader from "@/components/common/PageHeader.vue";
import PageTabletHeader from "@/components/common/PageTabletHeader.vue";

usePageTitle("SALES & RESALE");

definePageMeta({
  middleware: ["ua-device-redirect"],
});

const isTablet = useIsTablet();
</script>

<style scoped lang="scss">
.sales-page {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.sales-page-header {
  padding-left: 80px;
  display: flex;
  margin: 0 auto;
  align-items: baseline;
  gap: 0;
}

.sales-page-title {
  font-family: "Oswald", sans-serif;
  color: #023482;
  font-size: 90px;
}

.sales-page-subtitle {
  font-family: "Oswald", sans-serif;
  color: #023482;
  font-size: 20px;
  font-weight: 600;
}

.sales-page-hero {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.sales-page-hero-img {
  width: 90%;
  height: auto;
  display: block;
}

.sales-page-intro-strong {
  text-align: left;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
  font-size: 24px;
  font-weight: 700;
}

.sales-page-intro-strong p {
  line-height: 1;
}

.sales-page-intro-text {
  font-size: 16px;
  text-align: left;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
}

.sales-page-feature-title {
  font-size: 26px;
  font-weight: 700;
  text-align: left;
  width: 100%;
  margin: 0 0 20px;
}
.sales-page-feature-text {
  font-size: 16px;
  text-align: left;
  width: 100%;
  margin: 0 0 100px;
}

.sales-page-section-title {
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

.sales-page-section-image {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}

.sales-page-image-sm {
  width: 90%;
  height: auto;
  display: block;
  max-width: none;
}

.sales-page-row {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  display: flex;
  align-items: stretch;
  gap: 40px;
}

.sales-page-col {
  flex: 1 1 50%;
}

.sales-page-col-img {
  flex: 1 1 40%;
  display: flex;
  justify-content: center;
}

.sales-page-col-img .sales-page-image-sm {
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
}

.aftercare-wrap {
  width: 80%;
  margin: 90px auto 0;
  display: flex;
  justify-content: center;
}

.aftercare-box {
  border: 1px solid #023482;
  padding: 20px;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  font-size: 20px;
}

.aftercare-title {
  font-weight: 600;
}
</style>
