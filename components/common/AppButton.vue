<template>
  <button
    :type="type"
    class="btn"
    :class="classes"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <span class="btn-inner">
      <span v-if="loading" class="btn-spinner" aria-hidden="true" />
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
type Props = {
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  size: "md",
  disabled: false,
  loading: false,
});

defineEmits<{ (e: "click", ev: MouseEvent): void }>();

const classes = computed(() => [
  `btn-${props.size}`,
  { "is-loading": props.loading },
]);
</script>

<style scoped>
.btn {
  appearance: none;
  border: 1px solid #023482;
  background: #023482;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  padding: 10px 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
}
.btn:hover {
  filter: brightness(0.98);
}
.btn:disabled,
.is-loading {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-sm {
  font-size: 16px;
  padding: 6px 14px;
}
.btn-md {
  font-size: 16px;
  padding: 10px 18px;
}
.btn-lg {
  font-size: 30px;
  padding: 12px 20px;
}

.btn-inner {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.btn-spinner {
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 2px solid currentColor;
  border-right-color: transparent;
  animation: btn-spin 0.8s linear infinite;
}
@keyframes btn-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
