# PiTV Dashboard

This is a Dashboard that I built using [Vue.js](https://vuejs.org) because I needed a dashboard for my [PiTV](https://blog.mariofragnito.it/en-gb/posts/pitv-my-fire-tv-stick-clone/).

I used `Vue.js` because I never used it and I wanted to explore it.  

This dashboard takes inspiration from the Apple TV UI in order to have a user friendly way of navigating different streaming platforms.  

It's customizable with self hosted applications [Jellyfin](https://jellyfin.org) and [audiobookshelf](https://www.audiobookshelf.org) using `.env` when hosting it.  
It supports the local url and the [Tailscale](https://tailscale.com) url.  
This is because not every device supports [Tailscale](https://tailscale.com).  

```.env
VITE_JELLYFIN_URL=http://tailscale-url:port
VITE_JELLYFIN_URL_LOCAL=http://local-url:port
VITE_AUDIOBOOKSHELF_URL=http://tailscale-url:port
VITE_AUDIOBOOKSHELF_LOCAL=http://local-url:port
```
Using the URL parameter `?local=true` makes the dashboard use the local urls, otherwise it will use the [Tailscale](https://tailscale.com) ones.
