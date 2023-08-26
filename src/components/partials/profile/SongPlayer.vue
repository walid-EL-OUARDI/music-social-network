<template>
  <div class="rounded">
    <div id="aplayer"></div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import "aplayer/dist/APlayer.min.css";
import { useSongStore } from "@/stores/useSongStore.js";
const songStore = useSongStore();
let songsList = [];

import APlayer from "aplayer";
onMounted(() => {
  mapSongs();
  thePlayer();
});
const mapSongs = () => {
  let newSongs = songStore.songs.map(function (song) {
    return {
      name: song.title,
      artist: songStore.artistName,
      url:
        import.meta.env.VITE_VUE_APP_BACKEND_URL +
        "songs/" +
        songStore.artistId +
        "/" +
        song.song,
    };
  });
  // console.log(newSongs);
  // songsList = newSongs;

  for (let i = 0; i < newSongs.length; i++) {
    songsList.push(newSongs[i]);
  }

  // console.log(songsList);
  // thePlayer();
};

const thePlayer = () => {
  new APlayer({
    container: document.getElementById("aplayer"),
    audio: songsList,
  });
};
</script>
