<template>
  <footer class="border-t border-white/[0.06] py-10 px-6">
    <div class="max-w-[1100px] mx-auto">
      <div class="flex flex-col sm:flex-row justify-between gap-8">
        <!-- Brand -->
        <div>
          <NuxtLink to="/" class="flex items-center gap-2 no-underline mb-3">
            <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] flex items-center justify-center text-white text-[10px] font-bold">
              Di
            </div>
            <span class="text-white font-semibold">Dibiku</span>
          </NuxtLink>
          <p class="text-xs text-[var(--color-text-dim)] max-w-[240px] leading-relaxed">The fast, lightweight database client for MySQL, PostgreSQL, SQLite, and Redis.</p>
        </div>

        <!-- Links -->
        <div class="flex gap-12">
          <div>
            <div class="text-[10px] uppercase tracking-wider text-[var(--color-text-faint)] font-medium mb-3">Product</div>
            <div class="flex flex-col gap-2 text-sm">
              <NuxtLink to="/features" class="text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">Features</NuxtLink>
              <NuxtLink to="/compare" class="text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">Compare</NuxtLink>
              <NuxtLink to="/pricing" class="text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">Pricing</NuxtLink>
              <NuxtLink to="/download" class="text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">Download</NuxtLink>
            </div>
          </div>
          <div>
            <div class="text-[10px] uppercase tracking-wider text-[var(--color-text-faint)] font-medium mb-3">Resources</div>
            <div class="flex flex-col gap-2 text-sm">
              <NuxtLink to="/changelog" class="text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">Changelog</NuxtLink>
              <NuxtLink to="/shortcuts" class="text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">Shortcuts</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-8 pt-6 border-t border-white/[0.04] text-xs text-[var(--color-text-dim)]">
        &copy; 2026 Dibiku. All rights reserved.
      </div>
    </div>
  </footer>
</template>
