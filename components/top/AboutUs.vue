<template>
  <section id="about" class="about-section">
    <div class="about-section-text">
      <div class="about-section-header">
        <div class="about-section-title">ABOUT US</div>
        <div class="about-section-subtitle">Lead株式会社について</div>
      </div>
      <div class="about-section-lead">
        街の未来を見つめ、<br />
        住まいに想いを込める企業へ。
      </div>
      <div class="about-section-body">
        Leadは、地域に根ざした不動産のプロフェッショナルとして、一つひとつの住まいに丁寧な価値を吹き込み、安心して暮らせる街づくりを目指しています。中古住宅の再生事業を中心に、品質と価格のバランスにこだわり、「選ばれる再販」を実現し続けることで、お客様の信頼に応えてまいります。私たちは、社員一人ひとりの誠実な仕事を積み重ね、地域とともに歩む企業であり続けます。
      </div>
    </div>

    <div class="about-section-image-area">
      <NuxtLink
        class="about-section-card"
        to="/message"
        aria-label="MESSAGE メッセージ"
      >
        <figure class="about-section-figure">
          <img
            src="/images/top/about-us-message.svg"
            alt="メッセージのイメージ"
            class="about-section-img"
          />
          <figcaption class="about-section-caption">
            <span class="about-section-caption-text">
              <span class="en">MESSAGE</span>
              <span class="ja">メッセージ</span>
            </span>
            <img
              src="/images/common/arrow-right-white.svg"
              alt=""
              aria-hidden="true"
              class="about-section-caption-icon"
            />
          </figcaption>
        </figure>
      </NuxtLink>

      <NuxtLink
        class="about-section-card"
        to="/company"
        aria-label="COMPANY 会社概要"
      >
        <figure class="about-section-figure">
          <img
            src="/images/top/about-us-company.svg"
            alt="会社概要のイメージ"
            class="about-section-img"
          />
          <figcaption class="about-section-caption">
            <span class="about-section-caption-text">
              <span class="en">COMPANY</span>
              <span class="ja">会社概要</span>
            </span>
            <img
              src="/images/common/arrow-right-white.svg"
              alt=""
              aria-hidden="true"
              class="about-section-caption-icon"
            />
          </figcaption>
        </figure>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.about-section {
  width: 100%;
  background: #023482;
  margin-top: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  box-sizing: border-box;
}

.about-section-text {
  color: #fff;
  line-height: 1.8;
  font-family: "Noto Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 96px;
  box-sizing: border-box;
  height: 100%;
}

.about-section-header {
  display: flex;
  align-items: flex-end;
  gap: 24px;
}
.about-section-title {
  font-size: 64px;
  font-family: "Oswald", sans-serif;
}
.about-section-subtitle {
  font-size: 20px;
  padding-bottom: 20px;
}

.about-section-lead {
  font-size: 30px;
  font-weight: 600;
  margin-top: 32px;
}
.about-section-body {
  font-size: 20px;
  margin-top: 32px;
}

.about-section-image-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  height: 100%;
  box-sizing: border-box;
}

.about-section-card {
  display: block;
  text-decoration: none;
  color: inherit;
  height: 100%;
}

.about-section-figure {
  margin: 0;
  border-radius: 0;
  overflow: hidden;
  position: relative;
  height: 100%;
  background: #f5f7fa;
}

.about-section-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.about-section-caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  min-height: 96px;
  padding-block: 18px;
  padding-inline: 20px;

  background: rgba(58, 131, 199, 0.6);
  color: #fff;
}

.about-section-caption-text {
  display: grid;
  line-height: 1.2;
}
.about-section-caption-text .en {
  font-family: "Oswald", sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.about-section-caption-text .ja {
  font-size: 14px;
  opacity: 0.95;
  margin-top: 8px;
}

.about-section-caption-icon {
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
}

.about-section-card:hover .about-section-img {
  transform: scale(1.02);
  transition: transform 240ms ease;
}
.about-section-card:hover .about-section-caption {
  background: rgba(58, 131, 199, 0.7);
  transition: background 240ms ease;
}

@media (max-width: 1024px) {
  .about-section {
    margin-top: 96px;
  }

  .about-section-text {
    padding: 32px 56px;
  }

  .about-section-header {
    gap: 20px;
  }

  .about-section-title {
    font-size: 32px;
  }

  .about-section-subtitle {
    font-size: 14px;
    padding-bottom: 16px;
  }

  .about-section-lead {
    font-size: 16px;
    margin-top: 24px;
  }

  .about-section-body {
    font-size: 12px;
    margin-top: 24px;
  }

  .about-section-caption {
    min-height: 80px;
    padding-block: 14px;
    padding-inline: 16px;
  }

  .about-section-caption-text .en {
    font-size: 20px;
  }

  .about-section-caption-text .ja {
    font-size: 12px;
    margin-top: 6px;
  }

  .about-section-caption-icon {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 768px) {
  .about-section {
    grid-template-columns: 1fr;
    margin-top: 64px;
  }

  .about-section-text {
    padding: 24px 16px;
  }

  .about-section-header {
    gap: 12px;
  }

  .about-section-title {
    font-size: 32px;
  }

  .about-section-subtitle {
    font-size: 14px;
    padding-bottom: 8px;
  }

  .about-section-lead {
    font-size: 18px;
    margin-top: 16px;
  }

  .about-section-body {
    font-size: 14px;
    margin-top: 16px;
  }

  .about-section-image-area {
    grid-template-columns: 1fr 1fr;
  }

  .about-section-figure {
    aspect-ratio: 4 / 3;
  }

  .about-section-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .about-section-caption {
    min-height: 64px;
    padding-block: 10px;
    padding-inline: 12px;
  }

  .about-section-caption-text .en {
    font-size: 14px;
  }

  .about-section-caption-text .ja {
    font-size: 10px;
    margin-top: 4px;
  }

  .about-section-caption-icon {
    width: 32px;
    height: 32px;
  }
}
</style>
