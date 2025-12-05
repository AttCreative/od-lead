<template>
  <header class="sp-header">
    <div class="sp-header-left">
      <NuxtLink to="/" class="logo-link" aria-label="トップへ">
        <img src="/images/common/company-logo.svg" alt="会社ロゴ画像" />
      </NuxtLink>
    </div>

    <div class="sp-header-right">
      <NuxtLink
        to="/contact"
        class="contact-button"
        aria-label="お問い合わせページへ"
      >
        お問い合わせ
      </NuxtLink>

      <button
        class="hamburger-button"
        type="button"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-label="メニューを開閉"
        @click="toggleMenu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <nav
      class="sp-header-nav"
      :class="{ 'is-open': isMenuOpen }"
      aria-label="サイト内メニュー"
    >
      <NuxtLink :to="toHash('about')" class="nav-link" @click="closeMenu">
        会社案内
      </NuxtLink>

      <NuxtLink :to="toHash('overview')" class="nav-link" @click="closeMenu">
        事業内容
      </NuxtLink>

      <NuxtLink to="/recruit" class="nav-link" @click="closeMenu">
        採用情報
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const isMenuOpen = ref(false);

const toHash = (id: string) => {
  const hash = `#${id}`;
  return route.path === "/" ? { hash } : { path: "/", hash };
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
  }
);
</script>

<style scoped lang="scss">
.sp-header {
  width: 100%;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  font-weight: 600;
  box-sizing: border-box;
  position: relative;
}

.sp-header-left {
  display: flex;
  align-items: center;
}

.logo-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  outline: none;
}
.logo-link img {
  display: block;
  max-height: 60px;
}

.sp-header-right {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  border-radius: 999px;
  background: #023482;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  border: 1px solid #023482;
  cursor: pointer;
  white-space: nowrap;
}

.hamburger-button {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
}

.hamburger-line {
  width: 32px;
  height: 4px;
  background: #333;
  margin: 4px 0;
  border-radius: 8px;
  transition: transform 160ms ease, opacity 160ms ease;
}

.sp-header-nav {
  position: absolute;
  top: 56px;
  right: 12px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 8px 0;
  display: none;
  flex-direction: column;
  min-width: 180px;
  z-index: 20;
  gap: 12px;
}

.sp-header-nav.is-open {
  display: flex;
}

.nav-link {
  padding: 10px 16px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
}

.nav-link:active {
  background: rgba(0, 0, 0, 0.04);
}
</style>
