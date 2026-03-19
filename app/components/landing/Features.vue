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

    <!-- Bento grid -->
    <div class="bento-grid">
      <!-- Hero card (spans 2 cols) -->
      <div class="bento-hero group" @mouseenter="hoverIdx = -1" @mouseleave="hoverIdx = null">
        <div class="bento-glow" :style="{ background: `radial-gradient(ellipse at 20% 40%, ${FEATURES[0].gradient[0]}18, transparent 65%)` }" />
        <div class="relative flex flex-col md:flex-row items-start gap-8 md:gap-12 p-8 md:p-10">
          <div class="flex-1 min-w-0">
            <div class="bento-icon" :style="iconBg(FEATURES[0])">
              <FeatureIcon :name="FEATURES[0].icon" :color="FEATURES[0].gradient[0]" :size="24" />
            </div>
            <h3 class="text-[22px] font-bold text-white mb-2 mt-5">{{ FEATURES[0].title }}</h3>
            <p class="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-[380px] mb-5">{{ FEATURES[0].desc }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="h in FEATURES[0].highlights" :key="h" class="bento-tag" :style="{ borderColor: FEATURES[0].gradient[0] + '30', color: FEATURES[0].gradient[0] }">{{ h }}</span>
            </div>
          </div>
          <div class="shrink-0 flex flex-col items-center md:items-end justify-center">
            <div
              class="text-[64px] md:text-[80px] font-extrabold leading-none tracking-tighter"
              :style="{ background: `linear-gradient(135deg, ${FEATURES[0].gradient[0]}, ${FEATURES[0].gradient[1]})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }"
            >{{ FEATURES[0].stat }}</div>
            <div class="text-xs text-[var(--color-text-dim)] mt-1 tracking-wide uppercase">{{ FEATURES[0].statLabel }}</div>
          </div>
        </div>
      </div>

      <!-- Feature cards -->
      <div
        v-for="(feature, i) in FEATURES.slice(1)"
        :key="feature.title"
        class="bento-card group"
        @mouseenter="hoverIdx = i"
        @mouseleave="hoverIdx = null"
      >
        <div class="bento-glow" :style="{ background: `radial-gradient(ellipse at 15% 0%, ${feature.gradient[0]}14, transparent 60%)` }" />

        <div class="relative p-7">
          <!-- Top row: icon + stat -->
          <div class="flex items-start justify-between mb-5">
            <div class="bento-icon" :style="iconBg(feature)">
              <FeatureIcon :name="feature.icon" :color="feature.gradient[0]" :size="18" />
            </div>
            <div class="text-right">
              <span class="text-[26px] font-extrabold leading-none tracking-tight" :style="{ color: feature.gradient[0] }">{{ feature.stat }}</span>
              <div class="text-[10px] text-[var(--color-text-dim)] mt-0.5">{{ feature.statLabel }}</div>
            </div>
          </div>

          <h3 class="text-[15px] font-semibold text-white mb-1.5">{{ feature.title }}</h3>
          <p class="text-[13px] text-[var(--color-text-muted)] leading-relaxed mb-4">{{ feature.desc }}</p>

          <!-- Highlight tags -->
          <div class="flex flex-wrap gap-1.5">
            <span v-for="h in feature.highlights" :key="h" class="bento-tag-sm" :style="{ color: feature.gradient[0] + 'cc' }">{{ h }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Under the hood -->
    <div class="mt-28 pt-20 border-t border-white/[0.06]">
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

      <!-- Category pills -->
      <div class="flex justify-center mb-10">
        <div class="inline-flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <button
            v-for="(cat, ci) in DETAIL_CATEGORIES"
            :key="cat.title"
            type="button"
            @click.prevent="activeCategory = ci"
            class="hood-tab"
            :class="activeCategory === ci && 'hood-tab-active'"
          >
            <span class="text-base leading-none">{{ cat.emoji }}</span>
            <span class="hidden sm:inline">{{ cat.title }}</span>
          </button>
        </div>
      </div>

      <!-- Active category panel -->
      <div class="max-w-[900px] mx-auto">
        <div :key="activeCategory" class="hood-panel">
          <!-- Left -->
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                :style="{ background: `linear-gradient(135deg, ${activeCat.color}20, ${activeCat.color}08)` }"
              >{{ activeCat.emoji }}</div>
              <div>
                <h4 class="text-lg font-bold text-white leading-tight">{{ activeCat.title }}</h4>
                <p class="text-xs text-[var(--color-text-dim)] mt-0.5">{{ activeCat.desc }}</p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
              <div v-for="(item, ii) in activeCat.items" :key="item" class="hood-row">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" class="shrink-0 mt-px">
                  <circle cx="8" cy="8" r="7" :stroke="activeCat.color" stroke-width="1.5" stroke-opacity="0.3" />
                  <path d="M5.5 8.5L7 10L10.5 6.5" :stroke="activeCat.color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Right visual -->
          <div class="hood-visual" :style="{ borderColor: activeCat.color + '15', background: `linear-gradient(160deg, ${activeCat.color}08, transparent 70%)` }">
            <div class="text-4xl mb-2">{{ activeCat.emoji }}</div>
            <div class="text-2xl font-bold text-white">{{ activeCat.items.length }}</div>
            <div class="text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest mt-1">features</div>
          </div>
        </div>
      </div>

      <!-- Stats strip -->
      <div class="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[640px] mx-auto">
        <div v-for="stat in HOOD_STATS" :key="stat.label" class="hood-stat">
          <div class="text-xl font-bold text-white">{{ stat.value }}</div>
          <div class="text-[10px] text-[var(--color-text-dim)] mt-0.5 uppercase tracking-wider">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { FEATURES } from '~/config/landing'
import FeatureIcon from './FeatureIcon.vue'

const hoverIdx = ref<number | null>(null)
const activeCategory = ref(0)
const activeCat = computed(() => DETAIL_CATEGORIES[activeCategory.value])

function iconBg(feature: typeof FEATURES[number]) {
  return { background: `linear-gradient(135deg, ${feature.gradient[0]}18, ${feature.gradient[1]}08)` }
}

const HOOD_STATS = [
  { value: '50+', label: 'Features' },
  { value: '36', label: 'Shortcuts' },
  { value: '4', label: 'Engines' },
  { value: '6+', label: 'Export formats' },
]

const DETAIL_CATEGORIES = [
  {
    title: 'SQL Editor',
    emoji: '✏️',
    color: '#60a5fa',
    desc: 'A full IDE-grade editor right in your database client',
    items: [
      'Full syntax highlighting & IntelliSense',
      'Schema-aware autocomplete',
      'Multi-statement execution with tabs',
      'SQL formatter (Cmd+Shift+F)',
      'Query variables — :user_id placeholders',
      'EXPLAIN query visualizer',
      'Saved queries & query history',
      'Query snippets per engine',
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
      'Schema diff between connections',
      'Data masking for sensitive columns',
      'Foreign key viewer & navigation',
      'Column statistics on right-click',
      'Row comparison (select 2 rows)',
      'Backup & restore (.sql)',
      'Slow query warning with EXPLAIN',
      'Create / duplicate / drop tables',
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
/* === Bento Grid === */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 640px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.bento-hero {
  grid-column: 1 / -1;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.015);
  transition: border-color 0.4s, box-shadow 0.4s;
}
.bento-hero:hover {
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 0 40px rgba(0, 120, 212, 0.06);
}

.bento-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.015);
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
}
.bento-card:hover {
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.bento-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s;
  pointer-events: none;
}
.group:hover .bento-glow {
  opacity: 1;
}

.bento-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* === Tags === */
.bento-tag {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  border: 1px solid;
  background: rgba(255, 255, 255, 0.02);
  letter-spacing: 0.02em;
}
.bento-tag-sm {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

/* === Hood Tabs === */
.hood-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 13px;
  border-radius: 9px;
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
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}

/* === Hood Panel === */
.hood-panel {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  padding: 28px 32px;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  animation: hood-in 0.25s ease;
}
@media (max-width: 767px) {
  .hood-panel {
    flex-direction: column;
    padding: 22px;
    gap: 20px;
  }
}

@keyframes hood-in {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.hood-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 7px 0;
  font-size: 13px;
  color: var(--color-text-muted);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}
.hood-row:last-child {
  border-bottom: none;
}

.hood-visual {
  width: 160px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 18px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
@media (max-width: 767px) {
  .hood-visual { display: none; }
}

/* === Stats === */
.hood-stat {
  text-align: center;
  padding: 14px 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: border-color 0.2s;
}
.hood-stat:hover {
  border-color: rgba(255, 255, 255, 0.1);
}
</style>
