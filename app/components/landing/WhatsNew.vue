<template>
  <section class="max-w-[1100px] mx-auto px-6 py-12">
    <div class="whats-new-banner">
      <div class="banner-glow" />
      <div class="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-10 p-6 sm:p-8">
        <!-- Badge -->
        <div class="flex items-center gap-3 shrink-0">
          <span class="whats-new-pill">What's New</span>
        </div>

        <!-- Features -->
        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 flex-1">
          <div class="flex items-center gap-3">
            <div class="icon-circle" style="background: linear-gradient(135deg, #05966918, #4ec9b008)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="18" rx="2" /><polyline points="7 9 10 12 7 15" /><line x1="13" y1="15" x2="17" y2="15" />
              </svg>
            </div>
            <div>
              <div class="text-sm font-semibold text-white">SSH Tunnel & Terminal</div>
              <div class="text-xs text-[var(--color-text-dim)]">Tunnel DB connections + built-in xterm.js shell</div>
            </div>
          </div>

          <div class="hidden sm:block w-px h-8 bg-white/[0.08]" />

          <div class="flex items-center gap-3">
            <div class="icon-circle" style="background: linear-gradient(135deg, #0078d418, #00b4d808)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0078d4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" stroke-opacity="0.4" />
              </svg>
            </div>
            <div>
              <div class="text-sm font-semibold text-white">Multiple Query Tabs</div>
              <div class="text-xs text-[var(--color-text-dim)]">Cmd+T to open, per-database scoping</div>
            </div>
          </div>

          <div class="hidden sm:block w-px h-8 bg-white/[0.08]" />

          <div class="flex items-center gap-3">
            <div class="icon-circle" style="background: linear-gradient(135deg, #d9770618, #fbbf2408)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div>
              <div class="text-sm font-semibold text-white">Test Connection</div>
              <div class="text-xs text-[var(--color-text-dim)]">Ping through SSH tunnel before saving</div>
            </div>
          </div>
        </div>

        <!-- Arrow link -->
        <a href="#features" class="text-xs text-[var(--color-accent)] hover:text-white transition-colors shrink-0 flex items-center gap-1.5 no-underline">
          See all
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.whats-new-banner {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.015);
  transition: border-color 0.3s;
}
.whats-new-banner:hover {
  border-color: rgba(255, 255, 255, 0.1);
}

.banner-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 0% 50%, rgba(5, 150, 105, 0.08), transparent 40%),
              radial-gradient(ellipse at 50% 50%, rgba(0, 120, 212, 0.05), transparent 40%),
              radial-gradient(ellipse at 100% 50%, rgba(217, 119, 6, 0.05), transparent 40%);
  pointer-events: none;
}

.whats-new-pill {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #fff;
  background: linear-gradient(135deg, #059669, #0078d4);
  text-transform: uppercase;
}

.icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
</style>
