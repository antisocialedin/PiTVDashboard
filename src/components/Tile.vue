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
      :class="[
        color,
        selected
          ? 'scale-[1.04] ring-4 ring-white shadow-xl z-20'
          : 'scale-100'
      ]"
      class="w-[300px] h-[170px] rounded-2xl backdrop-blur-2xl border border-white/20 hover:scale-[1.04] transition-all shadow-sm p-5 flex justify-center items-center overflow-hidden"
    >
      <img
        :src="logo"
        class="max-w-[80%] max-h-[80%] object-contain"
      />
    </div>
  </a>
</template>
