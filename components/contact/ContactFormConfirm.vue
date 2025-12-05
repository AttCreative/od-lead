<template>
  <form class="contact-confirm" @submit.prevent="onSubmit" novalidate>
    <div class="contact-confirm-note">
      入力内容をご確認の上、送信してください。<br />
      ※個人情報保護につきましては、個人情報保護方針にてご確認ください。
    </div>

    <div class="contact-confirm-stack">
      <Line class="contact-confirm-line" />

      <label class="contact-confirm-label">社名</label>
      <div class="contact-confirm-value">
        {{ form.company || "（未入力）" }}
      </div>

      <Line class="contact-confirm-line" />

      <label class="contact-confirm-label">名前</label>
      <div class="contact-confirm-value">
        {{ form.name }}
      </div>

      <Line class="contact-confirm-line" />

      <label class="contact-confirm-label">メールアドレス</label>
      <div class="contact-confirm-value">
        {{ form.email }}
      </div>

      <Line class="contact-confirm-line" />

      <label class="contact-confirm-label">郵便番号</label>
      <div class="contact-confirm-value">
        {{ form.zip }}
      </div>

      <Line class="contact-confirm-line" />

      <label class="contact-confirm-label">住所</label>
      <div class="contact-confirm-value">
        {{ form.address }}
      </div>

      <Line class="contact-confirm-line" />

      <label class="contact-confirm-label">電話番号</label>
      <div class="contact-confirm-value">
        {{ form.tel }}
      </div>

      <Line class="contact-confirm-line" />

      <label class="contact-confirm-label">お問い合わせ内容</label>
      <div class="contact-confirm-value">
        {{ topicsText }}
      </div>

      <Line class="contact-confirm-line" />

      <label class="contact-confirm-label">詳細</label>
      <div class="contact-confirm-value contact-confirm-value--pre">
        {{ form.details }}
      </div>

      <Line class="contact-confirm-line" />
    </div>

    <div class="privacy-policy-main-text" v-html="html" />

    <label class="contact-confirm-agree">
      <input type="checkbox" v-model="isAgree" />
      個人情報保護方針に同意する
    </label>

    <div class="contact-confirm-actions">
      <AppButton
        type="button"
        size="lg"
        class="contact-confirm contact-confirm-back-btn"
        :disabled="submitting"
        @click="backToEdit"
      >
        入力内容を修正
      </AppButton>

      <AppButton
        type="submit"
        size="lg"
        class="contact-confirm contact-confirm-submit-btn"
        :loading="submitting"
        :disabled="submitting || !isAgree"
      >
        {{ submitting ? "送信中…" : "入力内容を送信" }}
      </AppButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import MarkdownIt from "markdown-it";
import privacyMd from "@/assets/privacy.md?raw";
import { useContactStore } from "@/stores/contact";
import Line from "@/components/common/Line.vue";
import AppButton from "@/components/common/AppButton.vue";
import type { Step } from "@/types/contact";

type Emit = (event: "step-change", step: Step) => void;
const emit = defineEmits<Emit>();

const store = useContactStore();
const form = store.formState;

const isAgree = ref<boolean>(false);

const md = new MarkdownIt({
  html: true,
  breaks: false,
});

// 改行タグを無視
md.renderer.rules.html_block = (tokens, idx) => {
  const raw = tokens[idx].content;
  return raw.replace(/<br\s*\/?>/gi, "");
};

const html = md.render(privacyMd);

const topicsText = computed(() =>
  form.topics.length ? form.topics.join("、") : "（未選択）"
);

const submitting = ref(false);

const backToEdit = () => {
  if (submitting.value) return;
  emit("step-change", "01");
};

const onSubmit = async () => {
  if (submitting.value) return;
  submitting.value = true;
  try {
    await $fetch("/api/sendmail", {
      method: "POST",
      body: { ...form },
    });

    store.reset();
    emit("step-change", "03");
  } catch (e) {
    alert("送信に失敗しました。時間をおいて再度お試しください。");
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped lang="scss">
.contact-confirm {
  width: 80%;
  margin: 40px auto 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-confirm-note {
  color: #333;
  margin-bottom: 24px;
  font-size: 16px;
  text-align: center;
}

.contact-confirm-stack {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 60%;
}
.contact-confirm-stack > * {
  width: 100%;
}

.contact-confirm-stack :deep(.line),
.contact-confirm-line:deep(.line) {
  width: 100%;
}

.contact-confirm-label {
  width: 90%;
  font-size: 16px;
  font-weight: 600;
}

.contact-confirm-value {
  width: 90%;
  font-size: 16px;
  margin-top: 8px;
  word-break: break-word;
}

.contact-confirm-value--pre {
  white-space: pre-wrap;
}

.privacy-policy-main-text {
  border: 1px solid #898989;
  font-size: 14px;
  width: 60%;
  height: 320px;
  white-space: pre-wrap;
  overflow-y: auto;
  margin-top: 32px;
  padding: 8px;
  white-space: normal;
}
.privacy-policy-main-text :deep(h3) {
  margin-bottom: 0;
  font-size: 16px;
}

.privacy-policy-main-text :deep(p) {
  margin: 0;
}

.privacy-policy-main-text :deep(h3:last-of-type + p) {
  margin-bottom: 16px;
}

.contact-confirm-agree {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
  font-size: 16px;
}

.contact-confirm-actions {
  display: flex;
  gap: 64px;
  justify-content: center;
  margin-top: 64px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.contact-confirm {
  flex: 1;
  font-size: 30px;
  padding: 12px 20px;
}

.contact-confirm-submit-btn {
  background: #023482;
  color: #fff;
  border: 1px solid #023482;
}

.contact-confirm-back-btn {
  background: #dfdfdf;
  color: #000;
  border: 1px solid #dfdfdf;
}
</style>
