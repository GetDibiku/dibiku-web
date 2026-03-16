<template>
  <section
    ref="target"
    class="border-y border-white/[0.06] py-12 mt-20"
  >
    <div class="max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
      <div v-for="stat in STATS" :key="stat.label">
        <div class="text-4xl font-bold text-white tracking-tight">
          <AnimatedCounter
            :target="stat.value"
            :suffix="stat.suffix"
            :active="isVisible"
          />
        </div>
        <div class="text-sm text-[var(--color-text-dim)] mt-1">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { STATS } from '~/config/landing'
import AnimatedCounter from './AnimatedCounter.vue'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'

const { target, isVisible } = useIntersectionObserver(0.5)
</script>
