<template>
  <div class="information-section">
    <div class="information-list-title">INFORMATION</div>
    <div class="information-list-description">お知らせ・最新情報</div>

    <div class="information-list-wrap">
      <Line class="information-list-line" />

      <template v-for="item in infoItems" :key="item.id">
        <RouterLink
          :to="`/information/${item.id}`"
          class="information-list-row"
        >
          <div class="information-list-left">
            <div class="information-list-date">{{ item.date }}</div>
            <div class="information-list-tag">{{ item.tag }}</div>
            <div class="information-list-headline">{{ item.title }}</div>
          </div>
          <div class="information-list-cta">
            <div class="information-list-cta-label">VIEW MORE</div>
            <img
              src="/images/common/arrow-right-black.svg"
              alt=""
              aria-hidden="true"
              class="information-list-cta-icon"
            />
          </div>
        </RouterLink>
        <Line class="information-list-line" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import Line from "@/components/common/Line.vue";

type InfoItem = {
  id: number;
  img: string;
  alt: string;
  date: string;
  tag: string;
  title: string;
};
type Props = { infoItems: InfoItem[] };
defineProps<Props>();
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
  width: 70%;
  margin: 72px auto 0 auto;
}

.information-list-line {
  display: block;
  width: 100%;
  margin: 0 auto;
}

.information-list-row {
  padding: 30px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: opacity 160ms ease, transform 160ms ease;
  gap: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
}
.information-list-row:focus-visible {
  outline: 2px solid #3a83c7;
  outline-offset: 2px;
}
.information-list-left {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1 1 auto;
  min-width: 0;
}
.information-list-date {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  font-weight: 500;
  flex: 0 0 auto;
  white-space: nowrap;
}
.information-list-tag {
  font-size: 14px;
  background-color: #023482;
  width: 80px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  flex: 0 0 auto;
  white-space: nowrap;
}
.information-list-headline {
  font-size: 20px;
  font-weight: 500;
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 160ms ease, text-decoration-color 160ms ease;
}
.information-list-row:hover .information-list-headline {
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
}

.information-list-cta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
  white-space: nowrap;
}
.information-list-cta-label {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  font-weight: 600;
}
.information-list-cta-icon {
  width: 40px;
  height: 40px;
}
</style>
