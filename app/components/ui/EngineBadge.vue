<template>
  <div
    class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm"
    :class="{ 'opacity-40': soon }"
  >
    <div
      class="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[9px] font-bold"
      :style="{ backgroundColor: color, color: needsDarkText ? '#1a1a1a' : '#fff' }"
    >
      {{ abbr }}
    </div>
    <span class="text-[#ccc]">{{ name }}</span>
    <span v-if="soon" class="text-[10px] text-[var(--color-text-dim)]">{{ $t('engine.soon') }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  abbr: string
  name: string
  color: string
  soon?: boolean
}>()

// Light backgrounds need dark text for contrast
const needsDarkText = computed(() => {
  const hex = props.color.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5
})
</script>
