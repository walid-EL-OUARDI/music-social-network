import axios from "axios";
import { defineStore } from "pinia";

export const useVideoStore = defineStore("video", {
  state: () => ({
    videos: null,
  }),
  actions: {
    async fetchvideo(userId) {
      console.log(userId);
      let res = await axios.get("video/" + userId);
      console.log(res.data);
      this.$state.videos = res.data.videos;
    },
    clearVideos() {
      this.$state.videos = null;
    },
  },
  persist: true,
});
