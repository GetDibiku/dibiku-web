<template>
  <section class="max-w-[1100px] mx-auto px-6 pt-28 pb-24" id="features">
    <!-- Section header -->
    <div class="text-center mb-20">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-[var(--color-text-muted)] mb-5">
        Why Dibiku
      </div>
      <h2 class="text-[clamp(32px,4vw,48px)] font-bold text-white mb-4 leading-tight">
        Everything you need,<br />
        <span class="gradient-text">nothing you don't</span>
      </h2>
      <p class="text-[var(--color-text-muted)] text-base max-w-[500px] mx-auto leading-relaxed">
        No bloat. No waiting around. A fast, native app that launches instantly and stays out of your way.
      </p>
    </div>

    <!-- Hero feature (first one, full width) -->
    <div
      ref="heroCard"
      class="group relative mb-5 rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
    >
      <!-- Gradient background glow -->
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        :style="{ background: `radial-gradient(ellipse at 30% 50%, ${FEATURES[0].gradient[0]}15, transparent 60%)` }"
      />

      <div class="relative flex flex-col md:flex-row items-center gap-8 p-10 md:p-14">
        <!-- Left: Icon + Text -->
        <div class="flex-1">
          <!-- Icon -->
          <div
            class="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
            :style="{ background: `linear-gradient(135deg, ${FEATURES[0].gradient[0]}20, ${FEATURES[0].gradient[1]}10)` }"
          >
            <FeatureIcon :name="FEATURES[0].icon" :color="FEATURES[0].gradient[0]" :size="26" />
          </div>

          <h3 class="text-2xl font-bold text-white mb-3">{{ FEATURES[0].title }}</h3>
          <p class="text-[var(--color-text-muted)] text-base leading-relaxed max-w-[400px]">
            {{ FEATURES[0].desc }}
          </p>
        </div>

        <!-- Right: Big stat -->
        <div class="text-center md:text-right shrink-0">
          <div
            class="text-[72px] font-extrabold leading-none tracking-tighter"
            :style="{ background: `linear-gradient(135deg, ${FEATURES[0].gradient[0]}, ${FEATURES[0].gradient[1]})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }"
          >
            {{ FEATURES[0].stat }}
          </div>
          <div class="text-sm text-[var(--color-text-dim)] mt-2">{{ FEATURES[0].statLabel }}</div>
        </div>
      </div>
    </div>

    <!-- Grid: remaining features (2 cols on md, 3 cols on lg) -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <div
        v-for="(feature, i) in FEATURES.slice(1)"
        :key="feature.title"
        class="feature-card group relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 p-8"
      >
        <!-- Gradient glow on hover -->
        <div
          class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          :style="{ background: `radial-gradient(ellipse at 20% 0%, ${feature.gradient[0]}12, transparent 55%)` }"
        />

        <div class="relative">
          <!-- Icon -->
          <div
            class="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
            :style="{ background: `linear-gradient(135deg, ${feature.gradient[0]}20, ${feature.gradient[1]}10)` }"
          >
            <FeatureIcon :name="feature.icon" :color="feature.gradient[0]" :size="20" />
          </div>

          <!-- Stat pill -->
          <div class="flex items-baseline gap-1.5 mb-4">
            <span
              class="text-[28px] font-extrabold leading-none tracking-tight"
              :style="{ color: feature.gradient[0] }"
            >{{ feature.stat }}</span>
            <span class="text-xs text-[var(--color-text-dim)]">{{ feature.statLabel }}</span>
          </div>

          <h3 class="text-lg font-semibold text-white mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-[var(--color-text-muted)] leading-relaxed">{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FEATURES } from '~/config/landing'
import FeatureIcon from './FeatureIcon.vue'
</script>

<style scoped>
.feature-card {
  background: rgba(255, 255, 255, 0.015);
}
.feature-card:hover {
  background: rgba(255, 255, 255, 0.03);
  transform: translateY(-2px);
}
</style>
