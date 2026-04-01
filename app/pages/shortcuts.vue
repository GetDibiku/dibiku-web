<template>
  <main class="min-h-screen">
    <Navbar />

    <div class="max-w-[800px] mx-auto px-6 pt-20 pb-24">
      <!-- Header -->
      <div class="mb-12">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="6" y2="8" stroke-width="3"/><line x1="10" y1="8" x2="10" y2="8" stroke-width="3"/><line x1="14" y1="8" x2="14" y2="8" stroke-width="3"/><line x1="18" y1="8" x2="18" y2="8" stroke-width="3"/><line x1="8" y1="16" x2="16" y2="16"/></svg>
          </div>
          <div>
            <h1 class="text-3xl font-bold text-white">{{ $t('shortcuts.title') }}</h1>
            <p class="text-sm text-[var(--color-text-dim)] mt-1">{{ $t('shortcuts.subtitle', { count: allShortcuts.length }) }}</p>
          </div>
        </div>
      </div>

      <!-- Categories -->
      <div class="space-y-10">
        <section v-for="cat in categories" :key="cat.titleKey">
          <div class="flex items-center gap-3 mb-4 pb-3 border-b border-white/[0.06]">
            <span class="text-base">{{ cat.emoji }}</span>
            <h2 class="text-[15px] font-semibold text-white">{{ $t(cat.titleKey) }}</h2>
            <span class="text-[11px] text-[var(--color-text-dim)] ml-auto">{{ cat.shortcuts.length }} shortcuts</span>
          </div>
          <div class="grid sm:grid-cols-2 gap-x-10 gap-y-0">
            <div
              v-for="s in cat.shortcuts"
              :key="s.keys"
              class="flex items-center justify-between py-2.5 border-b border-white/[0.03] group"
            >
              <span class="text-[13px] text-[var(--color-text-muted)] group-hover:text-white transition-colors">{{ $t(s.descKey) }}</span>
              <div class="flex gap-1 shrink-0 ml-4">
                <kbd v-for="k in s.keys.split('+')" :key="k" class="sc-kbd">{{ k.trim() }}</kbd>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Tips -->
      <div class="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
        <h3 class="text-sm font-semibold text-white mb-3">{{ $t('shortcuts.tipsTitle') }}</h3>
        <ul class="space-y-2 text-[13px] text-[var(--color-text-muted)]">
          <li class="flex items-start gap-2">
            <span class="text-[var(--color-accent)] mt-0.5">•</span>
            {{ $t('shortcuts.tip1') }}
          </li>
          <li class="flex items-start gap-2">
            <span class="text-[var(--color-accent)] mt-0.5">•</span>
            {{ $t('shortcuts.tip2') }}
          </li>
          <li class="flex items-start gap-2">
            <span class="text-[var(--color-accent)] mt-0.5">•</span>
            {{ $t('shortcuts.tip3') }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Navbar from '~/components/landing/Navbar.vue'
import Footer from '~/components/landing/Footer.vue'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const baseUrl = 'https://dibiku.com'
const canonicalUrl = computed(() => locale.value === 'en' ? `${baseUrl}/shortcuts` : `${baseUrl}/id/shortcuts`)

useHead({
  title: computed(() => t('seo.shortcutsTitle')),
  meta: [
    { name: 'description', content: computed(() => t('seo.shortcutsDesc')) },
    { property: 'og:title', content: computed(() => t('seo.shortcutsTitle')) },
    { property: 'og:description', content: computed(() => t('seo.shortcutsDesc')) },
    { property: 'og:url', content: canonicalUrl },
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dibiku.com' },
          { '@type': 'ListItem', position: 2, name: 'Keyboard Shortcuts', item: 'https://dibiku.com/shortcuts' },
        ],
      }),
    },
  ],
})

const categories = [
  {
    titleKey: 'shortcuts.general',
    emoji: '🧭',
    shortcuts: [
      { keys: '⌘+P', descKey: 'shortcuts.s.commandPalette' },
      { keys: '⌘+K', descKey: 'shortcuts.s.switchDb' },
      { keys: '⌘+N', descKey: 'shortcuts.s.newConn' },
      { keys: '⌘+W', descKey: 'shortcuts.s.closeTab' },
      { keys: '⌘+Shift+T', descKey: 'shortcuts.s.reopenTab' },
      { keys: 'Ctrl+Tab', descKey: 'shortcuts.s.nextTab' },
      { keys: '⌘+J', descKey: 'shortcuts.s.toggleSidebar' },
      { keys: '⌘+,', descKey: 'shortcuts.s.openSettings' },
      { keys: '⌘+?', descKey: 'shortcuts.s.shortcutsSheet' },
      { keys: 'Escape', descKey: 'shortcuts.s.closePanel' },
    ],
  },
  {
    titleKey: 'shortcuts.navigation',
    emoji: '📍',
    shortcuts: [
      { keys: '⌘+1', descKey: 'shortcuts.s.dataView' },
      { keys: '⌘+2', descKey: 'shortcuts.s.structureView' },
      { keys: '⌘+3', descKey: 'shortcuts.s.queryEditorView' },
      { keys: '⌘+4', descKey: 'shortcuts.s.history' },
      { keys: '⌘+5', descKey: 'shortcuts.s.metricsBoard' },
      { keys: '⌘+B', descKey: 'shortcuts.s.savedQueries' },
      { keys: '⌘+L', descKey: 'shortcuts.s.toggleQueryLog' },
      { keys: '⌘+F', descKey: 'shortcuts.s.filterSearch' },
      { keys: '⌘+R', descKey: 'shortcuts.s.refreshTable' },
    ],
  },
  {
    titleKey: 'shortcuts.queryEditor',
    emoji: '✏️',
    shortcuts: [
      { keys: '⌘+Enter', descKey: 'shortcuts.s.executeQuery' },
      { keys: '⌘+Shift+Enter', descKey: 'shortcuts.s.executeSelected' },
      { keys: '⌘+E', descKey: 'shortcuts.s.runExplain' },
      { keys: '⌘+I', descKey: 'shortcuts.s.querySnippets' },
      { keys: '⌘+Shift+F', descKey: 'shortcuts.s.formatSql' },
      { keys: '⌘+S', descKey: 'shortcuts.s.saveQuery' },
      { keys: '⌘+/', descKey: 'shortcuts.s.toggleComment' },
    ],
  },
  {
    titleKey: 'shortcuts.dataGrid',
    emoji: '📊',
    shortcuts: [
      { keys: '⌘+C', descKey: 'shortcuts.s.copyRows' },
      { keys: '⌘+V', descKey: 'shortcuts.s.pasteRows' },
      { keys: '⌘+Shift+C', descKey: 'shortcuts.s.copyInsert' },
      { keys: '⌘+Shift+E', descKey: 'shortcuts.s.exportCsv' },
      { keys: '⌘+A', descKey: 'shortcuts.s.selectAll' },
      { keys: '⌘+Z', descKey: 'shortcuts.s.undoEdit' },
      { keys: '⌘+D', descKey: 'shortcuts.s.dupToEditor' },
      { keys: '⌘+G', descKey: 'shortcuts.s.goToPage' },
      { keys: '⌘+Shift+H', descKey: 'shortcuts.s.clearHistory' },
      { keys: '↑ / ↓', descKey: 'shortcuts.s.navRows' },
      { keys: 'Enter', descKey: 'shortcuts.s.editCell' },
      { keys: 'Tab', descKey: 'shortcuts.s.nextCell' },
      { keys: 'Delete', descKey: 'shortcuts.s.deleteRows' },
    ],
  },
]

const allShortcuts = categories.flatMap(c => c.shortcuts)
</script>

<style scoped>
.sc-kbd {
  padding: 2px 7px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 5px;
  font-size: 11px;
  color: var(--color-text-dim);
  font-family: ui-monospace, monospace;
  line-height: 1.4;
}
</style>
