<template>
  <section class="max-w-[1100px] mx-auto px-6 pt-24 pb-20" id="features">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-white mb-3">Built different</h2>
      <p class="text-[var(--color-text-dim)] text-base max-w-[480px] mx-auto">
        Not another Electron app. Dibiku is compiled Rust — native speed, tiny footprint, real security.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-5">
      <div
        v-for="feature in FEATURES"
        :key="feature.title"
        class="p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-hover)] hover:-translate-y-0.5 transition-all duration-200"
      >
        <div class="flex justify-between items-start mb-4">
          <span class="text-[28px]">{{ feature.icon }}</span>
          <div class="text-right">
            <div class="text-[28px] font-bold text-[var(--color-accent)]">{{ feature.stat }}</div>
            <div class="text-[11px] text-[var(--color-text-dim)]">{{ feature.statLabel }}</div>
          </div>
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">{{ feature.title }}</h3>
        <p class="text-sm text-[var(--color-text-muted)] leading-relaxed">{{ feature.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FEATURES } from '~/config/landing'
</script>
