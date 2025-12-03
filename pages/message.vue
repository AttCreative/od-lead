<template>
  <div class="message-page">
    <PageHeader title="MESSAGE" subtitle="メッセージ" />

    <Breadcrumbs :items="[{ label: 'メッセージ' }]" />

    <div class="message-page-hero">
      <img
        src="/public/images/message/message.svg"
        alt="メッセージ画像"
        class="message-page-hero-img"
      />
    </div>

    <h2 class="message-h2">ごあいさつ</h2>

    <div class="message-text">
      <p>地域の未来と、人の想いに寄り添って。それがLeadの出発点です。</p>
      <p>
        地域の特性や人々の暮らしに寄り添い、その土地に合った住まいの価値を高めていく
      </p>
      <p>“街と人をつなぐ住まいの架け橋”でありたいと考えています。</p>
      <br />
      <p>
        再販リノベーションを中心に、中古住宅の仕入れ・設計・施工・販売までをワンストップで行い、
      </p>
      <p>
        「理想の住まいを手の届く価格で実現する。」それが、私たちのこだわりです。
      </p>
      <br />
      <p>また、私たちのもう一つの強みは、「スピード感」と「柔軟な対応力」。</p>
      <p>
        大手では難しい細やかな調整や、お客様のこだわりに応える提案も、私たちなら可能です。
      </p>
      <br />
      <p>Leadという社名に込めた「先導する」という想いの通り、</p>
      <p>
        住まいを通じて、人の想いや街の未来を、次の一歩へと導いていける存在を目指してまいります。
      </p>
    </div>

    <div class="message-by">代表取締役&nbsp;&nbsp;宮本 典彰</div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import PageHeader from "@/components/common/PageHeader.vue";

usePageTitle("MESSAGE");
</script>

<style scoped lang="scss">
.message-page {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.message-page-hero {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 90px;
}

.message-page-hero-img {
  width: 95%;
  height: auto;
  display: block;
}

.message-h2 {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 80px;
  text-align: center;
}

.message-text {
  font-size: 20px;
  font-weight: 400;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
  text-align: left;
}

.message-text p {
  line-height: 1;
}

.message-by {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: right;
  padding-right: 15%;
}
</style>
