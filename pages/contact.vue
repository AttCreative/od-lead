<template>
  <div class="contact-page">
    <PageHeader title="CONTACT US" subtitle="お問い合わせ" />

    <Breadcrumbs :items="[{ label: 'お問い合わせ' }]" />

    <div class="contact-page-hero">
      <img
        src="/images/contact/contact-us.svg"
        alt="お問い合わせ画像"
        class="contact-page-hero-img"
      />
    </div>

    <div class="contact-page-wrap">
      <StepIndicator :step="step" />
      <ContactFormInput v-if="step === '01'" @step-change="handleStepChange" />
      <ContactFormConfirm
        v-if="step === '02'"
        @step-change="handleStepChange"
      />
      <ContactFormComplete
        v-if="step === '03'"
        @step-change="handleStepChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useContactStore } from "@/stores/contact";
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import PageHeader from "@/components/common/PageHeader.vue";
import StepIndicator from "@/components/contact/StepIndicator.vue";
import ContactFormInput from "@/components/contact/ContactFormInput.vue";
import ContactFormConfirm from "@/components/contact/ContactFormConfirm.vue";
import ContactFormComplete from "@/components/contact/ContactFormComplete.vue";
import type { Step } from "@/types/contact";

usePageTitle("CONTACT US");

definePageMeta({ layout: "contact" });

const store = useContactStore();

const step = ref<Step>("01");

const handleStepChange = (newStep: Step) => {
  step.value = newStep;

  nextTick(() => {
    window.scrollTo({ top: 0 });
  });
};

onUnmounted(() => {
  step.value = "01";
  store.reset();
});
</script>

<style scoped>
.contact-page {
  width: 100%;
  margin: 0 auto;
}

.contact-page-hero {
  text-align: center;
  margin: 50px 0 90px;
}

.contact-page-hero-img {
  width: 90%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.contact-page-wrap {
  width: 80%;
  margin: 0 auto 80px;
}
</style>
