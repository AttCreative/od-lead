<template>
  <section class="complete">
    <div class="complete-card" role="status" aria-live="polite">
      <h1 class="complete-title">送信が完了しました</h1>
      <p class="complete-text">
        お問い合わせいただきありがとうございます。<br />
        内容を確認のうえ、担当よりご連絡いたします。
      </p>

      <AppButton
        type="button"
        size="md"
        class="complete-button"
        @click="goHome"
      >
        トップへ戻る
      </AppButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import AppButton from "@/components/common/AppButton.vue";

const router = useRouter();
const goHome = () => router.push("/");
</script>

<style scoped>
.complete {
  width: 80%;
  margin: 60px auto 100px;
  display: grid;
  place-items: center;
}

.complete-card {
  width: min(720px, 100%);
  border: 1px solid #e3e7ef;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding: 32px 24px;
  text-align: center;
  background: #fff;
}

.complete-title {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 12px;
}

.complete-text {
  font-size: 16px;
  color: #222;
  line-height: 1.9;
  margin: 0 0 24px;
}

.complete-button {
  border-radius: 6px;
}
</style>
