<template>
  <section class="max-w-[1100px] mx-auto px-6 pt-24 pb-20 text-center" id="hero">
    <!-- Beta Badge -->
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-sm text-[var(--color-accent)] mb-6">
      <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]" />
      Now in public beta
    </div>

    <!-- Headline -->
    <h1 class="text-[clamp(36px,5vw,56px)] font-bold leading-[1.1] tracking-tight text-white mb-5">
      Your database,<br />
      <span class="gradient-text">without the bloat</span>
    </h1>

    <!-- Subtitle -->
    <p class="text-lg text-[var(--color-text-muted)] max-w-[560px] mx-auto mb-9 leading-relaxed">
      A lightning-fast desktop client with multi-tab SQL editor, built-in SSH terminal & tunnels, virtual scrolling data grid, and 30+ keyboard shortcuts. MySQL, PostgreSQL, SQLite, and Redis — all in one app.
    </p>

    <!-- CTA Button -->
    <div class="flex gap-3 justify-center flex-wrap">
      <a
        href="#download"
        class="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[var(--color-accent)] to-[#0090e0] text-white rounded-xl text-[15px] font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[var(--color-accent)]/20 no-underline"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
        Download for macOS
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
</script>
