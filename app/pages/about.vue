<template>
  <div class="min-h-screen">
    <Navbar />

    <div class="max-w-[700px] mx-auto px-6 pt-20 pb-24">
      <!-- Header -->
      <div class="mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-[var(--color-text-muted)] mb-5">
          {{ $t('about.badge') }}
        </div>
        <h1 class="text-[clamp(32px,4vw,44px)] font-bold text-white mb-4 leading-tight">
          {{ $t('about.headline1') }}<br />
          <span class="gradient-text">{{ $t('about.headline2') }}</span>
        </h1>
        <p class="text-[var(--color-text-muted)] text-base max-w-[520px] leading-relaxed">
          {{ $t('about.intro') }}
        </p>
      </div>

      <!-- Story -->
      <div class="about-section">
        <h2 class="about-heading">{{ $t('about.storyTitle') }}</h2>
        <p class="about-text">
          {{ $t('about.storyP1') }}
        </p>
        <p class="about-text">
          {{ $t('about.storyP2') }}
        </p>
      </div>

      <!-- Principles -->
      <div class="about-section">
        <h2 class="about-heading">{{ $t('about.principlesTitle') }}</h2>
        <div class="grid gap-4">
          <div class="about-card">
            <div class="about-card-icon" style="background: rgba(0, 120, 212, 0.12); color: #60a5fa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-white mb-1">{{ $t('about.speed') }}</h3>
              <p class="text-xs text-[var(--color-text-dim)] leading-relaxed">{{ $t('about.speedDesc') }}</p>
            </div>
          </div>
          <div class="about-card">
            <div class="about-card-icon" style="background: rgba(5, 150, 105, 0.12); color: #4ec9b0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="6" y2="8" stroke-width="3"/><line x1="10" y1="8" x2="10" y2="8" stroke-width="3"/><line x1="8" y1="16" x2="16" y2="16"/></svg>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-white mb-1">{{ $t('about.keyboardFirst') }}</h3>
              <p class="text-xs text-[var(--color-text-dim)] leading-relaxed">{{ $t('about.keyboardFirstDesc') }}</p>
            </div>
          </div>
          <div class="about-card">
            <div class="about-card-icon" style="background: rgba(217, 119, 6, 0.12); color: #fbbf24">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/></svg>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-white mb-1">{{ $t('about.noBloat') }}</h3>
              <p class="text-xs text-[var(--color-text-dim)] leading-relaxed">{{ $t('about.noBloatDesc') }}</p>
            </div>
          </div>
          <div class="about-card">
            <div class="about-card-icon" style="background: rgba(244, 71, 71, 0.12); color: #f87171">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-white mb-1">{{ $t('about.secure') }}</h3>
              <p class="text-xs text-[var(--color-text-dim)] leading-relaxed">{{ $t('about.secureDesc') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div class="about-section">
        <h2 class="about-heading">{{ $t('about.contactTitle') }}</h2>
        <p class="about-text mb-6">
          {{ $t('about.contactDesc') }}
        </p>
        <a
          href="mailto:maulanayusupp@gmail.com"
          class="about-contact-card group"
        >
          <div class="about-card-icon" style="background: rgba(0, 120, 212, 0.12); color: #60a5fa">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></svg>
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-semibold text-white mb-0.5">{{ $t('about.email') }}</div>
            <div class="text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors">maulanayusupp@gmail.com</div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-dim)" stroke-width="2" class="shrink-0 group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/landing/Navbar.vue'
import Footer from '~/components/landing/Footer.vue'

const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: computed(() => t('seo.aboutTitle')),
  meta: [
    { name: 'description', content: computed(() => t('seo.aboutDesc')) },
  ],
})
</script>

<style scoped>
.about-section {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.about-section:last-child {
  border-bottom: none;
}

.about-heading {
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
}

.about-text {
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.75;
  margin-bottom: 8px;
}
.about-text:last-child {
  margin-bottom: 0;
}

.about-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  transition: border-color 0.2s;
}
.about-card:hover {
  border-color: rgba(255, 255, 255, 0.1);
}

.about-card-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.about-contact-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}
.about-contact-card:hover {
  border-color: rgba(0, 120, 212, 0.3);
  background: rgba(0, 120, 212, 0.04);
}
</style>
