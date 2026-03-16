<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <!-- Zap -->
    <template v-if="name === 'zap'">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </template>

    <!-- Feather -->
    <template v-else-if="name === 'feather'">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" />
      <line x1="17.5" y1="15" x2="9" y2="15" />
    </template>

    <!-- Shield -->
    <template v-else-if="name === 'shield'">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </template>

    <!-- Keyboard -->
    <template v-else-if="name === 'keyboard'">
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
      <line x1="6" y1="8" x2="6" y2="8" stroke-width="2.5" />
      <line x1="10" y1="8" x2="10" y2="8" stroke-width="2.5" />
      <line x1="14" y1="8" x2="14" y2="8" stroke-width="2.5" />
      <line x1="18" y1="8" x2="18" y2="8" stroke-width="2.5" />
      <line x1="6" y1="12" x2="6" y2="12" stroke-width="2.5" />
      <line x1="10" y1="12" x2="10" y2="12" stroke-width="2.5" />
      <line x1="14" y1="12" x2="14" y2="12" stroke-width="2.5" />
      <line x1="18" y1="12" x2="18" y2="12" stroke-width="2.5" />
      <line x1="8" y1="16" x2="16" y2="16" />
    </template>

    <!-- Database -->
    <template v-else-if="name === 'database'">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </template>

    <!-- Code -->
    <template v-else-if="name === 'code'">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" stroke-opacity="0.4" />
    </template>

    <!-- Edit (pencil + table) -->
    <template v-else-if="name === 'edit'">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </template>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  color: string
  size: number
}>()
</script>
