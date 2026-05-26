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
  <div
    style="
      width: 250px;
      height: 140px;
      background: red;
      border-radius: 20px;
    "
  ></div>
</template>