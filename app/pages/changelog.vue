<template>
  <div class="min-h-screen">
    <!-- Nav -->
    <nav class="sticky top-0 z-50 glass-nav border-b border-white/[0.06]">
      <div class="max-w-[800px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2.5 no-underline">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] flex items-center justify-center text-white text-sm font-bold">Di</div>
          <span class="text-white font-semibold text-lg">Dibiku</span>
        </a>
        <a href="/" class="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">&larr; Back to home</a>
      </div>
    </nav>

    <!-- Header -->
    <div class="max-w-[800px] mx-auto px-6 pt-20 pb-12">
      <h1 class="text-4xl font-bold text-white mb-3">Changelog</h1>
      <p class="text-[var(--color-text-muted)] text-base">Everything new in Dibiku, version by version.</p>
    </div>

    <!-- v0.1.0 -->
    <article class="max-w-[800px] mx-auto px-6 pb-24">
      <div class="flex items-center gap-4 mb-8">
        <span class="text-2xl font-bold text-white">v0.1.0</span>
        <span class="px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-xs font-medium text-[var(--color-accent)]">Beta</span>
        <span class="text-sm text-[var(--color-text-dim)]">March 2026</span>
      </div>

      <p class="text-[var(--color-text-muted)] mb-10 leading-relaxed">
        The first public release of Dibiku — a fast, lightweight database client for MySQL, PostgreSQL, SQLite, and Redis.
        Built from the ground up with a focus on speed, keyboard-first workflows, and staying out of your way.
      </p>

      <!-- Sections -->
      <div class="space-y-12">
        <!-- Database Support -->
        <section>
          <h2 class="changelog-heading">Database Support</h2>
          <ul class="changelog-list">
            <li>MySQL driver with connection pooling and SSL support</li>
            <li>PostgreSQL driver with SSL mode configuration</li>
            <li>SQLite driver for local file-based databases</li>
            <li>Redis driver with key browser, CLI mode, TTL management, and key operations</li>
            <li>SSH tunnel support — connect to remote databases through an SSH jump server</li>
            <li>OS keychain integration — passwords stored securely, never on disk</li>
          </ul>
        </section>

        <!-- Connection Manager -->
        <section>
          <h2 class="changelog-heading">Connection Manager</h2>
          <ul class="changelog-list">
            <li>Create, edit, duplicate, and delete connections</li>
            <li>Group connections into folders with drag-and-drop</li>
            <li>Color-coded connection badges for quick identification</li>
            <li>Import connections from URL (e.g. <code>mysql://user:pass@host/db</code>)</li>
            <li>Connection status indicator (green/red dot on tabs)</li>
            <li>Reconnect button when connection drops</li>
            <li>Animated empty state with first-run onboarding</li>
          </ul>
        </section>

        <!-- Data Viewer -->
        <section>
          <h2 class="changelog-heading">Data Viewer</h2>
          <ul class="changelog-list">
            <li>Virtual scrolling — render millions of rows at 60fps</li>
            <li>Multi-table tabs — open multiple tables side by side</li>
            <li>Column sorting with visual indicators (click header to sort)</li>
            <li>Column resize and drag-to-reorder</li>
            <li>Column visibility toggle (show/hide specific columns)</li>
            <li>Row selection — click, Shift+click, Cmd+click, drag-to-select</li>
            <li>Pagination with configurable page size (50–1000 rows)</li>
            <li>In-grid search with match highlighting (Cmd+F)</li>
            <li>Smart cell rendering — NULL badges, JSON viewer, DateTime formatting</li>
            <li>Copy rows to clipboard as TSV (Cmd+C) — respects column order</li>
            <li>Paste rows from clipboard (Cmd+V) — auto-detects headers</li>
          </ul>
        </section>

        <!-- Inline Editing -->
        <section>
          <h2 class="changelog-heading">Inline Editing</h2>
          <ul class="changelog-list">
            <li>Click any cell to edit in place</li>
            <li>Tab / Shift+Tab to navigate between cells while editing</li>
            <li>Dirty cell highlighting with unsaved changes bar</li>
            <li>Batch save all changes (Cmd+S)</li>
            <li>Undo cell edits (Cmd+Z) with full undo stack</li>
            <li>Add new rows inline (+ Row button or Cmd+N)</li>
            <li>Delete rows with confirmation dialog (Delete key)</li>
            <li>Row edit panel — double-click to edit all fields in a side panel</li>
          </ul>
        </section>

        <!-- Query Editor -->
        <section>
          <h2 class="changelog-heading">Query Editor</h2>
          <ul class="changelog-list">
            <li>CodeMirror 6 editor with SQL syntax highlighting</li>
            <li>Autocomplete for table names, column names, and SQL keywords</li>
            <li>MySQL and PostgreSQL dialect support</li>
            <li>Execute queries (Cmd+Enter) or selected text (Cmd+Shift+Enter)</li>
            <li>EXPLAIN visualizer for MySQL (color-coded access types) and PostgreSQL (tree view)</li>
            <li>Query results displayed in the same data grid</li>
            <li>Saved queries — save, load, delete favorite queries (Cmd+B)</li>
            <li>Editor content auto-saved to localStorage</li>
          </ul>
        </section>

        <!-- Query History -->
        <section>
          <h2 class="changelog-heading">Query History</h2>
          <ul class="changelog-list">
            <li>All queries automatically saved (up to 500 entries)</li>
            <li>Persisted to disk — survives app restarts</li>
            <li>Search and filter history by SQL text</li>
            <li>Re-run any query directly from history</li>
            <li>Open query in editor for modification</li>
            <li>Clear history (Cmd+Shift+H)</li>
          </ul>
        </section>

        <!-- Import & Export -->
        <section>
          <h2 class="changelog-heading">Import &amp; Export</h2>
          <ul class="changelog-list">
            <li>Export current view as CSV, JSON, or SQL INSERT statements</li>
            <li>Export entire table via right-click context menu (fetches all rows)</li>
            <li>Quick export shortcut (Cmd+Shift+E for CSV)</li>
            <li>Import CSV into existing tables with column mapping</li>
            <li>Database backup — full SQL dump of all tables</li>
            <li>Database restore from SQL file</li>
          </ul>
        </section>

        <!-- Table Management -->
        <section>
          <h2 class="changelog-heading">Table Management</h2>
          <ul class="changelog-list">
            <li>Table structure viewer — columns, indexes, primary keys</li>
            <li>Right-click context menu: Copy Name, Copy SELECT, Copy INSERT, Copy CREATE TABLE</li>
            <li>Copy row as PHP array, Python dict, JS object, Go struct, Ruby hash, or YAML</li>
            <li>Duplicate table, Create table dialog</li>
            <li>Truncate and Drop table with confirmation</li>
            <li>Database picker (Cmd+K) with search</li>
            <li>Quick table search in sidebar (Cmd+P) with arrow key navigation</li>
          </ul>
        </section>

        <!-- UI & Theme -->
        <section>
          <h2 class="changelog-heading">UI &amp; Theme</h2>
          <ul class="changelog-list">
            <li>Dark theme (VS Code-inspired) and Light theme</li>
            <li>Theme toggle with persistence</li>
            <li>macOS native title bar with traffic light integration</li>
            <li>Toast notifications for all actions</li>
            <li>Sidebar toggle, query log panel, layout modes</li>
            <li>Keyboard shortcuts cheat sheet (Cmd+?)</li>
            <li>First-run welcome dialog with onboarding steps</li>
            <li>Auto-update with download progress banner</li>
          </ul>
        </section>

        <!-- Keyboard Shortcuts -->
        <section>
          <h2 class="changelog-heading">Keyboard Shortcuts (34+)</h2>
          <div class="grid sm:grid-cols-2 gap-x-8 gap-y-1 mt-4">
            <div v-for="s in shortcuts" :key="s.keys" class="flex items-center justify-between py-1.5 border-b border-white/[0.04]">
              <span class="text-sm text-[var(--color-text-muted)]">{{ s.desc }}</span>
              <div class="flex gap-1">
                <kbd v-for="k in s.keys.split('+')" :key="k" class="changelog-kbd">{{ k.trim() }}</kbd>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>

    <!-- Footer -->
    <footer class="border-t border-white/[0.06] py-8 px-6">
      <div class="max-w-[800px] mx-auto flex justify-between items-center flex-wrap gap-4">
        <span class="text-sm text-[var(--color-text-dim)]">&copy; 2026 Dibiku</span>
        <a href="/" class="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">Home</a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Changelog — Dibiku',
  meta: [
    { name: 'description', content: 'See what\'s new in Dibiku — the fast, lightweight database client.' },
  ],
})

const shortcuts = [
  { keys: '⌘+K', desc: 'Switch database' },
  { keys: '⌘+W', desc: 'Close tab' },
  { keys: '⌘+Shift+T', desc: 'Reopen closed tab' },
  { keys: '⌘+J', desc: 'Toggle sidebar' },
  { keys: '⌘+N', desc: 'New connection / Add row' },
  { keys: '⌘+R', desc: 'Refresh data' },
  { keys: '⌘+P', desc: 'Quick table search' },
  { keys: '⌘+1/2/3/4', desc: 'Switch views' },
  { keys: '⌘+B', desc: 'Saved queries' },
  { keys: '⌘+L', desc: 'Query log' },
  { keys: '⌘+F', desc: 'Filter / Search' },
  { keys: '⌘+S', desc: 'Save edits / query' },
  { keys: '⌘+Enter', desc: 'Execute query' },
  { keys: '⌘+Shift+Enter', desc: 'Execute selection' },
  { keys: '⌘+E', desc: 'Run EXPLAIN' },
  { keys: '⌘+C', desc: 'Copy rows' },
  { keys: '⌘+V', desc: 'Paste rows' },
  { keys: '⌘+Shift+C', desc: 'Copy as INSERT' },
  { keys: '⌘+Shift+E', desc: 'Export as CSV' },
  { keys: '⌘+Z', desc: 'Undo cell edit' },
  { keys: '⌘+A', desc: 'Select all rows' },
  { keys: '⌘+D', desc: 'Duplicate to editor' },
  { keys: '⌘+?', desc: 'Shortcuts cheat sheet' },
  { keys: '⌘+Shift+H', desc: 'Clear history' },
  { keys: 'Delete', desc: 'Delete selected rows' },
  { keys: 'Escape', desc: 'Close panel' },
  { keys: 'Enter', desc: 'Edit cell' },
  { keys: 'Tab', desc: 'Next cell' },
  { keys: '↑/↓', desc: 'Navigate rows' },
  { keys: 'Ctrl+Tab', desc: 'Cycle tabs' },
]
</script>

<style scoped>
.changelog-heading {
  font-size: 18px;
  font-weight: 600;
  color: white;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 12px;
}

.changelog-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.changelog-list li {
  position: relative;
  padding: 6px 0 6px 20px;
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.changelog-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 14px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent);
  opacity: 0.6;
}

.changelog-list code {
  padding: 1px 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  font-size: 12px;
  color: var(--color-accent-light);
  font-family: ui-monospace, monospace;
}

.changelog-kbd {
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  font-size: 11px;
  color: var(--color-text-dim);
  font-family: ui-monospace, monospace;
  line-height: 1;
}
</style>
