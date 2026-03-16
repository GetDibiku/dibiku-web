<template>
  <div class="font-mono text-[13px] leading-[1.7]">
    <div v-for="(line, i) in lines" :key="i" class="flex min-h-[22px]">
      <span class="text-[var(--color-text-dim)] w-7 text-right mr-4 shrink-0 select-none">{{ i + 1 }}</span>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-html="getColoredLine(i)" />
    </div>
  </div>
</template>

<script setup lang="ts">
const lines = [
  'SELECT u.name, COUNT(o.id) as orders',
  'FROM users u',
  'LEFT JOIN orders o ON o.user_id = u.id',
  "WHERE u.created_at > '2026-01-01'",
  'GROUP BY u.name',
  'ORDER BY orders DESC',
  'LIMIT 10;',
]

const visibleChars = ref(0)
const totalChars = lines.join('\n').length
let timer: ReturnType<typeof setInterval>

onMounted(() => {
  timer = setInterval(() => {
    if (visibleChars.value >= totalChars) {
      clearInterval(timer)
      return
    }
    visibleChars.value++
  }, 25)
})

onUnmounted(() => clearInterval(timer))

function getColoredLine(lineIndex: number): string {
  let charsBefore = 0
  for (let i = 0; i < lineIndex; i++) {
    charsBefore += lines[i].length + 1
  }

  const visible = Math.max(0, Math.min(lines[lineIndex].length, visibleChars.value - charsBefore))
  let text = lines[lineIndex].slice(0, visible)

  if (visible === 0) return ''

  const keywords = ['SELECT', 'FROM', 'LEFT JOIN', 'WHERE', 'GROUP BY', 'ORDER BY', 'LIMIT', 'ON', 'AS', 'COUNT', 'DESC']
  keywords.forEach(kw => {
    text = text.replace(new RegExp(`\\b${kw}\\b`, 'g'), `<span style="color:#C586C0">${kw}</span>`)
  })
  text = text.replace(/'[^']*'/g, m => `<span style="color:#CE9178">${m}</span>`)
  text = text.replace(/\b(u|o)\./g, '<span style="color:#9CDCFE">$1</span>.')
  text = text.replace(/\b(name|id|orders|user_id|created_at)\b/g, '<span style="color:#9CDCFE">$1</span>')

  const isAtCursor = visible < lines[lineIndex].length && visible === visibleChars.value - charsBefore
  if (isAtCursor) {
    text += '<span style="border-left:2px solid var(--color-accent);animation:blink 1s step-end infinite">&nbsp;</span>'
  }

  return text
}
</script>
