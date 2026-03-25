<template>
  <nav class="nav-root" :class="{ 'nav-scrolled': scrolled }">
    <div class="max-w-[1100px] mx-auto px-6 flex items-center justify-between" :style="{ height: scrolled ? '56px' : '64px', transition: 'height 0.3s' }">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="nav-logo">
        <img src="/logo-icon.png" alt="" role="presentation" class="nav-logo-icon" />
        <span class="nav-logo-text">Dibiku</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <div class="hidden lg:flex items-center">
        <!-- Nav pill container -->
        <div class="nav-pill-group">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="localePath(link.to)"
            class="nav-pill"
            :class="{ 'nav-pill-active': isActive(link.to) }"
          >
            {{ $t(link.labelKey) }}
          </NuxtLink>
        </div>

        <!-- CTA -->
        <NuxtLink :to="localePath('/download')" class="nav-cta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          {{ $t('nav.download') }}
        </NuxtLink>

        <!-- Language dropdown -->
        <div class="relative ml-2">
          <button @click="langOpen = !langOpen" class="nav-lang-btn" title="Language" aria-label="Switch language">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </button>
          <Transition name="dropdown">
            <div v-if="langOpen" class="nav-lang-dropdown" @mouseleave="langOpen = false">
              <button
                v-for="lang in availableLocales"
                :key="lang.code"
                @click="setLocale(lang.code); langOpen = false"
                class="nav-lang-option"
                :class="{ 'nav-lang-active': locale === lang.code }"
              >
                <span>{{ lang.flag }}</span>
                <span>{{ lang.label }}</span>
              </button>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Mobile menu button -->
      <button @click="mobileOpen = !mobileOpen" class="lg:hidden nav-mobile-btn">
        <svg v-if="!mobileOpen" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 8h16M4 16h16"/></svg>
        <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="lg:hidden nav-mobile">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="localePath(link.to)"
          @click="mobileOpen = false"
          class="nav-mobile-link"
        >
          {{ $t(link.labelKey) }}
        </NuxtLink>
        <button
          v-for="lang in availableLocales.filter(l => l.code !== locale)"
          :key="lang.code"
          @click="setLocale(lang.code); mobileOpen = false"
          class="nav-mobile-link"
          style="text-align: left; width: 100%; border: none; background: none; cursor: pointer; font-size: 14px; color: var(--color-text-muted)"
        >
          {{ lang.flag }} {{ lang.label }}
        </button>
        <NuxtLink :to="localePath('/download')" @click="mobileOpen = false" class="nav-mobile-cta">
          {{ $t('nav.download') }}
        </NuxtLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const mobileOpen = ref(false)
const scrolled = ref(false)
const langOpen = ref(false)

const navLinks = [
  { labelKey: 'nav.features', to: '/features' },
  { labelKey: 'nav.compare', to: '/compare' },
  { labelKey: 'nav.pricing', to: '/pricing' },
  { labelKey: 'nav.shortcuts', to: '/shortcuts' },
  { labelKey: 'nav.about', to: '/about' },
]

const availableLocales = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
]

function isActive(path: string) {
  const currentPath = route.path.replace(/^\/id/, '') || '/'
  return currentPath === path
}

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 20 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.nav-root {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  background: rgba(10, 10, 11, 0.65);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-scrolled {
  background: rgba(10, 10, 11, 0.88);
  border-bottom-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.2);
}

/* Logo */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.nav-logo-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  object-fit: contain;
  transition: transform 0.2s;
}
.nav-logo:hover .nav-logo-icon {
  transform: scale(1.05);
}

.nav-logo-text {
  font-size: 17px;
  font-weight: 700;
  color: white;
  letter-spacing: -0.3px;
}

/* Pill nav group */
.nav-pill-group {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  margin-right: 10px;
}

.nav-pill {
  padding: 6px 14px;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: all 0.2s;
  white-space: nowrap;
  position: relative;
}

.nav-pill:hover {
  color: white;
  background: rgba(255, 255, 255, 0.06);
}

.nav-pill-active {
  color: white;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

/* Language dropdown */
.nav-lang-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.03);
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all 0.15s;
}
.nav-lang-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border-color: rgba(255, 255, 255, 0.12);
}
.nav-lang-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 170px;
  background: rgba(30, 30, 32, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 4px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(16px);
  z-index: 100;
}
.nav-lang-option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-radius: 7px;
  background: none;
  color: var(--color-text-muted);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.12s;
}
.nav-lang-option:hover {
  background: rgba(255, 255, 255, 0.06);
  color: white;
}
.nav-lang-active {
  color: white;
  background: rgba(255, 255, 255, 0.04);
}

/* Dropdown transition */
.dropdown-enter-active { transition: all 0.15s ease; }
.dropdown-leave-active { transition: all 0.1s ease; }
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.97);
}

/* CTA button */
.nav-cta {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 18px;
  background: linear-gradient(135deg, #0078d4, #0095e8);
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 2px 10px rgba(0, 120, 212, 0.2);
}
.nav-cta:hover {
  box-shadow: 0 4px 18px rgba(0, 120, 212, 0.35);
  transform: translateY(-1px);
}

/* Mobile */
.nav-mobile-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.03);
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all 0.15s;
}
.nav-mobile-btn:hover {
  background: rgba(255, 255, 255, 0.06);
  color: white;
}

.nav-mobile {
  padding: 12px 20px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nav-mobile-link {
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 14px;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: all 0.15s;
}
.nav-mobile-link:hover {
  background: rgba(255, 255, 255, 0.04);
  color: white;
}

.nav-mobile-cta {
  margin-top: 8px;
  padding: 12px;
  background: linear-gradient(135deg, #0078d4, #0095e8);
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  text-align: center;
  text-decoration: none;
}

/* Mobile menu transition */
.mobile-menu-enter-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-menu-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
