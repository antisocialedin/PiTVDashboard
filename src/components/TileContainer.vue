<script setup>
import { onMounted, onUnmounted, ref } from "vue"
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
const tileRefs = ref([])

const tvMode = ref(false)
const selectedIndex = ref(-1)
const getTileElement = index => {
  const tile = tileRefs.value[index]
  if (!tile) return null
  return tile.rootEl
}
const getTileCenter = index => {
  const el = getTileElement(index)
  if (!el) return null
  const rect = el.getBoundingClientRect()
  return {
    index,
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    bottom: rect.bottom
  }
}

const scrollToSelectedTile = () => {
  const el = getTileElement(selectedIndex.value)
  if (!el) return
  el.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center"
  })
}
const findNextIndex = direction => {
  const current = getTileCenter(selectedIndex.value)
  if (!current) return selectedIndex.value

  const candidates = tiles
    .map((_, index) => getTileCenter(index))
    .filter(Boolean)
    .filter(tile => tile.index !== current.index)
    .filter(tile => {
      if (direction === "right") return tile.x > current.x
      if (direction === "left") return tile.x < current.x
      if (direction === "down") return tile.y > current.y
      if (direction === "up") return tile.y < current.y
    })

  const score = (candidate, current, direction) => {
    const horizontalDistance = Math.abs(candidate.x - current.x)
    const verticalDistance = Math.abs(candidate.y - current.y)

    if (direction === "left" || direction === "right") {
      return horizontalDistance + verticalDistance * 2
    }
    if (direction === "up" || direction === "down") {
      return verticalDistance + horizontalDistance * 2
    }
    return Infinity
  }

  if (!candidates.length) return selectedIndex.value
  candidates.sort(
    (a, b) => score(a, current, direction) - score(b, current, direction)
  )
  return candidates[0].index
}

const activateSelectedTile = () => {
  const el = getTileElement(selectedIndex.value)
  if (!el) return
  el.click()
}

const handleKeyDown = ev => {
  let index = selectedIndex.value
  switch (ev.key) {
    case "ArrowUp":
    case "ArrowDown":
    case "ArrowLeft":
    case "ArrowRight":
      ev.preventDefault()
      if (!tvMode.value) {
        tvMode.value = true
        selectedIndex.value = 0
      } else {
        switch (ev.key) {
          case "ArrowUp":
            index = findNextIndex("up")
            selectedIndex.value = index
            scrollToSelectedTile()
            break
          case "ArrowDown":
            index = findNextIndex("down")
            selectedIndex.value = index
            scrollToSelectedTile()
            break
          case "ArrowLeft":
            index = findNextIndex("left")
            selectedIndex.value = index
            scrollToSelectedTile()
            break
          case "ArrowRight":
            index = findNextIndex("right")
            selectedIndex.value = index
            scrollToSelectedTile()
            break
        }
      }
      break
    case "Enter":
      if (tvMode.value) {
        ev.preventDefault()
        activateSelectedTile()
      }
      break
    case "Escape":
      ev.preventDefault()
      if (tvMode.value) {
        tvMode.value = false
        selectedIndex.value = -1
      }
      break
  }
}
onMounted(() => {
  window.addEventListener("keydown", handleKeyDown)
})
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown)
})
</script>

<template>
  <div>
    <div
      class="grid grid-cols-4 gap-6 w-full max-w-[1500px] px-6 mb-10"
    >
      <Tile
        v-for="(tile, index) in tiles"
        :href="tile.href"
        :color="tile.color"
        :logo="tile.logo"
        :key="tile.id"
        :selected="index === selectedIndex"
        :ref="el => (tileRefs[index] = el)"
      />
    </div>
  </div>
</template>
