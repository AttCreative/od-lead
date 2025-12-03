<template>
  <section class="contact-confirm">
    <h1 class="contact-confirm-title">入力内容の確認</h1>

    <div class="contact-confirm-note">
      内容にお間違いがなければ「送信する」を押してください。
    </div>

    <dl class="contact-confirm-list">
      <div class="row">
        <dt>社名</dt>
        <dd>{{ form.company || "（未入力）" }}</dd>
      </div>
      <div class="row">
        <dt>名前</dt>
        <dd>{{ form.name }}</dd>
      </div>
      <div class="row">
        <dt>メールアドレス</dt>
        <dd>{{ form.email }}</dd>
      </div>
      <div class="row">
        <dt>郵便番号</dt>
        <dd>{{ form.zip }}</dd>
      </div>
      <div class="row">
        <dt>住所</dt>
        <dd>{{ form.address }}</dd>
      </div>
      <div class="row">
        <dt>電話番号</dt>
        <dd>{{ form.tel }}</dd>
      </div>
      <div class="row">
        <dt>お問い合わせ内容</dt>
        <dd>{{ topicsText }}</dd>
      </div>
      <div class="row">
        <dt>詳細</dt>
        <dd class="pre">{{ form.details }}</dd>
      </div>
      <div class="row">
        <dt>個人情報保護方針</dt>
        <dd>{{ form.agree ? "同意する" : "同意しない" }}</dd>
      </div>
    </dl>

    <div class="contact-confirm-actions">
      <AppButton
        type="button"
        size="md"
        class="btn-secondary"
        :disabled="submitting"
        @click="backToEdit"
      >
        修正する
      </AppButton>

      <AppButton
        type="button"
        size="md"
        class="btn-primary"
        :loading="submitting"
        :disabled="submitting"
        @click="submit"
      >
        {{ submitting ? "送信中…" : "送信する" }}
      </AppButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useContactStore } from "@/stores/contact";
import type { Step } from "@/types/contact";
import AppButton from "@/components/common/AppButton.vue";

type Emit = (event: "step-change", step: Step) => void;
const emit = defineEmits<Emit>();

const store = useContactStore();
const form = store.formState;

// 表示用（カンマ区切り）
const topicsText = computed(() =>
  form.topics.length ? form.topics.join("、") : "（未選択）"
);

const submitting = ref(false);

const backToEdit = () => {
  if (submitting.value) return;
  emit("step-change", "01");
};

const submit = async () => {
  if (submitting.value) return;
  submitting.value = true;
  try {
    // TODO: メール送信APIに置き換える
    await new Promise((resolve) => setTimeout(resolve, 1000));

    store.reset();
    emit("step-change", "03");
  } catch (e) {
    alert("送信に失敗しました。時間をおいて再度お試しください。");
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped>
.contact-confirm {
  width: 80%;
  margin: 40px auto 80px;
}
.contact-confirm-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
}
.contact-confirm-note {
  color: #333;
  margin-bottom: 24px;
}

.contact-confirm-list {
  display: grid;
  gap: 12px;
}
.row {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: start;
  gap: 16px;
}
dt {
  font-weight: 600;
}
dd {
  margin: 0;
}
dd.pre {
  white-space: pre-wrap;
}

.contact-confirm-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
}

.btn-primary {
  background: #023482;
  color: #fff;
  border: 1px solid #023482;
}
.btn-secondary {
  background: #f3f6fb;
  color: #023482;
  border: 1px solid #023482;
}
</style>
