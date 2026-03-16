<template>
  <section class="max-w-[1100px] mx-auto px-6 pt-20 pb-24" id="pricing">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-white mb-3">Simple, honest pricing</h2>
      <p class="text-[var(--color-text-dim)] text-base">Free forever for personal use. Upgrade only when you need more.</p>
    </div>

    <div class="grid md:grid-cols-2 gap-5 max-w-[700px] mx-auto">
      <div
        v-for="plan in PRICING"
        :key="plan.name"
        class="p-9 rounded-2xl relative overflow-hidden"
        :class="plan.highlight
          ? 'bg-[var(--color-accent)]/[0.06] border border-[var(--color-border-hover)]'
          : 'bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)]'"
      >
        <!-- Popular ribbon -->
        <div
          v-if="plan.highlight"
          class="absolute top-4 -right-7 bg-[var(--color-accent)] text-white text-[10px] font-semibold px-8 py-1 rotate-45 uppercase"
        >
          Popular
        </div>

        <!-- Plan name -->
        <div
          class="text-sm font-semibold mb-3"
          :class="plan.highlight ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'"
        >
          {{ plan.name }}
        </div>

        <!-- Price -->
        <div class="flex items-baseline gap-1 mb-2">
          <span class="text-[42px] font-bold text-white">{{ plan.price }}</span>
          <span class="text-sm text-[var(--color-text-dim)]">{{ plan.period }}</span>
        </div>

        <p class="text-sm text-[var(--color-text-dim)] mb-6 leading-relaxed">{{ plan.desc }}</p>

        <!-- Features -->
        <ul class="space-y-2.5 mb-8">
          <li
            v-for="feature in plan.features"
            :key="feature"
            class="flex items-center gap-2.5 text-sm text-[#ccc]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" :stroke="plan.highlight ? 'var(--color-accent)' : 'var(--color-success)'" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
            {{ feature }}
          </li>
        </ul>

        <!-- CTA -->
        <button
          class="w-full py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer"
          :class="plan.highlight
            ? 'bg-gradient-to-r from-[var(--color-accent)] to-[#0090e0] text-white hover:opacity-90 shadow-lg shadow-[var(--color-accent)]/20'
            : 'bg-white/[0.06] text-[#ccc] border border-white/10 hover:bg-white/[0.1]'"
        >
          {{ plan.cta }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PRICING } from '~/config/landing'
</script>
