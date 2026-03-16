<template>
  <section class="max-w-[1100px] mx-auto px-6 pt-20 pb-20" id="compare">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-white mb-3">How we compare</h2>
      <p class="text-[var(--color-text-dim)] text-base">Size matters. Speed matters. Your RAM matters.</p>
    </div>

    <div class="rounded-2xl overflow-hidden border border-[var(--color-border-subtle)]">
      <!-- Header -->
      <div class="grid grid-cols-5 bg-white/[0.03] px-6 py-3.5 text-xs text-[var(--color-text-dim)] font-semibold uppercase tracking-wider">
        <span>Client</span>
        <span>Price</span>
        <span>Size</span>
        <span>RAM</span>
        <span>Speed</span>
      </div>

      <!-- Rows -->
      <div
        v-for="item in COMPARISONS"
        :key="item.name"
        class="grid grid-cols-5 px-6 py-4 border-t border-white/[0.04] text-sm"
        :class="item.highlight ? 'bg-[var(--color-accent)]/[0.06]' : ''"
      >
        <span
          class="flex items-center gap-2"
          :class="item.highlight ? 'font-semibold text-white' : 'text-[#ccc]'"
        >
          <span v-if="item.highlight" class="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]" />
          {{ item.name }}
        </span>
        <span class="text-[var(--color-text-muted)]">{{ item.price }}</span>
        <span :class="item.highlight ? 'text-[var(--color-success)]' : 'text-[var(--color-text-muted)]'">{{ item.size }}</span>
        <span :class="item.highlight ? 'text-[var(--color-success)]' : 'text-[var(--color-text-muted)]'">{{ item.ram }}</span>
        <span :class="item.highlight ? 'text-[var(--color-success)]' : 'text-[var(--color-text-muted)]'">{{ item.speed }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { COMPARISONS } from '~/config/landing'
</script>
