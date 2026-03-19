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

    <!-- Under the hood — tabbed showcase -->
    <div class="mt-24 pt-20 border-t border-white/[0.06]">
      <div class="text-center mb-14">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-[var(--color-text-muted)] mb-5">
          Under the hood
        </div>
        <h3 class="text-[clamp(28px,3.5vw,40px)] font-bold text-white mb-3">
          Packed with power,<br />
          <span class="gradient-text">designed for speed</span>
        </h3>
        <p class="text-sm text-[var(--color-text-dim)] max-w-[440px] mx-auto leading-relaxed">Every detail crafted to keep you in the flow.</p>
      </div>

      <!-- Category tabs -->
      <div class="flex justify-center mb-10">
        <div class="inline-flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <button
            v-for="(cat, ci) in DETAIL_CATEGORIES"
            :key="cat.title"
            type="button"
            @click.prevent="setCategory(ci)"
            class="hood-tab"
            :class="activeCategory === ci ? 'hood-tab-active' : ''"
          >
            <span class="text-base">{{ cat.emoji }}</span>
            <span class="hidden sm:inline">{{ cat.title }}</span>
          </button>
        </div>
      </div>

      <!-- Active category content -->
      <div class="max-w-[900px] mx-auto">
        <div :key="activeCategory" class="hood-panel">
          <!-- Left: info -->
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-3 mb-2">
              <div
                class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                :style="{ background: `linear-gradient(135deg, ${activeCat.color}18, ${activeCat.color}06)`, boxShadow: `0 0 24px ${activeCat.color}10` }"
              >{{ activeCat.emoji }}</div>
              <div>
                <h4 class="text-xl font-bold text-white">{{ activeCat.title }}</h4>
                <p class="text-xs text-[var(--color-text-dim)]">{{ activeCat.desc }}</p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 mt-6">
              <div
                v-for="item in activeCat.items"
                :key="item"
                class="hood-feature-row"
              >
                <div class="hood-dot" :style="{ background: activeCat.color }" />
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Right: visual -->
          <div class="hood-visual" :style="{ borderColor: activeCat.color + '20' }">
            <div class="hood-visual-inner" :style="{ background: `radial-gradient(circle at 50% 40%, ${activeCat.color}12, transparent 70%)` }">
              <div class="text-5xl mb-3">{{ activeCat.emoji }}</div>
              <div class="text-sm font-semibold text-white">{{ activeCat.items.length }}</div>
              <div class="text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest">features</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats strip -->
      <div class="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[700px] mx-auto">
        <div v-for="stat in HOOD_STATS" :key="stat.label" class="hood-stat">
          <div class="text-2xl font-extrabold text-white">{{ stat.value }}</div>
          <div class="text-[11px] text-[var(--color-text-dim)] mt-0.5">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { FEATURES } from '~/config/landing'
import FeatureIcon from './FeatureIcon.vue'

const activeCategory = ref(0)

const activeCat = computed(() => DETAIL_CATEGORIES[activeCategory.value])

function setCategory(index: number) {
  activeCategory.value = index
}

const HOOD_STATS = [
  { value: '36+', label: 'Features' },
  { value: '36', label: 'Keyboard shortcuts' },
  { value: '4', label: 'Database engines' },
  { value: '6', label: 'Export formats' },
]

const DETAIL_CATEGORIES = [
  {
    title: 'SQL Editor',
    emoji: '✏️',
    color: '#60a5fa',
    desc: 'A full IDE-grade editor right in your database client',
    items: [
      'CodeMirror 6 with syntax highlighting',
      'Schema-aware autocomplete',
      'Multi-statement execution with tabs',
      'SQL formatter (Cmd+Shift+F)',
      'EXPLAIN query visualizer',
      'Saved queries & query history',
      'Query snippets per engine',
      'Editor auto-save to localStorage',
    ],
  },
  {
    title: 'Data Grid',
    emoji: '📊',
    color: '#4ec9b0',
    desc: 'Spreadsheet-like editing for your database',
    items: [
      'Virtual scrolling — millions of rows',
      'Click-to-edit inline cells',
      'Column sort, resize & reorder',
      'Sticky first column',
      'Multi-row select & drag-to-select',
      'Server-side pagination',
      'Search with match highlighting',
      'Cmd+C copy / Cmd+V paste rows',
    ],
  },
  {
    title: 'Database Tools',
    emoji: '🛠️',
    color: '#e6922e',
    desc: 'Everything you need to manage your database',
    items: [
      'Foreign key viewer & navigation',
      'Table structure inspector',
      'Column statistics on right-click',
      'Row comparison (select 2 rows)',
      'Create / duplicate / drop tables',
      'Backup & restore (.sql)',
      'Slow query warning with EXPLAIN',
      'Copy WHERE clause from any row',
    ],
  },
  {
    title: 'Import & Export',
    emoji: '📦',
    color: '#c586c0',
    desc: 'Move data in and out effortlessly',
    items: [
      'Export as CSV, JSON or SQL',
      'Import from CSV with column mapping',
      'Copy rows as PHP, Python, Go, Ruby, YAML',
      'Copy CREATE TABLE statements',
      'Export full table via right-click',
      'Connection import/export',
    ],
  },
  {
    title: 'Connections',
    emoji: '🔌',
    color: '#0078d4',
    desc: 'Connect securely to any database, anywhere',
    items: [
      'Multi-connection tabs',
      'Multi-database sidebar',
      'SSH tunnel (password + key)',
      'SSL/TLS with custom certificates',
      'OS keychain credentials',
      'Connection grouping with drag-drop',
      'Connection color coding',
      'Session restore on restart',
    ],
  },
  {
    title: 'Experience',
    emoji: '✨',
    color: '#f44747',
    desc: 'Polished to the last pixel',
    items: [
      '36 keyboard shortcuts',
      'Command palette (Cmd+P)',
      'Dark & light themes',
      'Pin favorite tables to top',
      'Auto-update with progress',
      'First-run onboarding',
      'OS notifications for long queries',
      'Reconnect on connection drop',
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

/* Hood tabs */
.hood-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-muted);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.hood-tab:hover {
  color: white;
  background: rgba(255, 255, 255, 0.05);
}
.hood-tab-active {
  color: white;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Hood panel */
.hood-panel {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  padding: 32px;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  animation: hood-fade-in 0.3s ease;
}
@media (max-width: 767px) {
  .hood-panel {
    flex-direction: column;
    padding: 24px;
    gap: 24px;
  }
}

@keyframes hood-fade-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Feature row */
.hood-feature-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-size: 13px;
  color: var(--color-text-muted);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}
.hood-feature-row:last-child {
  border-bottom: none;
}

.hood-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  opacity: 0.6;
}

/* Visual block */
.hood-visual {
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
@media (max-width: 767px) {
  .hood-visual { display: none; }
}

.hood-visual-inner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Stats strip */
.hood-stat {
  text-align: center;
  padding: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  transition: border-color 0.2s;
}
.hood-stat:hover {
  border-color: rgba(255, 255, 255, 0.1);
}
</style>
