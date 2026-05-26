<script setup>
const { logo, href } = defineProps(["logo", "href"])
</script>

<template>
  <a
    :href="href"
    style="
      text-decoration: none;
      display: flex;
      justify-content: center;
    "
  >
    <div
      style="
        width: 250px;
        height: 140px;
        border-radius: 20px;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        padding: 20px;
        backdrop-filter: blur(20px);
      "
    >
      <img
        :src="logo"
        style="
          width: 100%;
          height: 100%;
          object-fit: contain;
        "
      />
    </div>
  </a>
</template>