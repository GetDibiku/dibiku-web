<template>
  <footer class="border-t border-white/[0.06] py-10 px-6">
    <div class="max-w-[1100px] mx-auto">
      <div class="flex flex-col sm:flex-row justify-between gap-8">
        <!-- Brand -->
        <div>
          <NuxtLink :to="localePath('/')" class="flex items-center gap-2 no-underline mb-3">
            <img src="/logo-icon.png" alt="Dibiku" class="w-7 h-7 rounded-md object-contain" />
            <span class="text-white font-semibold">Dibiku</span>
          </NuxtLink>
          <p class="text-xs text-[var(--color-text-dim)] max-w-[240px] leading-relaxed">{{ $t('footer.tagline') }}</p>
        </div>

        <!-- Links -->
        <div class="flex gap-12">
          <div>
            <div class="text-[10px] uppercase tracking-wider text-[var(--color-text-faint)] font-medium mb-3">{{ $t('footer.product') }}</div>
            <div class="flex flex-col gap-2 text-sm">
              <NuxtLink :to="localePath('/features')" class="text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">{{ $t('nav.features') }}</NuxtLink>
              <NuxtLink :to="localePath('/compare')" class="text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">{{ $t('nav.compare') }}</NuxtLink>
              <NuxtLink :to="localePath('/pricing')" class="text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">{{ $t('nav.pricing') }}</NuxtLink>
              <NuxtLink :to="localePath('/download')" class="text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">{{ $t('nav.download') }}</NuxtLink>
            </div>
          </div>
          <div>
            <div class="text-[10px] uppercase tracking-wider text-[var(--color-text-faint)] font-medium mb-3">{{ $t('footer.resources') }}</div>
            <div class="flex flex-col gap-2 text-sm">
              <NuxtLink :to="localePath('/shortcuts')" class="text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">{{ $t('nav.shortcuts') }}</NuxtLink>
              <NuxtLink :to="localePath('/about')" class="text-[var(--color-text-muted)] hover:text-white transition-colors no-underline">{{ $t('nav.about') }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between gap-2 text-xs text-[var(--color-text-dim)]">
        <span>{{ $t('footer.copyright') }}</span>
        <a href="mailto:maulanayusupp@gmail.com" class="text-[var(--color-text-dim)] hover:text-white transition-colors no-underline">maulanayusupp@gmail.com</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
