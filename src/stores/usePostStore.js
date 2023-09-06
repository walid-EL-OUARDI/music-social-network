import axios from "axios";
import { defineStore } from "pinia";

export const usePostStore = defineStore("post", {
  state: () => ({
    posts: [],
    post: [],
  }),
  actions: {
    async fetchPosts(userId) {
      // console.log(userId);
      let res = await axios.get("posts/" + userId);
      console.log(res.data);
      this.$state.posts = res.data.posts;

      this.$state.posts.forEach((post) => {
        post.image =
          import.meta.env.VITE_VUE_APP_BACKEND_URL +
          "postsImages/" +
          post.image;
      });
    },
    async postById(postId) {
      let res = await axios.get("post/" + postId);
      // console.log(res.data);
      this.$state.post = res.data.post;

      this.$state.post.forEach((post) => {
        post.image =
          import.meta.env.VITE_VUE_APP_BACKEND_URL +
          "postsImages/" +
          post.image;
      });
    },
  },
  persist: true,
});
