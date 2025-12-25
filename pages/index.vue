<template>
  <div class="home-page">
    <div class="home-page-hero">
      <NuxtImg
        format="webp"
        src="/images/common/company.png"
        class="home-page-hero-img"
      />
      <div class="home-page-hero-overlay">
        <div class="home-page-hero-text">
          <div>人と街を、安心でつなぐ。</div>
          <div>リード株式会社が届ける住まいの新たな価値を。</div>
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

const infoItems = [
  {
    id: 1,
    img: "/images/top/catchphrase.svg",
    date: "2025.12.25",
    tag: "お知らせ",
    title: "ホームページリニューアルのお知らせ",
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
  padding-bottom: 5%;
}
.home-page-hero-text {
  color: #fff;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.2;
  margin-left: 5%;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}

@media (max-width: 1024px) {
  .home-page-hero-text {
    font-size: 32px;
    margin-left: 3%;
  }
}

@media (max-width: 768px) {
  .home-page-hero-text {
    font-size: 20px;
    margin-left: 2%;
  }
}
</style>
