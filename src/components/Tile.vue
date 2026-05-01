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
  <a ref="rootEl" :href="href" :class="selected ? 'z-20' : 'z-10'">
    <div
      class="flex justify-center items-center h-50 w-100 xl:w-92 rounded-2xl backdrop-blur-2xl border border-white/20 hover:scale-[1.04] transition-all shadow-sm p-5"
      :class="[
        color,
        selected
          ? 'scale-[1.04] ring-4 ringe-white shadow-xl z-20'
          : 'scale-100'
      ]"
    >
      <img :src="logo" class="h-full" />
    </div>
  </a>
</template>
