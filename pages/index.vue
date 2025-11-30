<template>
  <div class="home-page">
    <div class="home-page-hero">
      <img
        src="/images/common/company.svg"
        alt="トップ画像"
        class="home-page-hero-img"
      />
      <div class="home-page-hero-overlay">
        <div class="home-page-hero-text">
          <div>人と街を、安心でつなぐ。</div>
          <div>Leadが届ける住まいの新たな価値を。</div>
        </div>
      </div>
    </div>

    <Information :infoItems="infoItems" />
    <Overview />
    <AboutUs />
    <Catchphrase />
  </div>
</template>

<script setup lang="ts">
import Information from "@/components/top/Information.vue";
import Overview from "~/components/top/Overview.vue";
import AboutUs from "@/components/top/AboutUs.vue";
import Catchphrase from "@/components/top/Catchphrase.vue";

usePageTitle();

// TODO: 要件固まったら差し替える
const infoItems = [
  {
    id: 1,
    img: "/images/top/catchphrase.svg",
    alt: "情報画像1",
    date: "2025.01.01",
    tag: "お知らせ",
    title: "ホームページリニューアルのお知らせ",
    text: "平素より格別のご愛顧を賜り、誠にありがとうございます。この度、皆さまにより便利にご利用いただくため、ホームページを全面リニューアルいたしました。今後もより良いサービスの提供を目指してまいりますので、引き続きご愛顧賜りますようお願い申し上げます。",
  },
  {
    id: 2,
    img: "/images/top/catchphrase.svg",
    alt: "情報画像2",
    date: "2025.02.01",
    tag: "お知らせ",
    title: "年末年始の営業について",
    text: "年末年始の営業についてお知らせいたします。誠に勝手ながら、12月29日から1月3日までの期間を休業とさせていただきます。1月4日からは通常営業いたしますので、何卒よろしくお願い申し上げます。",
  },
  {
    id: 3,
    img: "/images/top/catchphrase.svg",
    alt: "情報画像3",
    date: "2025.03.01",
    tag: "お知らせ",
    title: "システムメンテナンスのお知らせ",
    text: "システムメンテナンスのお知らせ",
  },
];
</script>

<style scoped lang="scss">
.home-page {
  width: 100%;
  margin: 0 auto;
}

.home-page-hero {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  width: 100%;
}
.home-page-hero-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.home-page-hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-bottom: 96px;
}
.home-page-hero-text {
  color: #fff;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.2;
  margin-left: 5%;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}
</style>
