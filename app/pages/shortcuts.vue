<template>
  <div class="min-h-screen">
    <Navbar />

    <div class="max-w-[800px] mx-auto px-6 pt-20 pb-24">
      <!-- Header -->
      <div class="mb-12">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="6" y2="8" stroke-width="3"/><line x1="10" y1="8" x2="10" y2="8" stroke-width="3"/><line x1="14" y1="8" x2="14" y2="8" stroke-width="3"/><line x1="18" y1="8" x2="18" y2="8" stroke-width="3"/><line x1="8" y1="16" x2="16" y2="16"/></svg>
          </div>
          <div>
            <h1 class="text-3xl font-bold text-white">Keyboard Shortcuts</h1>
            <p class="text-sm text-[var(--color-text-dim)] mt-1">{{ allShortcuts.length }} shortcuts to keep your hands on the keyboard</p>
          </div>
        </div>
      </div>

      <!-- Categories -->
      <div class="space-y-10">
        <section v-for="cat in categories" :key="cat.title">
          <div class="flex items-center gap-3 mb-4 pb-3 border-b border-white/[0.06]">
            <span class="text-base">{{ cat.emoji }}</span>
            <h2 class="text-[15px] font-semibold text-white">{{ cat.title }}</h2>
            <span class="text-[11px] text-[var(--color-text-dim)] ml-auto">{{ cat.shortcuts.length }} shortcuts</span>
          </div>
          <div class="grid sm:grid-cols-2 gap-x-10 gap-y-0">
            <div
              v-for="s in cat.shortcuts"
              :key="s.keys"
              class="flex items-center justify-between py-2.5 border-b border-white/[0.03] group"
            >
              <span class="text-[13px] text-[var(--color-text-muted)] group-hover:text-white transition-colors">{{ s.desc }}</span>
              <div class="flex gap-1 shrink-0 ml-4">
                <kbd v-for="k in s.keys.split('+')" :key="k" class="sc-kbd">{{ k.trim() }}</kbd>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Tips -->
      <div class="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
        <h3 class="text-sm font-semibold text-white mb-3">Tips</h3>
        <ul class="space-y-2 text-[13px] text-[var(--color-text-muted)]">
          <li class="flex items-start gap-2">
            <span class="text-[var(--color-accent)] mt-0.5">•</span>
            Press <kbd class="sc-kbd">⌘</kbd><kbd class="sc-kbd">?</kbd> inside Dibiku to open the shortcuts cheat sheet.
          </li>
          <li class="flex items-start gap-2">
            <span class="text-[var(--color-accent)] mt-0.5">•</span>
            On Windows/Linux, replace <kbd class="sc-kbd">⌘</kbd> with <kbd class="sc-kbd">Ctrl</kbd>.
          </li>
          <li class="flex items-start gap-2">
            <span class="text-[var(--color-accent)] mt-0.5">•</span>
            Use <kbd class="sc-kbd">⌘</kbd><kbd class="sc-kbd">P</kbd> to open the command palette for quick navigation.
          </li>
        </ul>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/landing/Navbar.vue'
import Footer from '~/components/landing/Footer.vue'

useHead({
  title: 'Keyboard Shortcuts — Dibiku',
  meta: [
    { name: 'description', content: 'All 36 keyboard shortcuts in Dibiku — the fast, lightweight database client.' },
  ],
})

const categories = [
  {
    title: 'General',
    emoji: '🧭',
    shortcuts: [
      { keys: '⌘+P', desc: 'Command palette' },
      { keys: '⌘+K', desc: 'Switch database' },
      { keys: '⌘+N', desc: 'New connection / Add row' },
      { keys: '⌘+W', desc: 'Close tab' },
      { keys: '⌘+Shift+T', desc: 'Reopen closed tab' },
      { keys: 'Ctrl+Tab', desc: 'Next connection tab' },
      { keys: '⌘+J', desc: 'Toggle sidebar' },
      { keys: '⌘+,', desc: 'Open settings' },
      { keys: '⌘+?', desc: 'Shortcuts cheat sheet' },
      { keys: 'Escape', desc: 'Close panel / dialog' },
    ],
  },
  {
    title: 'Navigation',
    emoji: '📍',
    shortcuts: [
      { keys: '⌘+1', desc: 'Data view' },
      { keys: '⌘+2', desc: 'Structure view' },
      { keys: '⌘+3', desc: 'Query editor' },
      { keys: '⌘+4', desc: 'History' },
      { keys: '⌘+5', desc: 'Metrics board' },
      { keys: '⌘+B', desc: 'Saved queries panel' },
      { keys: '⌘+L', desc: 'Toggle query log' },
      { keys: '⌘+F', desc: 'Filter / Grid search' },
      { keys: '⌘+R', desc: 'Refresh table data' },
    ],
  },
  {
    title: 'Query Editor',
    emoji: '✏️',
    shortcuts: [
      { keys: '⌘+Enter', desc: 'Execute query' },
      { keys: '⌘+Shift+Enter', desc: 'Execute selected text' },
      { keys: '⌘+E', desc: 'Run EXPLAIN' },
      { keys: '⌘+I', desc: 'Query snippets' },
      { keys: '⌘+Shift+F', desc: 'Format SQL' },
      { keys: '⌘+S', desc: 'Save query / Save edits' },
      { keys: '⌘+/', desc: 'Toggle comment' },
    ],
  },
  {
    title: 'Data Grid',
    emoji: '📊',
    shortcuts: [
      { keys: '⌘+C', desc: 'Copy selected rows' },
      { keys: '⌘+V', desc: 'Paste rows' },
      { keys: '⌘+Shift+C', desc: 'Copy as INSERT' },
      { keys: '⌘+Shift+E', desc: 'Export as CSV' },
      { keys: '⌘+A', desc: 'Select all rows' },
      { keys: '⌘+Z', desc: 'Undo cell edit' },
      { keys: '⌘+D', desc: 'Duplicate query to editor' },
      { keys: '⌘+G', desc: 'Go to page' },
      { keys: '⌘+Shift+H', desc: 'Clear history' },
      { keys: '↑ / ↓', desc: 'Navigate rows' },
      { keys: 'Enter', desc: 'Edit cell' },
      { keys: 'Tab', desc: 'Next cell' },
      { keys: 'Delete', desc: 'Delete selected rows' },
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
