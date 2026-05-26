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
  <a ref="rootEl" :href="href">
    <div
      style="
        width: 300px;
        height: 170px;
        border-radius: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        overflow: hidden;
      "
      :class="color"
    >
      <img
        :src="logo"
        style="
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        "
      />
    </div>
  </a>
</template>
