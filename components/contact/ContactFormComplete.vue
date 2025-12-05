<template>
  <section class="contact-complete">
    <p class="contact-complete-text">
      お問い合わせフォームの送信を完了いたしました。<br />
      この度はお問い合わせいただきまして誠にありがとうございます。<br />
      <br />
      内容を確認次第、担当者よりご連絡させていただきます。<br />
      今しばらくお待ちくださいませ。
    </p>

    <AppButton
      type="button"
      size="md"
      class="contact-complete-button"
      @click="toTop"
    >
      TOPへ戻る
    </AppButton>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import AppButton from "@/components/common/AppButton.vue";

const router = useRouter();
const toTop = () => router.push("/");
</script>

<style scoped>
.contact-complete {
  width: 80%;
  margin: 60px auto 100px;
  display: grid;
  place-items: center;
}

.contact-complete-text {
  font-size: 16px;
  color: #222;
  line-height: 1.9;
  margin: 0 0 24px;
  text-align: center;
}

.contact-complete-button {
  width: 50%;
  font-size: 30px;
  padding: 12px 20px;
  margin: 40px 0 16px 0;
}
</style>
