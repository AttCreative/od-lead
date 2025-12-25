<template>
  <div class="contact-step-indicator">
    <nav class="contact-step-indicator-stepper" aria-label="Progress Steps">
      <ol class="contact-step-indicator-steps" role="list">
        <li
          v-for="(label, idx) in labels"
          :key="idx"
          class="contact-step-indicator-step"
          :class="[
            idx === labels.length - 1 ? 'is-last' : '',
            currentIndex === idx ? 'is-active' : 'is-inactive',
          ]"
          :aria-current="currentIndex === idx ? 'step' : undefined"
        >
          <span class="contact-step-indicator-step-inner">
            <span class="contact-step-indicator-step-num">{{ nums[idx] }}</span>
            <span class="contact-step-indicator-step-label">{{ label }}</span>
          </span>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Step } from "@/types/contact";

type Props = { step: Step };
const props = defineProps<Props>();

const labels = ["お客様情報入力", "内容確認", "完了"];
const nums = labels.map((_, i) => String(i + 1).padStart(2, "0"));

const currentIndex = computed(() => {
  const n = parseInt(props.step, 10);
  if (Number.isNaN(n)) return 0;
  return Math.min(Math.max(n - 1, 0), labels.length - 1);
});
</script>

<style scoped lang="scss">
.contact-step-indicator {
  width: 80%;
  margin: 80px auto 0;
  display: flex;
  justify-content: center;
}

.contact-step-indicator-stepper {
  width: 100%;
}

.contact-step-indicator-steps {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  min-height: 82px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.contact-step-indicator-step {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  clip-path: polygon(
    0% 0%,
    calc(100% - 18px) 0%,
    100% 50%,
    calc(100% - 18px) 100%,
    0% 100%,
    18px 50%
  );
}

.contact-step-indicator-step.is-last {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 18px 50%);
}

.contact-step-indicator-step-inner {
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
}

.contact-step-indicator-step.is-active {
  background: #023482;
  color: #fff;
}
.contact-step-indicator-step.is-inactive {
  background: #dfdfdf;
  color: #050505;
}
.contact-step-indicator-step.is-inactive .contact-step-indicator-step-num {
  color: #606060;
}
.contact-step-indicator-step.is-inactive .contact-step-indicator-step-label {
  color: #050505;
}

.contact-step-indicator-step-num {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.03em;
}
.contact-step-indicator-step-label {
  font-size: 24px;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .contact-step-indicator {
    width: 90%;
    margin: 60px auto 0;
  }

  .contact-step-indicator-steps {
    min-height: 68px;
  }

  .contact-step-indicator-step-inner {
    gap: 6px;
  }

  .contact-step-indicator-step-num {
    font-size: 20px;
  }

  .contact-step-indicator-step-label {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .contact-step-indicator {
    width: 100%;
    margin: 40px auto 0;
  }

  .contact-step-indicator-steps {
    min-height: 56px;
  }

  .contact-step-indicator-step-inner {
    gap: 4px;
    display: flex;
    flex-direction: column;
    width: 70px;
  }

  .contact-step-indicator-step-num {
    font-size: 12px;
  }

  .contact-step-indicator-step-label {
    font-size: 10px;
  }
}
</style>
