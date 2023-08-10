<template>
  <div class="rounded">
    <div id="aplayer"></div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import "aplayer/dist/APlayer.min.css";

import APlayer from "aplayer";
onMounted(() => {
  thePlayer();
});
const thePlayer = () => {
  new APlayer({
    container: document.getElementById("aplayer"),
    audio: [
      {
        name: "cinematic time lapse",
        artist: "Lexin_Music",
        url: "/media/cinematic-time-lapse-115672.mp3",
        cover: "/images/Lexin_Music_photo.webp",
      },
    ],
  });
};
</script>
