import axios from "axios";
import { defineStore } from "pinia";

export const useSongStore = defineStore("song", {
  state: () => ({
    artistId: null,
    artistName: null,
    songs: [],
  }),
  actions: {
    async fetchSong(userId) {
      let res = await axios.get("songs/" + userId);
      console.log(res.data);
      this.$state.artistId = res.data.artist_id;
      this.$state.artistName = res.data.artist_name;
      if (res.data.songs) {
        this.$state.songs = res.data.songs;
      }
    },
  },
  persist: true,
});