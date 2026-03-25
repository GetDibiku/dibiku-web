<template>
  <div class="max-w-[720px] mx-auto rounded-xl overflow-hidden border border-white/[0.08] bg-[#1e1e1e] shadow-2xl shadow-black/50">
    <!-- Title Bar -->
    <div class="h-10 bg-[#2d2d30] flex items-center px-4 gap-2 border-b border-white/[0.06]">
      <span class="w-3 h-3 rounded-full bg-[#ff5f57]" />
      <span class="w-3 h-3 rounded-full bg-[#ffbd2e]" />
      <span class="w-3 h-3 rounded-full bg-[#28c840]" />
      <span class="flex-1 text-center text-xs text-[var(--color-text-dim)]">
        Dibiku - MySQL Local 3306 : bumilku
      </span>
    </div>

    <!-- Body -->
    <div class="flex p-5 gap-4 text-left">
      <!-- Sidebar -->
      <div class="w-[140px] border-r border-white/[0.06] pr-3 shrink-0 hidden sm:block">
        <div class="text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest mb-1.5">Tables</div>
        <div
          v-for="(table, i) in tables"
          :key="table"
          class="px-2 py-1 text-xs rounded cursor-default"
          :class="i === 0 ? 'bg-[var(--color-accent)]/25 text-white' : 'text-[var(--color-text-muted)]'"
        >
          <span class="text-[var(--color-accent)] mr-1">&#8862;</span>{{ table }}
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 flex flex-col gap-3 min-w-0">
        <div class="bg-white/[0.02] rounded-lg p-4 border border-white/[0.05]">
          <TypewriterSQL />
        </div>
        <MockDataGrid />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TypewriterSQL from './TypewriterSQL.vue'
import MockDataGrid from './MockDataGrid.vue'

const tables = ['users', 'orders', 'products', 'payments', 'sessions']
</script>
