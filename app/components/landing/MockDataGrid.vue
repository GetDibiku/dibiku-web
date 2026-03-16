<template>
  <div class="rounded-lg overflow-hidden border border-white/[0.08] text-xs font-mono text-left">
    <!-- Header -->
    <div class="flex bg-white/[0.04] border-b border-white/[0.08]">
      <div
        v-for="col in columns"
        :key="col.name"
        class="px-3 py-2 text-left text-[var(--color-text-muted)] font-medium border-r border-white/[0.05]"
        :class="col.wide ? 'flex-[2]' : 'flex-1'"
      >
        {{ col.name }}
      </div>
    </div>

    <!-- Rows -->
    <div
      v-for="(row, ri) in rows"
      :key="ri"
      class="flex border-b border-white/[0.04]"
      :class="ri % 2 === 1 ? 'bg-white/[0.015]' : ''"
    >
      <div
        v-for="(cell, ci) in row"
        :key="ci"
        class="px-3 py-1.5 text-left border-r border-white/[0.05] truncate"
        :class="[
          columns[ci]?.wide ? 'flex-[2]' : 'flex-1',
          cell.color,
        ]"
      >
        <span
          v-if="cell.isNull"
          class="bg-white/[0.06] px-1.5 py-0.5 rounded text-[10px] italic text-[var(--color-text-dim)]"
        >NULL</span>
        <template v-else>{{ cell.value }}</template>
      </div>
    </div>

    <!-- Footer -->
    <div class="px-3 py-1.5 text-[11px] text-[var(--color-text-dim)] flex justify-between">
      <span>5 rows in 12ms</span>
      <span>Cmd+Enter to execute</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const columns = [
  { name: 'id', wide: false },
  { name: 'name', wide: false },
  { name: 'email', wide: true },
  { name: 'orders', wide: false },
  { name: 'created_at', wide: false },
]

const rows = [
  [
    { value: '1', color: 'text-[#b5cea8]' },
    { value: 'Andi Pratama', color: 'text-[#ccc]' },
    { value: 'andi@mail.com', color: 'text-[#ccc]' },
    { value: '47', color: 'text-[#b5cea8]' },
    { value: '2026-01-15', color: 'text-[#ce9178]' },
  ],
  [
    { value: '2', color: 'text-[#b5cea8]' },
    { value: 'Siti Nurhaliza', color: 'text-[#ccc]' },
    { value: 'siti@mail.com', color: 'text-[#ccc]' },
    { value: '38', color: 'text-[#b5cea8]' },
    { value: '2026-01-22', color: 'text-[#ce9178]' },
  ],
  [
    { value: '3', color: 'text-[#b5cea8]' },
    { value: 'Budi Santoso', color: 'text-[#ccc]' },
    { value: 'budi@mail.com', color: 'text-[#ccc]' },
    { value: '', color: '', isNull: true },
    { value: '2026-02-03', color: 'text-[#ce9178]' },
  ],
  [
    { value: '4', color: 'text-[#b5cea8]' },
    { value: 'Dewi Kartika', color: 'text-[#ccc]' },
    { value: 'dewi@mail.com', color: 'text-[#ccc]' },
    { value: '29', color: 'text-[#b5cea8]' },
    { value: '2026-02-14', color: 'text-[#ce9178]' },
  ],
  [
    { value: '5', color: 'text-[#b5cea8]' },
    { value: 'Rizky Fauzan', color: 'text-[#ccc]' },
    { value: 'rizky@mail.com', color: 'text-[#ccc]' },
    { value: '15', color: 'text-[#b5cea8]' },
    { value: '2026-03-01', color: 'text-[#ce9178]' },
  ],
]
</script>
