<template>
  <section class="max-w-[1100px] mx-auto px-6 pt-24 pb-20 text-center" id="hero">
    <!-- Beta Badge -->
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-sm text-[#4da6e8] mb-6">
      <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]" />
      {{ $t('hero.badge') }}
    </div>

    <!-- Headline -->
    <h1 class="text-[clamp(36px,5vw,56px)] font-bold leading-[1.1] tracking-tight text-white mb-5">
      {{ $t('hero.headline1') }}<br />
      <span class="gradient-text">{{ $t('hero.headline2') }}</span>
    </h1>

    <!-- Subtitle -->
    <p class="text-lg text-[var(--color-text-muted)] max-w-[560px] mx-auto mb-9 leading-relaxed">
      {{ $t('hero.subtitle') }}
    </p>

    <!-- CTA Button -->
    <div class="flex gap-3 justify-center flex-wrap">
      <a
        href="#download"
        class="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[var(--color-accent)] to-[#0090e0] text-white rounded-xl text-[15px] font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[var(--color-accent)]/20 no-underline"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
        {{ $t('hero.cta') }}
      </a>
    </div>

    <!-- Engine Badges -->
    <div class="flex justify-center gap-3 mt-12 flex-wrap">
      <EngineBadge
        v-for="engine in ENGINES"
        :key="engine.abbr"
        v-bind="engine"
      />
    </div>

    <!-- Mock Window -->
    <MockWindow class="mt-16" />
  </section>
</template>

<script setup lang="ts">
import { ENGINES } from '~/config/landing'
import EngineBadge from '~/components/ui/EngineBadge.vue'
import MockWindow from '~/components/landing/MockWindow.vue'

const localePath = useLocalePath()
</script>
