<template>
  <div class="header">
    <div class="header-left">
      <NuxtLink to="/" class="logo-link" aria-label="トップへ">
        <img src="/images/common/company-logo.svg" />
      </NuxtLink>
    </div>

    <nav class="header-nav" aria-label="サイト内メニュー">
      <NuxtLink :to="toHash('about')" class="nav-item nav-link">
        <span class="nav-label">会社案内</span>
      </NuxtLink>

      <NuxtLink :to="toHash('overview')" class="nav-item nav-link">
        <span class="nav-label">事業内容</span>
      </NuxtLink>

      <NuxtLink to="/recruit" class="nav-item nav-link">
        <span class="nav-label">採用情報</span>
      </NuxtLink>

      <NuxtLink to="/contact" class="nav-item nav-link">
        <span class="nav-label">お問い合わせ</span>
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const toHash = (id: string) => {
  const hash = `#${id}`;
  return route.path === "/" ? { hash } : { path: "/", hash };
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  padding-top: 20px;
  display: flex;
  font-weight: 600;
  margin-left: auto;
  margin-right: auto;
}
.header-left {
  display: flex;
  width: 50%;
  padding-left: 3%;
  align-items: center;
}
.header-nav {
  display: flex;
  width: 50%;
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
  transition: transform 160ms ease, filter 160ms ease;
  cursor: pointer;
}
.logo-link:hover img,
.logo-link:focus-visible img {
  transform: translateY(-1px) scale(1.02);
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15));
}

.nav-item {
  width: 25%;
  text-align: left;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  height: 44px;
  gap: 8px;
  color: inherit;
  text-decoration: none;
  outline: none;
  position: relative;
  cursor: pointer;
}
.nav-label {
  position: relative;
  display: inline-block;
  line-height: 1;
}
.nav-label::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 2px;
  background: currentColor;
  width: 0;
  opacity: 0.9;
  transition: width 160ms ease;
}
.nav-link:hover .nav-label::after,
.nav-link:focus-visible .nav-label::after {
  width: 100%;
}
.nav-link:focus-visible {
  outline: 3px solid rgba(2, 52, 130, 0.4);
  outline-offset: 3px;
  border-radius: 6px;
}
</style>
