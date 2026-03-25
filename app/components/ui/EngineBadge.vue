<template>
  <div
    class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm"
    :class="{ 'opacity-40': soon }"
  >
    <div
      class="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[9px] font-bold text-white"
      :style="{ backgroundColor: color }"
    >
      {{ abbr }}
    </div>
    <span class="text-[#ccc]">{{ name }}</span>
    <span v-if="soon" class="text-[10px] text-[var(--color-text-dim)]">{{ $t('engine.soon') }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  abbr: string
  name: string
  color: string
  soon?: boolean
}>()
</script>
