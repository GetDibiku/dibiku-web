<template>
  <section class="max-w-[1100px] mx-auto px-6 pt-20 pb-20" id="compare">
    <div class="text-center mb-14">
      <h2 class="text-4xl font-bold text-white mb-3">Less is more</h2>
      <p class="text-[var(--color-text-dim)] text-base max-w-[480px] mx-auto">
        Most database clients are slow and heavy. Dibiku ships just what you need — nothing more.
      </p>
    </div>

    <!-- Metric Cards -->
    <div class="grid md:grid-cols-3 gap-5 mb-12">
      <div
        v-for="metric in METRICS"
        :key="metric.label"
        class="p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-center"
      >
        <div class="text-sm text-[var(--color-text-dim)] mb-4 uppercase tracking-wider font-medium">{{ metric.label }}</div>

        <!-- Bar visualization -->
        <div class="space-y-3 mb-6">
          <div v-for="bar in metric.bars" :key="bar.name" class="text-left">
            <div class="flex justify-between text-xs mb-1">
              <span :class="bar.highlight ? 'text-white font-semibold' : 'text-[var(--color-text-muted)]'">{{ bar.name }}</span>
              <span :class="bar.highlight ? 'text-[var(--color-success)]' : 'text-[var(--color-text-dim)]'">{{ bar.value }}</span>
            </div>
            <div class="h-2 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-700"
                :class="bar.highlight ? 'bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-success)]' : 'bg-white/[0.15]'"
                :style="{ width: bar.percent + '%' }"
              />
            </div>
          </div>
        </div>

        <div class="text-xs text-[var(--color-text-dim)]">{{ metric.note }}</div>
      </div>
    </div>

    <!-- Bottom tagline -->
    <div class="text-center">
      <p class="text-sm text-[var(--color-text-muted)]">
        Engineered to be <span class="text-[var(--color-accent)]">fast, light, and native</span> — no hidden bloat eating your resources.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const METRICS = [
  {
    label: 'App Size',
    note: 'Smaller app = faster install, less disk',
    bars: [
      { name: 'Dibiku', value: '~15 MB', percent: 5, highlight: true },
      { name: 'Typical alternatives', value: '~200 MB', percent: 45, highlight: false },
      { name: 'Heavy clients', value: '~500 MB', percent: 100, highlight: false },
    ],
  },
  {
    label: 'Memory Usage',
    note: 'Measured idle with one connection open',
    bars: [
      { name: 'Dibiku', value: '~80 MB', percent: 8, highlight: true },
      { name: 'Typical alternatives', value: '~300 MB', percent: 35, highlight: false },
      { name: 'Heavy clients', value: '~900 MB', percent: 100, highlight: false },
    ],
  },
  {
    label: 'Startup Time',
    note: 'Cold start to query-ready',
    bars: [
      { name: 'Dibiku', value: '< 2s', percent: 10, highlight: true },
      { name: 'Typical alternatives', value: '~5s', percent: 45, highlight: false },
      { name: 'Heavy clients', value: '~12s', percent: 100, highlight: false },
    ],
  },
] as const
</script>
