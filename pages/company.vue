<template>
  <div class="company-page">
    <Breadcrumbs
      v-if="!isMobile"
      :items="[{ label: '会社概要' }]"
      class="company-page-breadcrumb"
    />

    <div class="company-page-image-area">
      <NuxtImg
        format="webp"
        src="/images/common/company.png"
        class="company-page-image"
      />
    </div>

    <div class="company-page-header">
      <div class="company-page-title">company</div>
      <div class="company-page-subtitle">会社概要</div>
    </div>

    <div class="company-page-details">
      <Line class="company-page-line" />
      <div class="company-page-row">
        <div class="company-page-label">会社名</div>
        <div class="company-page-value">リード株式会社</div>
      </div>

      <Line class="company-page-line" />
      <div class="company-page-row">
        <div class="company-page-label">設立</div>
        <div class="company-page-value">令和5年 5月 29日</div>
      </div>

      <Line class="company-page-line" />
      <div class="company-page-row">
        <div class="company-page-label">代表</div>
        <div class="company-page-value">宮本　典彰</div>
      </div>

      <Line class="company-page-line" />
      <div class="company-page-row">
        <div class="company-page-label">所在地</div>
        <div class="company-page-value">〒231-0052　{{ address }}</div>
      </div>

      <Line class="company-page-line" />
      <div class="company-page-row">
        <div class="company-page-label">資本金</div>
        <div class="company-page-value">300万円</div>
      </div>

      <Line class="company-page-line" />
      <div class="company-page-row">
        <div class="company-page-label">事業内容</div>
        <div class="company-page-value">
          <div>不動産の賃貸・売買仲介、投資、保有、管理、開発業務</div>
          <div>リフォーム工事、解体工事、そのほか住宅に関わる工事</div>
        </div>
      </div>

      <Line class="company-page-line" />
      <div class="company-page-row">
        <div class="company-page-label">免許番号</div>
        <div class="company-page-value">
          宅地建物取引業者免許　神奈川県知事（1）第032141号
        </div>
      </div>

      <Line class="company-page-line" />
      <div class="company-page-row">
        <div class="company-page-label">所属団体</div>
        <div class="company-page-value">
          <div>公益社団法人　全日本不動産協会</div>
          <div>保証協会不動産保証協会</div>
        </div>
      </div>

      <Line class="company-page-line" />
      <div class="company-page-row">
        <div class="company-page-label">電話番号</div>
        <div class="company-page-value">045-308-9656</div>
      </div>

      <Line class="company-page-line" />
      <div class="company-page-row">
        <div class="company-page-label">FAX</div>
        <div class="company-page-value">045-308-9657</div>
      </div>

      <Line class="company-page-line" />
      <div class="company-page-row">
        <div class="company-page-label">MAIL</div>
        <div class="company-page-value">info@lead-k.jp</div>
      </div>
      <Line class="company-page-line" />
    </div>

    <div class="company-page-header">
      <div class="company-page-title">ACCESS</div>
      <div class="company-page-subtitle">アクセス</div>
    </div>

    <div class="company-page-map">
      <iframe
        :src="mapEmbedUrl"
        width="1038"
        height="699"
        style="border: 0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div class="company-page-address-bar">
      <div class="company-page-address">〒231-0052　{{ address }}</div>
      <div class="company-page-map-link">
        <a :href="mapUrl" target="_blank" rel="noopener noreferrer">
          GOOGLE MAP
          <img
            src="/images/common/arrow-right-black.svg"
            class="company-page-arrow-icon"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import Line from "@/components/common/Line.vue";

usePageTitle("COMPANY");

const isMobile = useIsMobile();

const address = "横浜市中区英町1番地隆峰ビル301号";
// Googleマップの埋め込みURL
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  address
)}&output=embed`;
// GoogleマップのリンクURL
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  address
)}`;
</script>

<style scoped lang="scss">
.company-page {
  width: 100%;
  margin: 0 auto;
}

.company-page-image-area {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.company-page-image {
  display: inline-block;
  width: 90%;
  height: 800px;
  object-fit: cover;
  object-position: center;
}

.company-page-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px auto 48px;
  padding-left: 0;
  text-align: center;
  row-gap: 4px;
}
.company-page-title {
  font-family: "Oswald", sans-serif;
  color: #cccccc;
  font-size: 24px;
  font-weight: 00;
  line-height: 1;
  margin: 0;
}
.company-page-subtitle {
  font-family: "Oswald", sans-serif;
  color: #000000;
  font-size: 40px;
  font-weight: 600;
  line-height: 1;
  margin: 0;
}

.company-page-details {
  width: 75%;
  margin: 0 auto 80px;
}
.company-page-line:deep(.line),
.company-page-details > :deep(.line) {
  width: 100%;
}
.company-page-row {
  display: flex;
  align-items: center;
  padding: 14px 0;
}
.company-page-label {
  width: 25%;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}
.company-page-value {
  width: 75%;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
}

.company-page-map {
  max-width: 1038px;
  margin: 0 auto;
}
.company-page-address-bar {
  max-width: 1038px;
  margin: 10px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.company-page-address {
  font-size: 20px;
  font-weight: 500;
}
.company-page-map-link a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  text-decoration: none;
}
.company-page-arrow-icon {
  width: 32px;
  height: 32px;
}

@media (max-width: 768px) {
  .company-page-header {
    margin: 48px auto 32px;
    row-gap: 2px;
  }

  .company-page-title {
    font-size: 16px;
  }

  .company-page-subtitle {
    font-size: 24px;
  }

  .company-page-image {
    display: inline-block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }

  .company-page-details {
    width: 90%;
    margin: 0 auto 48px;
  }

  .company-page-row {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0;
    row-gap: 4px;
  }

  .company-page-label {
    width: 100%;
    font-size: 14px;
    text-align: left;
    font-weight: 700;
  }

  .company-page-value {
    width: 100%;
    font-size: 14px;
    text-align: left;
  }

  .company-page-map {
    width: 90%;
    max-width: 90%;
    margin: 0 auto;
  }

  .company-page-map iframe {
    width: 100%;
    height: 220px;
  }

  .company-page-address-bar {
    max-width: 100%;
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
  }

  .company-page-address {
    font-size: 14px;
  }

  .company-page-map-link a {
    font-size: 14px;
  }

  .company-page-arrow-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
