<template>
  <section class="max-w-[1100px] mx-auto px-6 pt-20 pb-20" id="compare">
    <div class="text-center mb-14">
      <h2 class="text-4xl font-bold text-white mb-3">{{ $t('comparison.headline') }}</h2>
      <p class="text-[var(--color-text-dim)] text-base max-w-[480px] mx-auto">
        {{ $t('comparison.subtitle') }}
      </p>
    </div>

    <!-- Metric Cards -->
    <div class="grid md:grid-cols-3 gap-5 mb-12">
      <div
        v-for="metric in metrics"
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
        {{ $t('comparison.taglineBefore') }} <span class="text-[var(--color-accent)]">{{ $t('comparison.fast') }}</span> {{ $t('comparison.taglineAfter') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const metrics = computed(() => [
  {
    label: t('comparison.memoryUsage'),
    note: t('comparison.memoryNote'),
    bars: [
      { name: t('comparison.dibiku'), value: '~80 MB', percent: 8, highlight: true },
      { name: t('comparison.typical'), value: '~300 MB', percent: 35, highlight: false },
      { name: t('comparison.heavy'), value: '~900 MB', percent: 100, highlight: false },
    ],
  },
  {
    label: t('comparison.startupTime'),
    note: t('comparison.startupNote'),
    bars: [
      { name: t('comparison.dibiku'), value: '< 2s', percent: 10, highlight: true },
      { name: t('comparison.typical'), value: '~5s', percent: 45, highlight: false },
      { name: t('comparison.heavy'), value: '~12s', percent: 100, highlight: false },
    ],
  },
  {
    label: t('comparison.scrollPerf'),
    note: t('comparison.scrollNote'),
    bars: [
      { name: t('comparison.dibiku'), value: '60 fps', percent: 100, highlight: true },
      { name: t('comparison.typical'), value: '~30 fps', percent: 50, highlight: false },
      { name: t('comparison.heavy'), value: '~15 fps', percent: 25, highlight: false },
    ],
  },
])
</script>
