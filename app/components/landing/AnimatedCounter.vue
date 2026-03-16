<template>
  <span>{{ display }}{{ suffix }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  target: number
  suffix: string
  active: boolean
}>()

const display = ref(0)

watch(() => props.active, (val) => {
  if (!val) return
  const duration = 2000
  const start = Date.now()
  const tick = () => {
    const elapsed = Date.now() - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    display.value = Math.round(props.target * eased)
    if (progress < 1) requestAnimationFrame(tick)
  }
  tick()
})
</script>
