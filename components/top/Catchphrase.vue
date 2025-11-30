<template>
  <div class="catchphrase-section">
    <div class="catchphrase-section-image">
      <img
        src="/images/top/catchphrase.svg"
        alt="キャッチフレーズ画像"
        class="catchphrase-section-img"
      />
    </div>

    <div class="catchphrase-section-text">
      <div class="catchphrase-section-title">横浜の未来を共に創る</div>
      <div class="catchphrase-section-subtext">
        私たちは単なる不動産の仲介や販売ではなく、
      </div>
      <div class="catchphrase-section-highlight">
        「地域に根ざした価値づくり」
      </div>
      <div class="catchphrase-section-subtext">
        のパートナーとして、あなたの大切な資産の可能性を最大限に引き出します。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.catchphrase-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 96px;
  padding: 0 96px 0 48px;
}

.catchphrase-section-image {
  flex: 0 0 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.catchphrase-section-img {
  width: 100%;
  padding: 80px;
}

.catchphrase-section-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.catchphrase-section-title,
.catchphrase-section-highlight {
  font-family: "Noto Sans Display", "Noto Sans JP", sans-serif;
  font-weight: 700;
  font-size: 46px;
  margin: 0 0 16px 0;
}

.catchphrase-section-highlight {
  margin-top: 24px;
}

.catchphrase-section-subtext {
  font-family: "Noto Sans", "Noto Sans JP", sans-serif;
  font-weight: 500;
  font-size: 20px;
  margin: 12px 0 0 0;
}
</style>
