<script setup>
import { ref } from "vue"

const { logo, color, href, selected } = defineProps([
  "logo",
  "color",
  "href",
  "selected"
])

const rootEl = ref(null)
defineExpose({
  rootEl
})
</script>

<template>
  <a
    ref="rootEl"
    :href="href"
    :style="{
      textDecoration: 'none'
    }"
  >
    <div
      :style="{
        width: '280px',
        height: '160px',
        borderRadius: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        overflow: 'hidden',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.2)',
        transition: '0.2s',
        background: 'rgba(255,255,255,0.08)'
      }"
    >
      <img
        :src="logo"
        :style="{
          maxWidth: '80%',
          maxHeight: '80%',
          objectFit: 'contain'
        }"
      />
    </div>
  </a>
</template>