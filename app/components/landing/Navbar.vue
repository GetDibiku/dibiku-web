<template>
  <nav class="sticky top-0 z-50 glass-nav border-b border-white/[0.06]">
    <div class="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2.5 no-underline">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] flex items-center justify-center text-white text-sm font-bold">
          Di
        </div>
        <span class="text-white font-semibold text-lg">Dibiku</span>
      </a>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#features" class="text-[var(--color-text-muted)] hover:text-white text-sm transition-colors no-underline">Features</a>
        <a href="#compare" class="text-[var(--color-text-muted)] hover:text-white text-sm transition-colors no-underline">Compare</a>
        <a href="#pricing" class="text-[var(--color-text-muted)] hover:text-white text-sm transition-colors no-underline">Pricing</a>
        <a
          href="#download"
          class="px-5 py-2 bg-gradient-to-r from-[var(--color-accent)] to-[#0090e0] text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity no-underline"
        >
          Download
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden text-[var(--color-text-muted)] hover:text-white"
      >
        <svg v-if="!mobileOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileOpen" class="md:hidden border-t border-white/[0.06] px-6 py-4 flex flex-col gap-4">
        <a href="#features" @click="mobileOpen = false" class="text-[var(--color-text-muted)] hover:text-white text-sm no-underline">Features</a>
        <a href="#compare" @click="mobileOpen = false" class="text-[var(--color-text-muted)] hover:text-white text-sm no-underline">Compare</a>
        <a href="#pricing" @click="mobileOpen = false" class="text-[var(--color-text-muted)] hover:text-white text-sm no-underline">Pricing</a>
        <a href="#download" @click="mobileOpen = false" class="px-5 py-2.5 bg-gradient-to-r from-[var(--color-accent)] to-[#0090e0] text-white text-sm font-semibold rounded-xl text-center no-underline">Download</a>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)
</script>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.2s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
