<template>
  <nav class="nav-root" :class="{ 'nav-scrolled': scrolled }">
    <div class="max-w-[1100px] mx-auto px-6 flex items-center justify-between" :style="{ height: scrolled ? '56px' : '64px', transition: 'height 0.3s' }">
      <!-- Logo -->
      <NuxtLink to="/" class="nav-logo">
        <div class="nav-logo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round">
            <ellipse cx="12" cy="6" rx="8" ry="3" />
            <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
            <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
          </svg>
        </div>
        <span class="nav-logo-text">Dibiku</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <div class="hidden lg:flex items-center">
        <!-- Nav pill container -->
        <div class="nav-pill-group">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="nav-pill"
            :class="{ 'nav-pill-active': isActive(link.to) }"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- CTA -->
        <NuxtLink to="/download" class="nav-cta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          Download
        </NuxtLink>
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
          :to="link.to"
          @click="mobileOpen = false"
          class="nav-mobile-link"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/download" @click="mobileOpen = false" class="nav-mobile-cta">
          Download
        </NuxtLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { label: 'Features', to: '/features' },
  { label: 'Compare', to: '/compare' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Changelog', to: '/changelog' },
  { label: 'Shortcuts', to: '/shortcuts' },
]

function isActive(path: string) {
  return route.path === path
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
  border-radius: 10px;
  background: linear-gradient(135deg, #0078d4, #00b4d8);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 120, 212, 0.25);
  transition: transform 0.2s, box-shadow 0.2s;
}
.nav-logo:hover .nav-logo-icon {
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgba(0, 120, 212, 0.35);
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
  margin-right: 14px;
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
