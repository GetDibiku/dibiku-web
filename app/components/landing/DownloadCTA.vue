<template>
  <section id="download" class="border-t border-white/[0.06] py-20 text-center px-6">
    <h2 class="text-4xl font-bold text-white mb-3">Ready to try?</h2>
    <p class="text-[var(--color-text-dim)] text-base max-w-[400px] mx-auto mb-9">
      Download Dibiku and connect to your first database in under 30 seconds.
    </p>

    <!-- Primary downloads -->
    <div class="flex gap-3 justify-center flex-wrap">
      <a
        :href="DOWNLOAD_LINKS.macArm"
        class="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[var(--color-accent)] to-[#0090e0] text-white rounded-xl text-[15px] font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[var(--color-accent)]/20 no-underline"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.5 4.7 9.5C5.57 8.01 7.13 7.08 8.82 7.05C10.09 7.03 11.29 7.95 12.05 7.95C12.81 7.95 14.25 6.84 15.77 7.01C16.39 7.04 18.07 7.27 19.18 8.85C19.09 8.9 16.87 10.19 16.9 12.97C16.93 16.29 19.78 17.39 19.82 17.41C19.79 17.5 19.31 19.08 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
        macOS (Apple Silicon)
      </a>
      <a
        :href="DOWNLOAD_LINKS.macIntel"
        class="inline-flex items-center gap-2 px-8 py-3.5 bg-white/[0.06] text-[#ccc] rounded-xl text-[15px] font-medium border border-white/10 hover:bg-white/[0.1] transition-colors no-underline"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.5 4.7 9.5C5.57 8.01 7.13 7.08 8.82 7.05C10.09 7.03 11.29 7.95 12.05 7.95C12.81 7.95 14.25 6.84 15.77 7.01C16.39 7.04 18.07 7.27 19.18 8.85C19.09 8.9 16.87 10.19 16.9 12.97C16.93 16.29 19.78 17.39 19.82 17.41C19.79 17.5 19.31 19.08 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
        macOS (Intel)
      </a>
    </div>

    <!-- Secondary downloads -->
    <div class="flex gap-4 justify-center mt-4 flex-wrap">
      <a :href="DOWNLOAD_LINKS.windows" class="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">Windows</a>
      <span class="text-[#3e3e42]">&middot;</span>
      <a :href="DOWNLOAD_LINKS.linuxDeb" class="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">Linux (.deb)</a>
      <span class="text-[#3e3e42]">&middot;</span>
      <a :href="DOWNLOAD_LINKS.linuxAppImage" class="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">Linux (.AppImage)</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DOWNLOAD_LINKS } from '~/config/landing'
</script>
