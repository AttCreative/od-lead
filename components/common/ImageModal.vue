<template>
  <div
    v-if="imageSrc"
    class="image-modal"
    role="dialog"
    aria-modal="true"
    @click.self="$emit('update:imageSrc', null)"
  >
    <button
      class="image-modal-close"
      type="button"
      @click="$emit('update:imageSrc', null)"
      aria-label="閉じる"
    >
      ×
    </button>

    <NuxtImg format="webp" :src="imageSrc" class="image-modal-image" alt="" />
  </div>
</template>

<script setup lang="ts">
type Props = {
  imageSrc: string | null;
};

type Emits = {
  (e: "update:imageSrc", v: string | null): void;
};

const props = defineProps<Props>();

defineEmits<Emits>();
</script>

<style scoped lang="scss">
.image-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.86);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.image-modal-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
}

.image-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 32px;
  line-height: 44px;
}
</style>
