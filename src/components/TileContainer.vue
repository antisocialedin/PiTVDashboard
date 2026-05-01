<script setup>
import Tile from "./Tile.vue"
import { useRoute } from "vue-router"

const env = import.meta.env
const route = useRoute()
const isLocal = route.query.local === "true"

const jellyfinUrl = isLocal
  ? env.VITE_JELLYFIN_URL_LOCAL
  : env.VITE_JELLYFIN_URL
const audiobookShelfUrl = isLocal
  ? env.VITE_AUDIOBOOKSHELF_URL_LOCAL
  : env.VITE_AUDIOBOOKSHELF_URL

let jellyfinTile = false
if (jellyfinUrl) {
  jellyfinTile = {
    id: "jellyfin",
    href: jellyfinUrl,
    logo: "/jellyfinLogo.png",
    color: "bg-[#4E83D1]/40"
  }
}
const tiles = [
  {
    id: "netflix",
    href: "https://www.netflix.com",
    logo: "/netflixLogo.png",
    color: "bg-[#8E0000]/30"
  },
  {
    id: "primeVideo",
    href: "https://www.primevideo.com",
    logo: "/primeVideoLogo.webp",
    color: "bg-[#2897D3]/20"
  },
  {
    id: "disneyPlus",
    href: "https://www.disneyplus.com",
    logo: "/disneyLogo.png",
    color: "bg-[#010340]/30"
  },
  {
    id: "appleTv",
    href: "https://tv.apple.com",
    logo: "/appleTvPlusLogo.svg",
    color: "bg-[#000000]/30"
  },
  {
    id: "now",
    href: "https://www.nowtv.it",
    logo: "/nowTvLogo.png",
    color: "bg-[#007B83]/20"
  },
  {
    id: "raiPlay",
    href: "https://www.raiplay.it",
    logo: "/raiPlayLogo.png",
    color: "bg-[#009FF9]/20"
  },
  {
    id: "youtube",
    href: "https://www.youtube.com",
    logo: "/youtubeLogo.png",
    color: "bg-[#E32C27]/30"
  },
  {
    id: "plutoTv",
    href: "https://pluto.tv/it/live-tv?lang=en",
    logo: "/plutoTVLogo.png",
    color: "bg-[#FFF202]/20"
  },
  {
    id: "twitch",
    href: "https://twitch.tv",
    logo: "/twitchLogo.png",
    color: "bg-[#65459B]/20"
  },
  {
    id: "spotify",
    href: "https://open.spotify.com",
    logo: "/spotifyLogo.png",
    color: "bg-[#16D860]/20"
  }
]

if (jellyfinUrl) {
  const jellyfinTile = {
    id: "jellyfin",
    href: jellyfinUrl,
    logo: "/jellyfinLogo.png",
    color: "bg-[#4E83D1]/40"
  }
  tiles.unshift(jellyfinTile)
}
if (audiobookShelfUrl) {
  const audiobookShelfTile = {
    id: "audiobookShelf",
    href: audiobookShelfUrl,
    logo: "/audioBookLogo.svg",
    color: "bg-[#CD9D49]/30"
  }
  tiles.push(audiobookShelfTile)
}

let tvMode = false
window.addEventListener("keydown", event => {
  switch (event.key) {
    case "ArrowUp":
      if (!tvMode) {
        tvMode = true
      } else {
        // Select the upper Tile
      }
      break
    case "ArrowDown":
      if (!tvMode) {
        tvMode = true
      } else {
        // Select the Tile below
      }
      break
    case "ArrowLeft":
      if (!tvMode) {
        tvMode = true
      } else {
        // Select the Tile on the left
      }
      break
    case "ArrowRight":
      if (!tvMode) {
        tvMode = true
      } else {
        // Select the Tile on the right
      }
      break
    case "Enter":
      if (tvMode) {
        // TODO - Click on the current selected Tile
      }
      break
    default:
      break
  }
})
</script>

<template>
  <div>
    <div class="flex flex-wrap justify-center gap-2 container mb-10">
      <Tile
        v-for="item in tiles"
        :href="item.href"
        :color="item.color"
        :logo="item.logo"
        :key="item.id"
      />
    </div>
  </div>
</template>
