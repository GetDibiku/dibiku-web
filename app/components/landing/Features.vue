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

    <!-- Under the hood — bento grid -->
    <div class="mt-24 pt-20 border-t border-white/[0.06]">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-[var(--color-text-muted)] mb-5">
          Under the hood
        </div>
        <h3 class="text-[clamp(28px,3.5vw,40px)] font-bold text-white mb-3">
          Packed with power,<br />
          <span class="gradient-text">designed for speed</span>
        </h3>
        <p class="text-sm text-[var(--color-text-dim)] max-w-[440px] mx-auto leading-relaxed">Every detail crafted to keep you in the flow. Here's what's inside.</p>
      </div>

      <!-- Bento grid -->
      <div class="bento-grid">
        <div
          v-for="(cat, ci) in DETAIL_CATEGORIES"
          :key="cat.title"
          class="bento-card group"
          :class="ci === 0 ? 'bento-wide' : ''"
        >
          <!-- Gradient accent line at top -->
          <div class="h-[2px] rounded-t-2xl" :style="{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}40)` }" />

          <div class="p-7">
            <!-- Header -->
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
                :style="{ background: `linear-gradient(135deg, ${cat.color}20, ${cat.color}08)` }"
              >
                {{ cat.emoji }}
              </div>
              <div>
                <h4 class="text-[15px] font-semibold text-white">{{ cat.title }}</h4>
                <p class="text-[11px] text-[var(--color-text-dim)]">{{ cat.items.length }} features</p>
              </div>
            </div>

            <!-- Items with staggered animation -->
            <div class="space-y-0">
              <div
                v-for="(item, ii) in cat.items"
                :key="item"
                class="bento-item flex items-center gap-3 py-2 border-b border-white/[0.03] last:border-0"
              >
                <svg class="w-3.5 h-3.5 shrink-0 transition-colors duration-200" :style="{ color: cat.color + '60' }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-[13px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text-body)] transition-colors duration-300">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Total count bar -->
      <div class="mt-10 flex justify-center">
        <div class="inline-flex items-center gap-6 px-8 py-3 rounded-full bg-white/[0.03] border border-white/[0.06]">
          <div class="text-center">
            <div class="text-lg font-bold text-white">36+</div>
            <div class="text-[10px] text-[var(--color-text-dim)] uppercase tracking-wider">Features</div>
          </div>
          <div class="w-px h-8 bg-white/[0.06]" />
          <div class="text-center">
            <div class="text-lg font-bold text-white">36</div>
            <div class="text-[10px] text-[var(--color-text-dim)] uppercase tracking-wider">Shortcuts</div>
          </div>
          <div class="w-px h-8 bg-white/[0.06]" />
          <div class="text-center">
            <div class="text-lg font-bold text-white">4</div>
            <div class="text-[10px] text-[var(--color-text-dim)] uppercase tracking-wider">Engines</div>
          </div>
          <div class="w-px h-8 bg-white/[0.06]" />
          <div class="text-center">
            <div class="text-lg font-bold text-white">6</div>
            <div class="text-[10px] text-[var(--color-text-dim)] uppercase tracking-wider">Export formats</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FEATURES } from '~/config/landing'
import FeatureIcon from './FeatureIcon.vue'

const DETAIL_CATEGORIES = [
  {
    title: 'SQL Editor',
    emoji: '✏️',
    color: '#60a5fa',
    items: [
      'CodeMirror 6 with syntax highlighting',
      'Schema-aware autocomplete',
      'Multi-statement execution with tabs',
      'SQL formatter (Cmd+Shift+F)',
      'EXPLAIN query visualizer',
      'Saved queries & history',
    ],
  },
  {
    title: 'Data Grid',
    emoji: '📊',
    color: '#4ec9b0',
    items: [
      'Virtual scrolling — millions of rows',
      'Click-to-edit inline cells',
      'Column sort, resize & reorder',
      'Multi-row select & batch delete',
      'Server-side pagination',
      'Search with match highlighting',
    ],
  },
  {
    title: 'Database Tools',
    emoji: '🛠️',
    color: '#e6922e',
    items: [
      'ERD / relationship diagrams',
      'Table structure inspector',
      'Slow query detection',
      'Fake data generator',
      'Create / duplicate / drop tables',
      'Backup & restore (.sql)',
    ],
  },
  {
    title: 'Import & Export',
    emoji: '📦',
    color: '#c586c0',
    items: [
      'Export as CSV, JSON or SQL',
      'Import from CSV with mapping',
      'Copy rows as PHP, Python, Go, etc.',
      'Copy CREATE TABLE statements',
      'Connection import/export (JSON)',
      'Connection string import',
    ],
  },
  {
    title: 'Connections',
    emoji: '🔌',
    color: '#0078d4',
    items: [
      'Multi-connection tabs',
      'Multi-database sidebar',
      'SSH tunnel (password + key)',
      'SSL/TLS with certificate files',
      'OS keychain credentials',
      'Connection grouping & colors',
    ],
  },
  {
    title: 'Experience',
    emoji: '✨',
    color: '#f44747',
    items: [
      '36 keyboard shortcuts',
      'Cmd+P command palette',
      'Dark & light themes',
      'Pin favorite tables',
      'Auto-update system',
      'Settings & preferences',
    ],
  },
]
</script>

<style scoped>
.feature-card {
  background: rgba(255, 255, 255, 0.015);
}
.feature-card:hover {
  background: rgba(255, 255, 255, 0.03);
  transform: translateY(-2px);
}

/* Bento grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media (max-width: 1023px) {
  .bento-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 639px) {
  .bento-grid { grid-template-columns: 1fr; }
}

.bento-wide {
  grid-column: span 2;
}
@media (max-width: 639px) {
  .bento-wide { grid-column: span 1; }
}

.bento-card {
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.bento-card:hover {
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.025);
  transform: translateY(-2px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
}

.bento-item {
  transition: all 0.2s ease;
}
.bento-card:hover .bento-item svg {
  color: currentColor !important;
  opacity: 1;
}
</style>
