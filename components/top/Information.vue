<template>
  <div class="information-section">
    <div class="information-list-title">INFORMATION</div>
    <div class="information-list-description">お知らせ・最新情報</div>

    <div class="information-list-wrap">
      <div
        class="information-list-card"
        v-for="(item, idx) in infoItems"
        :key="idx"
      >
        <div class="information-list-image-area">
          <img :src="item.img" :alt="item.alt" class="information-list-image" />
        </div>

        <div class="information-list-body">
          <div class="information-list-meta">
            <span class="information-list-date">{{ item.date }}</span>
            <span class="information-list-tag">{{ item.tag }}</span>
          </div>

          <div class="information-list-headline">{{ item.title }}</div>
          <p class="information-list-text">{{ item.text }}</p>

          <div
            class="information-list-more"
            @click="toInformationDetail(item.id)"
          >
            <span class="information-list-more-text">VIEW MORE</span>
            <img
              src="/images/common/arrow-right-black.svg"
              alt="View More"
              class="information-list-more-icon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

type InfoItem = {
  id: number;
  img: string;
  alt: string;
  date: string;
  tag: string;
  title: string;
  text: string;
};
type Props = { infoItems: InfoItem[] };
defineProps<Props>();

const router = useRouter();
const toInformationDetail = (id: number) => {
  router.push("/information/" + id);
};
</script>

<style scoped lang="scss">
.information-section {
  width: 100%;
  margin-top: 108px;
}

.information-list-title {
  font-size: 64px;
  font-family: "Oswald", sans-serif;
  text-align: center;
}

.information-list-description {
  font-size: 24px;
  font-weight: 600;
  font-family: "Noto Sans", sans-serif;
  text-align: center;
}

.information-list-wrap {
  width: min(1200px, 92%);
  margin: 48px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 40px;
}

.information-list-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.information-list-image-area {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.information-list-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.information-list-body {
  --text-area-h: 220px;
  display: flex;
  flex-direction: column;
  min-height: var(--text-area-h);
  overflow: hidden;
  padding: 16px;
}

.information-list-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 24px 0 16px;
}

.information-list-date {
  font-family: "Oswald", sans-serif;
  font-size: 14px;
  font-weight: 500;
}

.information-list-tag {
  font-size: 10px;
  color: #fff;
  background: #023482;
  padding: 4px 10px;
  text-align: center;
  line-height: 1;
}

.information-list-headline {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-clamp: 2;
}

.information-list-text {
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  line-clamp: 3;
  overflow-wrap: anywhere;
}

.information-list-more {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  cursor: pointer;
  justify-content: flex-end;
}

.information-list-more-text {
  font-size: 16px;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
}

.information-list-more-icon {
  width: 48px;
  height: 48px;
}
</style>
