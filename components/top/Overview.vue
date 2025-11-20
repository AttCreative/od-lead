<template>
  <section id="overview" class="overview-section">
    <div class="overview-list-row">
      <div class="overview-list-title">OVERVIEW</div>
      <div class="overview-list-description">事業内容</div>
    </div>

    <div class="overview-list-grid">
      <NuxtLink
        v-for="(item, idx) in overviewItems"
        :key="idx"
        :to="item.to"
        class="overview-list-link"
        :aria-label="`${item.description}（${item.title}）へ`"
      >
        <div class="overview-list-card">
          <div class="overview-list-image-area">
            <img :src="item.img" :alt="item.alt" class="overview-list-image" />
            <div class="overview-list-overlay">
              <div class="overview-list-headline">{{ item.title }}</div>
              <p class="overview-list-text">{{ item.description }}</p>
            </div>
            <div class="overview-list-more">
              <img
                src="/images/common/arrow-right-white.svg"
                alt=""
                class="overview-list-more-icon"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const overviewItems = [
  {
    img: "/images/top/over-view-rental.svg",
    alt: "不動産賃貸・管理事業画像",
    title: "RENTAL & MANAGEMENT",
    description: "不動産賃貸・管理事業",
    to: "/rental",
  },
  {
    img: "/images/top/over-view-sales.svg",
    alt: "不動産売買・再販事業画像",
    title: "SALES & RESALE",
    description: "不動産売買・再販事業",
    to: "/sales",
  },
  {
    img: "/images/top/over-view-renovation.svg",
    alt: "リフォーム事業画像",
    title: "RENOVATION & DESIGN",
    description: "リフォーム事業",
    to: "/renovation",
  },
];
</script>

<style scoped lang="scss">
.overview-section {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.overview-list-row {
  display: flex;
  align-items: center;
  margin-top: 120px;
  padding-left: 5%;
  gap: 32px;
}

.overview-list-title {
  font-size: 64px;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
}

.overview-list-description {
  font-size: 24px;
  font-family: "Noto Sans", sans-serif;
  font-weight: 600;
  align-self: flex-end;
  padding-bottom: 10px;
}

.overview-list-grid {
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-top: 32px;
}

.overview-list-link {
  display: block;
  color: inherit;
  text-decoration: none;
  outline: none;
}
.overview-list-link:hover .overview-list-image,
.overview-list-link:focus-visible .overview-list-image {
  transform: scale(1.04);
}
.overview-list-link:hover .overview-list-card,
.overview-list-link:focus-visible .overview-list-card {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
}

.overview-list-card {
  flex: 1 1 0;
  max-width: 480px;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.overview-list-image-area {
  position: relative;
  line-height: 0;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
}

.overview-list-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms ease;
}

.overview-list-overlay {
  position: absolute;
  inset: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  box-sizing: border-box;
  pointer-events: none;
}

.overview-list-headline {
  font-size: 16px;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  margin: 0 0 12px;
}

.overview-list-text {
  font-size: 24px;
  font-family: "Noto Sans", sans-serif;
  font-weight: 550;
  line-height: 1.7;
  margin: 0;
}

.overview-list-more {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 2;
}

.overview-list-more-icon {
  width: 48px;
  height: 48px;
}
</style>
