<template>
  <form class="contact-form" @submit.prevent="onSubmit" novalidate>
    <div class="contact-form-note">
      <div>*は記入必須項目ですので、必ずご記入ください。</div>
      <div>
        ※弊社ではしつこい電話連絡・営業等は一切いたしませんので、ご安心下さい。
      </div>
      <div>※個人情報保護につきましては、個人情報保護方針にてご確認下さい。</div>
    </div>
    <div class="contact-form-stack">
      <Line class="contact-form-line" />

      <label class="contact-form-label">社名</label>
      <div>
        <input
          v-model.trim="form.company"
          type="text"
          class="contact-form-input"
        />
      </div>

      <Line class="contact-form-line" />

      <label class="contact-form-label contact-form-label--required"
        >名前</label
      >
      <div>
        <input
          v-model.trim="form.name"
          type="text"
          class="contact-form-input"
          :aria-invalid="!valid.name && touched.name"
          @blur="touched.name = true"
        />
        <p v-if="!valid.name && touched.name" class="contact-form-error">
          必須項目です。
        </p>
      </div>

      <Line class="contact-form-line" />

      <label class="contact-form-label contact-form-label--required"
        >メールアドレス</label
      >
      <div>
        <input
          v-model.trim="form.email"
          type="email"
          class="contact-form-input"
          :aria-invalid="!valid.email && touched.email"
          @blur="touched.email = true"
        />
        <p class="contact-form-help">
          お問い合わせ完了後に確認メールをお送りいたします。
        </p>
        <p v-if="!valid.email && touched.email" class="contact-form-error">
          正しいメールアドレスを入力してください。
        </p>
      </div>

      <Line class="contact-form-line" />

      <label class="contact-form-label contact-form-label--required"
        >郵便番号</label
      >
      <div class="contact-form-zip">
        <input
          v-model.trim="form.zip"
          inputmode="numeric"
          pattern="[0-9]*"
          placeholder="1234567"
          class="contact-form-input"
          :aria-invalid="!valid.zip && touched.zip"
          @blur="touched.zip = true"
        />
        <AppButton
          type="button"
          size="sm"
          class="contact-form-zip-btn"
          :loading="ui.zipLoading"
          @click="onZipSearch"
        >
          検索
        </AppButton>
      </div>
      <p v-if="!valid.zip && touched.zip" class="contact-form-error">
        7桁の数字で入力してください（ハイフン不要）。
      </p>

      <Line class="contact-form-line" />

      <label class="contact-form-label contact-form-label--required"
        >住所</label
      >
      <div>
        <input
          v-model.trim="form.address"
          type="text"
          class="contact-form-input"
          :aria-invalid="!valid.address && touched.address"
          @blur="touched.address = true"
        />
        <p v-if="!valid.address && touched.address" class="contact-form-error">
          必須項目です。
        </p>
      </div>

      <Line class="contact-form-line" />

      <label class="contact-form-label contact-form-label--required"
        >電話番号</label
      >
      <div>
        <input
          v-model.trim="form.tel"
          type="tel"
          class="contact-form-input"
          placeholder="0312345678"
          :aria-invalid="!valid.tel && touched.tel"
          @blur="touched.tel = true"
        />
        <p v-if="!valid.tel && touched.tel" class="contact-form-error">
          数字・ハイフンのみで入力してください。
        </p>
      </div>

      <Line class="contact-form-line" />

      <div class="contact-form-topics-row">
        <label class="contact-form-label">お問い合わせ内容</label>
        <div class="contact-form-topics">
          <label class="contact-form-check">
            <input
              type="checkbox"
              value="不動産売買：再販関連について"
              v-model="form.topics"
            />
            不動産売買・再販関連について
          </label>
          <label class="contact-form-check">
            <input
              type="checkbox"
              value="不動産賃貸関連について"
              v-model="form.topics"
            />
            不動産賃貸関連について
          </label>
          <label class="contact-form-check">
            <input
              type="checkbox"
              value="リフォーム関連について"
              v-model="form.topics"
            />
            リフォーム関連について
          </label>
          <label class="contact-form-check">
            <input type="checkbox" value="採用について" v-model="form.topics" />
            採用について
          </label>
          <label class="contact-form-check">
            <input type="checkbox" value="その他" v-model="form.topics" />
            その他
          </label>
        </div>
      </div>

      <Line class="contact-form-line" />

      <label class="contact-form-label contact-form-label--required"
        >詳細</label
      >
      <div>
        <textarea
          v-model.trim="form.details"
          class="contact-form-textarea contact-form-textarea--lg"
          rows="8"
          :aria-invalid="!valid.details && touched.details"
          @blur="touched.details = true"
        ></textarea>
        <p v-if="!valid.details && touched.details" class="contact-form-error">
          必須項目です。
        </p>
      </div>

      <Line class="contact-form-line" />

      <div class="contact-form-policy">{{ privacyPoliciesText }}</div>

      <div class="contact-form-after">
        <label class="contact-form-check contact-form-agree">
          <input
            type="checkbox"
            v-model="form.agree"
            @blur="touched.agree = true"
          />
          個人情報保護方針に同意する
        </label>
        <p v-if="!valid.agree && touched.agree" class="contact-form-error">
          送信には同意が必要です。
        </p>

        <AppButton
          type="submit"
          size="lg"
          class="contact-form-confirm"
          :disabled="!isValidAll"
          :loading="ui.submitting"
        >
          入力内容を確認
        </AppButton>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import Line from "@/components/common/Line.vue";
import AppButton from "@/components/common/AppButton.vue";
import { useZipcode } from "@/composables/useZipcode";
import { useContactStore } from "@/stores/contact";
import type { FormData, Step } from "@/types/contact";

type Emit = (event: "step-change", step: Step) => void;
const emit = defineEmits<Emit>();

const privacyPoliciesText = await $fetch("/privacyPolicies.txt");

const store = useContactStore();
const { formState, setFormData } = store;

const form = reactive<FormData>({
  company: formState.company,
  name: formState.name,
  email: formState.email,
  zip: formState.zip,
  address: formState.address,
  tel: formState.tel,
  topics: [...formState.topics],
  details: formState.details,
  agree: formState.agree,
});

const touched = reactive({
  name: false,
  email: false,
  zip: false,
  address: false,
  tel: false,
  details: false,
  agree: false,
});

const valid = reactive({
  get name() {
    return form.name.trim().length > 0;
  },
  get email() {
    const p = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return p.test(form.email.trim());
  },
  get zip() {
    return /^\d{7}$/.test(form.zip.trim());
  },
  get address() {
    return form.address.trim().length > 0;
  },
  get tel() {
    const d = form.tel.replace(/\D/g, "");
    return /^[0-9\-]+$/.test(form.tel.trim()) && d.length >= 9;
  },
  get details() {
    return form.details.trim().length > 0;
  },
  get agree() {
    return form.agree === true;
  },
});

const isValidAll = computed(
  () =>
    valid.name &&
    valid.email &&
    valid.zip &&
    valid.address &&
    valid.tel &&
    valid.details &&
    valid.agree
);

const ui = reactive({ zipLoading: false, submitting: false });

const onZipSearch = async () => {
  try {
    ui.zipLoading = true;
    // TODO: 郵便番号検索APIに置き換える
    await new Promise((resolve) => setTimeout(resolve, 500));
    const result = "東京都千代田区丸の内１丁目";
    form.address = result;
  } finally {
    ui.zipLoading = false;
  }
};

const onSubmit = async () => {
  Object.keys(touched).forEach((k) => ((touched as any)[k] = true));
  if (!isValidAll.value) return;
  try {
    ui.submitting = true;
    setFormData({ ...form, topics: [...form.topics] });
    emit("step-change", "02");
  } finally {
    ui.submitting = false;
  }
};
</script>

<style scoped lang="scss">
.contact-form {
  width: 80%;
  margin: 0 auto;
  padding: 24px 8px 40px;
}
.contact-form-note {
  text-align: center;
  margin: 64px 0 56px;
  font-size: 16px;
}
.contact-form-stack {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  justify-items: center;
}
.contact-form-stack > * {
  width: 100%;
}
.contact-form-line:deep(.line),
.contact-form-stack > :deep(.line) {
  width: 100%;
}
.contact-form-label {
  font-size: 16px;
  font-weight: 600;
}
.contact-form-label--required::after {
  content: "*";
  color: #d00;
  margin-left: 4px;
}
.contact-form-input,
.contact-form-textarea {
  width: 100%;
  padding: 10px 12px;
  box-sizing: border-box;
  border: 1px solid #898989;
  font-size: 16px;
}
.contact-form-input:focus,
.contact-form-textarea:focus {
  outline: none;
  border-color: #4c9ffe;
  box-shadow: 0 0 0 3px rgba(76, 159, 254, 0.15);
}
.contact-form-textarea--lg {
  min-height: 180px;
}
.contact-form-zip {
  display: grid;
  grid-template-columns: 20% auto;
  gap: 8px;
  align-items: center;
}
.contact-form-topics-row {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 24px;
  align-items: start;
}
.contact-form-topics {
  display: grid;
  row-gap: 8px;
}
.contact-form-check {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.contact-form-agree {
  justify-content: center;
  margin-top: 16px;
}
.contact-form-policy {
  border: 1px solid #898989;
  padding: 14px;
  font-size: 14px;
  width: 70%;
  height: 320px;
  white-space: pre-wrap;
  overflow-y: auto;
}
.contact-form-after {
  display: grid;
  place-items: center;
  gap: 12px;
  margin-top: 8px;
  text-align: center;
}
.contact-form-help {
  margin: 6px 0 0;
  font-size: 12px;
  color: #000;
}
.contact-form-error {
  margin: 6px 0 0;
  font-size: 12px;
  color: #d00;
}

.contact-form-zip-btn {
  width: 15%;
  font-size: 16px;
  padding: 6px 14px;
}
.contact-form-confirm {
  width: 50%;
  font-size: 30px;
  padding: 12px 20px;
  margin: 16px 0;
}
</style>
