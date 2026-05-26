<script setup>
import TileContainer from "../components/TileContainer.vue"
import Hero from "../components/Hero.vue"
</script>

<template>
  <div
    style="
      min-height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;
      padding: 20px;
      box-sizing: border-box;
    "
  >
    <Hero />
    <TileContainer />
  </div>
</template>