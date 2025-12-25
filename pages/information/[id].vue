<template>
  <div class="information-detail">
    <component
      :is="isMobile ? PageSpHeader : PageHeader"
      title="INFORMATION"
      subtitle="お知らせ・最新情報"
    />

    <Breadcrumbs
      v-if="!isMobile"
      :items="[{ label: currentItem?.title || '' }]"
    />

    <div class="information-detail-meta">
      <div class="information-detail-date">{{ currentItem?.date }}</div>
      <div>
        <div class="information-detail-tag">{{ currentItem?.tag }}</div>
      </div>
    </div>

    <div class="information-detail-headline">{{ currentItem?.title }}</div>

    <div class="information-detail-body">
      <p v-for="(paragraph, idx) in paragraphs" :key="idx">{{ paragraph }}</p>
    </div>

    <div class="information-detail-image-area">
      <img :src="currentItem?.img" class="information-detail-image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import PageHeader from "@/components/common/PageHeader.vue";
import PageSpHeader from "@/components/common/PageSpHeader.vue";

usePageTitle("INFORMATION");

const isMobile = useIsMobile();

const infoItems = [
  {
    id: 1,
    img: "/images/information/renewal.svg",
    date: "2025.12.25",
    tag: "お知らせ",
    title: "ホームページリニューアルのお知らせ",
    text: `平素よりリード株式会社のホームページをご覧いただき、誠にありがとうございます。
このたび、当社ではホームページを全面リニューアルいたしました。
不動産買取（区分マンション・中古戸建・土地）を中心に、仲介事業やリフォーム事業など、より幅広いニーズにお応えできる体制を整えております。
今回のリニューアルでは、お客様にとってより見やすく、わかりやすく、情報を探しやすい構成を目指し、デザインや内容を一新しました。
今後は、最新の買取実績やリフォーム事例、不動産に関するお役立ち情報などを随時更新してまいります。
引き続き、皆さまからのご支援を賜りますようお願い申し上げます。`,
  },
];

const route = useRoute();
const currentId = Number(route.params.id);
const currentItem = infoItems.find((i) => i.id === currentId);
const paragraphs = currentItem?.text.split("\n") ?? [];
</script>

<style scoped lang="scss">
.information-detail {
  width: 100%;
  margin: 0 auto;
}

.information-detail-meta {
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 120px auto 0;
  width: 80%;
}
.information-detail-date {
  font-family: "Oswald", sans-serif;
  font-size: 26px;
  font-weight: 500;
}
.information-detail-tag {
  font-size: 16px;
  background-color: #023482;
  width: 111px;
  height: 31px;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  line-height: 31px;
}

.information-detail-headline {
  width: 80%;
  font-size: 40px;
  font-weight: 700;
  margin: 5px auto 80px;
  text-align: left;
}

.information-detail-body {
  font-size: 16px;
  font-weight: 400;
  width: 80%;
  margin: 0 auto 50px;
  text-align: left;
}
.information-detail-body p {
  line-height: 1.7;
  margin-bottom: 12px;
}

.information-detail-image-area {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.information-detail-image {
  display: inline-block;
  width: 60%;
  height: auto;
}

@media (max-width: 768px) {
  .information-detail-meta {
    width: 90%;
    margin: 40px auto 0;
    gap: 12px;
  }

  .information-detail-date {
    font-size: 16px;
  }

  .information-detail-tag {
    font-size: 12px;
    width: auto;
    min-width: 80px;
    height: 24px;
    line-height: 24px;
    padding: 0 8px;
  }

  .information-detail-headline {
    width: 90%;
    font-size: 22px;
    margin: 8px auto 32px;
  }

  .information-detail-body {
    width: 90%;
    font-size: 14px;
    margin: 0 auto 32px;
  }

  .information-detail-body p {
    line-height: 1.7;
    margin-bottom: 10px;
  }

  .information-detail-image-area {
    margin-top: 8px;
  }

  .information-detail-image {
    width: 100%;
    max-width: 100%;
  }
}
</style>
