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
      A lightning-fast desktop client that starts in under 2 seconds. Connect to MySQL, PostgreSQL, SQLite, and Redis — no bloat, just speed.
    </p>

    <!-- CTA Buttons -->
    <div class="flex gap-3 justify-center flex-wrap">
      <a
        href="#download"
        class="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[var(--color-accent)] to-[#0090e0] text-white rounded-xl text-[15px] font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[var(--color-accent)]/20 no-underline"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
        Download for macOS
      </a>
      <a
        href="https://github.com/dibiku"
        target="_blank"
        class="inline-flex items-center gap-2 px-8 py-3.5 bg-white/[0.06] text-[#ccc] rounded-xl text-[15px] font-medium border border-white/10 hover:bg-white/[0.1] transition-colors no-underline"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        View on GitHub
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
