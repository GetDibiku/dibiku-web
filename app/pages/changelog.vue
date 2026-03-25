<template>
  <div class="min-h-screen">
    <Navbar />

    <!-- Header -->
    <div class="max-w-[800px] mx-auto px-6 pt-20 pb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-[var(--color-text-muted)] mb-5">
        Product updates
      </div>
      <h1 class="text-[clamp(32px,4vw,44px)] font-bold text-white mb-3 leading-tight">Changelog</h1>
      <p class="text-[var(--color-text-muted)] text-base max-w-[500px]">Everything new in Dibiku, version by version.</p>
    </div>

    <!-- Timeline -->
    <div class="max-w-[800px] mx-auto px-6 pb-24">
      <!-- v0.3.0 -->
      <article class="cl-release">
        <!-- Release header -->
        <div class="cl-release-header">
          <div class="cl-version-badge">
            <span class="cl-version">v0.3.0</span>
            <span class="cl-badge cl-badge-new">New</span>
          </div>
          <span class="cl-date">March 25, 2026</span>
        </div>

        <p class="text-[var(--color-text-muted)] text-sm leading-relaxed mb-10 max-w-[600px]">
          Multiple query tabs, SSH tunnels for database connections, and a built-in SSH terminal — work on several queries at once and manage remote servers without leaving the app.
        </p>

        <!-- Category cards -->
        <div class="cl-sections">
          <!-- Query Tabs -->
          <div class="cl-card cl-card-highlight-blue">
            <div class="cl-card-header">
              <div class="cl-card-icon" style="background: rgba(0, 120, 212, 0.12); color: #60a5fa">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h2 class="cl-card-title">Multiple Query Tabs</h2>
              <span class="cl-card-date">March 25, 2026</span>
            </div>
            <ul class="cl-list">
              <li>Open multiple query tabs per connection — each with its own SQL, results, and state</li>
              <li>Query tabs scoped per database — switching databases shows only relevant tabs</li>
              <li>Keyboard shortcuts: <code>⌘+T</code> new tab, <code>⌘+W</code> close tab</li>
              <li>Double-click tab title to rename inline</li>
              <li>Tab state (SQL text) persisted to localStorage across sessions</li>
              <li>Migration: existing editor content automatically moves to the first tab</li>
              <li>Race-condition safe — query results always land in the correct tab, even when switching mid-execution</li>
              <li>External callers (saved queries, history, snippets, Cmd+D) open into the active query tab</li>
            </ul>
          </div>

          <!-- SSH Tunnel -->
          <div class="cl-card cl-card-highlight-green">
            <div class="cl-card-header">
              <div class="cl-card-icon" style="background: rgba(5, 150, 105, 0.12); color: #4ec9b0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              </div>
              <h2 class="cl-card-title">SSH Tunnel for Databases</h2>
              <span class="cl-card-date">March 25, 2026</span>
            </div>
            <ul class="cl-list">
              <li>SSH tunnel for MySQL, PostgreSQL, and Redis connections</li>
              <li>Password-based auth (via sshpass) and key-based auth</li>
              <li>Automatic local port forwarding — binds random available port, forwards to remote DB</li>
              <li>Tunnel verification with TCP ping retry (800ms + 1200ms timeout)</li>
              <li>Test connection (ping) validates tunnel + database connectivity before saving</li>
              <li>SSH section in connection form with collapsible toggle</li>
              <li>Key file picker via native file dialog (.pem, .key, .crt, .cert, .p12)</li>
              <li>Tunnel lifecycle managed per connection — auto-close on disconnect</li>
              <li>SSH password stored securely in OS keychain</li>
            </ul>
          </div>

          <!-- SSH Terminal -->
          <div class="cl-card cl-card-highlight-green">
            <div class="cl-card-header">
              <div class="cl-card-icon" style="background: rgba(5, 150, 105, 0.12); color: #4ec9b0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="3" width="20" height="18" rx="2"/><polyline points="7 9 10 12 7 15"/><line x1="13" y1="15" x2="17" y2="15"/></svg>
              </div>
              <h2 class="cl-card-title">Built-in SSH Terminal</h2>
              <span class="cl-card-date">March 25, 2026</span>
            </div>
            <ul class="cl-list">
              <li>Full interactive SSH terminal powered by xterm.js</li>
              <li>Multi-tab terminal sessions — open multiple SSH connections at once</li>
              <li>Save SSH sessions with name, host, port, username, and credentials</li>
              <li>Session grouping and color coding for organization</li>
              <li>Password auth (via SSH_ASKPASS) and key auth with file picker (.pem, .key, .pub, .ppk)</li>
              <li>SSH keepalive: <code>ServerAliveInterval=15</code>, <code>TCPKeepAlive=yes</code>, 3 retries</li>
              <li>Auto-reconnect on disconnect — press Enter to retry</li>
              <li>Green/red status dots on saved sessions showing active connections</li>
              <li>5000-line scrollback buffer with dark theme</li>
              <li>Completely isolated from database client — SSH bugs can't crash DB features</li>
            </ul>
          </div>
        </div>
      </article>

      <div class="cl-divider" />

      <!-- v0.2.0 -->
      <article class="cl-release">
        <!-- Release header -->
        <div class="cl-release-header">
          <div class="cl-version-badge">
            <span class="cl-version">v0.2.0</span>
            <span class="cl-badge">Previous</span>
          </div>
          <span class="cl-date">March 20, 2026</span>
        </div>

        <p class="text-[var(--color-text-muted)] text-sm leading-relaxed mb-10 max-w-[600px]">
          Introducing the Metrics Board — write SQL, pick a chart type, and see live visualizations right inside Dibiku.
        </p>

        <!-- Category cards -->
        <div class="cl-sections">
          <!-- Metrics Board -->
          <div class="cl-card cl-card-highlight">
            <div class="cl-card-header">
              <div class="cl-card-icon" style="background: rgba(6, 182, 212, 0.12); color: #22d3ee">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20" stroke-opacity="0.4"/></svg>
              </div>
              <h2 class="cl-card-title">Metrics Board</h2>
              <span class="cl-card-date">March 20, 2026</span>
            </div>
            <ul class="cl-list">
              <li>New Dashboard tab — SQL-powered chart visualizations per connection</li>
              <li>5 chart types: Bar, Line, Area, Pie, and Doughnut</li>
              <li>Multi-step chart builder with live SQL preview (first 5 rows)</li>
              <li>Configurable X/Y column mapping from query results</li>
              <li>3 card sizes: small (1 col), medium (2 col), large (4 col) in a responsive grid</li>
              <li>4 grid layouts: switch between 1, 2, 3, or 4 columns — persisted per connection</li>
              <li>Full-screen chart detail view with Chart/Data toggle</li>
              <li>Export chart as PDF — chart image + full data table, dark-themed, multi-page</li>
              <li>Auto-refresh with configurable intervals (10s, 30s, 1m, 5m, 10m)</li>
              <li>Edit and update existing charts in-place</li>
              <li>Per-connection card persistence — cards saved to config database</li>
              <li>Per-connection state isolation — switching connections preserves each dashboard independently</li>
              <li>Database context stored per card — works across database switches</li>
              <li>Dark theme optimized charts via Chart.js + vue-chartjs</li>
              <li>Dashboard hidden for Redis connections (no SQL support)</li>
              <li>Keyboard shortcut: <code>⌘+5</code> to switch to Dashboard tab</li>
            </ul>
          </div>
        </div>
      </article>

      <div class="cl-divider" />

      <!-- v0.1.0 -->
      <article class="cl-release">
        <!-- Release header -->
        <div class="cl-release-header">
          <div class="cl-version-badge">
            <span class="cl-version">v0.1.0</span>
            <span class="cl-badge">Beta</span>
          </div>
          <span class="cl-date">March 19, 2026</span>
        </div>

        <p class="text-[var(--color-text-muted)] text-sm leading-relaxed mb-10 max-w-[600px]">
          The first public release of Dibiku — a fast, lightweight database client for MySQL, PostgreSQL, SQLite, and Redis.
          Built from the ground up for speed, keyboard-first workflows, and zero bloat.
        </p>

        <!-- Category cards -->
        <div class="cl-sections">
          <!-- Connection Manager — March 19 -->
          <div class="cl-card">
            <div class="cl-card-header">
              <div class="cl-card-icon" style="background: rgba(78, 201, 176, 0.12); color: #4ec9b0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24"/></svg>
              </div>
              <h2 class="cl-card-title">Connection Manager</h2>
              <span class="cl-card-date">March 19, 2026</span>
            </div>
            <ul class="cl-list">
              <li>Revamped detail panel with compact card layout</li>
              <li>Per-connection schema and query state isolation</li>
              <li>Create, edit, duplicate, and delete connections</li>
              <li>Group connections into folders with drag-and-drop</li>
              <li>Color-coded connection badges for quick identification</li>
              <li>Import connections from URL (e.g. <code>mysql://user:pass@host/db</code>)</li>
              <li>Multi-connection tabs with independent data grids</li>
              <li>Reconnect button when connection drops</li>
              <li>SNI routing support for cloud-hosted databases</li>
            </ul>
          </div>

          <!-- Database Support — March 19 -->
          <div class="cl-card">
            <div class="cl-card-header">
              <div class="cl-card-icon" style="background: rgba(0, 120, 212, 0.12); color: #60a5fa">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              </div>
              <h2 class="cl-card-title">Database Support</h2>
              <span class="cl-card-date">March 19, 2026</span>
            </div>
            <ul class="cl-list">
              <li>MySQL driver with single-connection pool and per-query database switching</li>
              <li>PostgreSQL driver with multi-schema support (all user schemas, not just public)</li>
              <li>SQLite driver for local file-based databases</li>
              <li>Redis driver with key browser, CLI mode, TTL management, and key operations</li>
              <li>SSH tunnel support with password and key-based authentication</li>
              <li>SSL/TLS with custom certificate paths (key, cert, CA)</li>
              <li>OS keychain integration — passwords stored securely, never on disk</li>
            </ul>
          </div>

          <!-- UI & Experience — March 19 -->
          <div class="cl-card">
            <div class="cl-card-header">
              <div class="cl-card-icon" style="background: rgba(244, 71, 71, 0.12); color: #f44747">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h2 class="cl-card-title">UI & Experience</h2>
              <span class="cl-card-date">March 19, 2026</span>
            </div>
            <ul class="cl-list">
              <li>Dark theme (VS Code-inspired) and light theme with toggle</li>
              <li>macOS native title bar with traffic light integration</li>
              <li>36 keyboard shortcuts with cheat sheet (Cmd+?)</li>
              <li>Command palette (Cmd+P) for quick table search</li>
              <li>Data masking toggle with inline eye icon and label</li>
              <li>Toast notifications for all actions</li>
              <li>Settings dialog with theme, page size, and read-only mode</li>
              <li>First-run welcome dialog with onboarding steps</li>
              <li>Auto-update with download progress banner</li>
              <li>Session restore — reopen last connection tabs on restart</li>
              <li>ESC layered close: modals → table tabs → database → connection</li>
            </ul>
          </div>

          <!-- Table Management — March 17 -->
          <div class="cl-card">
            <div class="cl-card-header">
              <div class="cl-card-icon" style="background: rgba(230, 146, 46, 0.12); color: #e6922e">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"/></svg>
              </div>
              <h2 class="cl-card-title">Table Management</h2>
              <span class="cl-card-date">March 17, 2026</span>
            </div>
            <ul class="cl-list">
              <li>Table structure viewer with columns, indexes, and primary keys</li>
              <li>Context menu: Copy Name, Copy SELECT, Copy INSERT, Copy CREATE TABLE</li>
              <li>Create table dialog, duplicate table, truncate and drop table</li>
              <li>Database picker (Cmd+K) with search</li>
              <li>Foreign key viewer and navigation</li>
              <li>Slow query warning with inline EXPLAIN</li>
            </ul>
          </div>

          <!-- Import & Export — March 17 -->
          <div class="cl-card">
            <div class="cl-card-header">
              <div class="cl-card-icon" style="background: rgba(197, 134, 192, 0.12); color: #c586c0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </div>
              <h2 class="cl-card-title">Import & Export</h2>
              <span class="cl-card-date">March 17, 2026</span>
            </div>
            <ul class="cl-list">
              <li>Export current view or full table as CSV, JSON, or SQL INSERT statements</li>
              <li>Import CSV into existing tables with column mapping</li>
              <li>Copy rows as PHP array, Python dict, Go struct, Ruby hash, or YAML</li>
              <li>Copy CREATE TABLE statements</li>
              <li>Database backup (full SQL dump) and restore</li>
              <li>Connection import/export for team sharing</li>
            </ul>
          </div>

          <!-- Data Grid — March 16 -->
          <div class="cl-card">
            <div class="cl-card-header">
              <div class="cl-card-icon" style="background: rgba(123, 63, 160, 0.12); color: #c084fc">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
              </div>
              <h2 class="cl-card-title">Data Grid</h2>
              <span class="cl-card-date">March 16, 2026</span>
            </div>
            <ul class="cl-list">
              <li>Virtual scrolling — render millions of rows at 60fps</li>
              <li>Multi-table tabs scoped per database with independent state</li>
              <li>Column sorting, resize, drag-to-reorder, and visibility toggle</li>
              <li>Row selection — click, Shift+click, Cmd+click, drag-to-select</li>
              <li>Inline cell editing with dirty state tracking and batch save (Cmd+S)</li>
              <li>Undo cell edits (Cmd+Z) with full undo stack</li>
              <li>Pagination with configurable page size (50-1000 rows)</li>
              <li>In-grid search with match highlighting (Cmd+F)</li>
              <li>Copy rows to clipboard (Cmd+C) and paste rows (Cmd+V)</li>
              <li>Row comparison — select 2 rows to compare side-by-side</li>
              <li>Column statistics — right-click any column for min, max, avg, distinct count</li>
            </ul>
          </div>

          <!-- SQL Editor — March 16 -->
          <div class="cl-card">
            <div class="cl-card-header">
              <div class="cl-card-icon" style="background: rgba(0, 120, 212, 0.12); color: #0078d4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h2 class="cl-card-title">SQL Editor</h2>
              <span class="cl-card-date">March 16, 2026</span>
            </div>
            <ul class="cl-list">
              <li>Full-featured SQL editor with syntax highlighting</li>
              <li>Schema-aware autocomplete for tables, columns, and SQL keywords</li>
              <li>Multi-statement execution with result tabs</li>
              <li>SQL formatter (Cmd+Shift+F)</li>
              <li>Query variables — <code>:user_id</code> placeholders</li>
              <li>EXPLAIN visualizer for MySQL (color-coded) and PostgreSQL (tree view)</li>
              <li>Saved queries library (Cmd+B)</li>
              <li>Query snippets per engine</li>
              <li>Editor content auto-saved to localStorage</li>
              <li>Per-connection query history (up to 500 entries, persisted to disk)</li>
            </ul>
          </div>
        </div>

        <!-- Keyboard shortcuts link -->
        <div class="mt-12 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="6" y2="8" stroke-width="3"/><line x1="10" y1="8" x2="10" y2="8" stroke-width="3"/><line x1="14" y1="8" x2="14" y2="8" stroke-width="3"/><line x1="18" y1="8" x2="18" y2="8" stroke-width="3"/><line x1="8" y1="16" x2="16" y2="16"/></svg>
            <span class="text-sm text-white font-medium">36 Keyboard Shortcuts</span>
          </div>
          <NuxtLink to="/shortcuts" class="text-sm text-[var(--color-accent)] hover:underline no-underline">View all →</NuxtLink>
        </div>
      </article>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/landing/Navbar.vue'
import Footer from '~/components/landing/Footer.vue'

useHead({
  title: 'Changelog — Dibiku',
  meta: [
    { name: 'description', content: 'What\'s new in Dibiku — SSH terminal & tunnels, multiple query tabs, metrics board, and more. Version history for the fast database client.' },
  ],
})

</script>

<style scoped>
/* === Release === */
.cl-release {
  position: relative;
}

.cl-release-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.cl-version-badge {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cl-version {
  font-size: 24px;
  font-weight: 700;
  color: white;
}

.cl-badge {
  padding: 3px 10px;
  border-radius: 20px;
  background: rgba(0, 120, 212, 0.12);
  border: 1px solid rgba(0, 120, 212, 0.2);
  font-size: 11px;
  font-weight: 600;
  color: var(--color-accent);
  letter-spacing: 0.03em;
}

.cl-date {
  font-size: 13px;
  color: var(--color-text-dim);
}

.cl-badge-new {
  background: rgba(6, 182, 212, 0.12);
  border-color: rgba(6, 182, 212, 0.25);
  color: #22d3ee;
}

.cl-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin: 40px 0;
}

/* === Category Cards === */
.cl-sections {
  display: grid;
  gap: 12px;
}

.cl-card {
  padding: 24px;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  transition: border-color 0.2s;
}
.cl-card:hover {
  border-color: rgba(255, 255, 255, 0.1);
}

.cl-card-highlight {
  border-color: rgba(6, 182, 212, 0.15);
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.04), rgba(255, 255, 255, 0.015));
}
.cl-card-highlight:hover {
  border-color: rgba(6, 182, 212, 0.25);
}

.cl-card-highlight-blue {
  border-color: rgba(0, 120, 212, 0.15);
  background: linear-gradient(135deg, rgba(0, 120, 212, 0.04), rgba(255, 255, 255, 0.015));
}
.cl-card-highlight-blue:hover {
  border-color: rgba(0, 120, 212, 0.25);
}

.cl-card-highlight-green {
  border-color: rgba(5, 150, 105, 0.15);
  background: linear-gradient(135deg, rgba(5, 150, 105, 0.04), rgba(255, 255, 255, 0.015));
}
.cl-card-highlight-green:hover {
  border-color: rgba(5, 150, 105, 0.25);
}

.cl-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.cl-card-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cl-card-title {
  font-size: 15px;
  font-weight: 600;
  color: white;
}

.cl-card-date {
  margin-left: auto;
  font-size: 11px;
  color: var(--color-text-dim);
  white-space: nowrap;
}

/* === List === */
.cl-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0;
}

.cl-list li {
  position: relative;
  padding: 5px 0 5px 22px;
  font-size: 13px;
  color: var(--color-text-muted);
  line-height: 1.55;
  border-bottom: 1px solid rgba(255, 255, 255, 0.025);
}
.cl-list li:last-child {
  border-bottom: none;
}

.cl-list li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 12px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-accent);
  opacity: 0.5;
}

.cl-list code {
  padding: 1px 5px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  font-size: 11px;
  color: var(--color-accent-light);
  font-family: ui-monospace, monospace;
}

/* === Shortcuts === */
.cl-shortcut-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.cl-kbd {
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  font-size: 10px;
  color: var(--color-text-dim);
  font-family: ui-monospace, monospace;
  line-height: 1.2;
}
</style>
