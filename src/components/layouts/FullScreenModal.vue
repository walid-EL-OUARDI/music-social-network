<template>
  <button
    @click="open = !open"
    class="hover:bg-green-400 text-white font-semibold py-1 px-2 rounded"
  >
    <i class="fa-solid fa-bars fa-2xl"></i>
  </button>
  <div
    @click="open = false"
    class="bg-black duration-500 bg-opacity-80 absolute w-full h-screen inset-0"
    :class="[open ? 'translate-y-0' : '-translate-y-full']"
  >
    <div class="fixed right-1/2 top-28 translate-x-1/2 border-white">
      <p class="text-4xl text-center text-white font-bold mb-2">Menu</p>
      <div class="flex flex-col">
        <RouterLinkBtn
          v-if="!userStore.id"
          class="w-full text-white text-center text-lg mt-3"
          btnText="Login"
          color="green"
          url="/login"
        />

        <RouterLinkBtn
          v-if="!userStore.id"
          @click="open = !open"
          class="w-full text-white text-center text-lg mt-3"
          btnText="Register"
          color="green"
          url="/register"
        />

        <RouterLinkBtn
          v-if="userStore.id"
          @click="open = !open"
          class="w-full text-white text-center text-lg mt-3"
          btnText="Profile"
          color="green"
          url="/profile"
        />

        <RouterLinkBtn
          v-if="userStore.id"
          @click="open = !open"
          class="w-full text-white text-center text-lg mt-3"
          btnText="Posts"
          color="green"
          url="/profile/posts"
        />

        <RouterLinkBtn
          v-if="userStore.id"
          @click="logout"
          class="w-full text-white text-center text-lg mt-3"
          btnText="Logout"
          color="green"
          url=""
        />

        <RouterLinkBtn
          @click="open = !open"
          class="w-full text-white text-center text-lg mt-4"
          btnText="Close"
          color="red"
          url=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import RouterLinkBtn from "../global/RouterLinkBtn.vue";
const open = ref(false);
import { useUserStore } from "@/stores/useUserStore.js";
import { usePostStore } from "@/stores/usePostStore.js";
import { useSongStore } from "@/stores/useSongStore.js";
import { useVideoStore } from "@/stores/useVideoStore.js";
const router = useRouter();
const userStore = useUserStore();
const songStore = useSongStore();
const postStore = usePostStore();
const videoStore = useVideoStore();

const logout = async () => {
  try {
    let res = await axios.post("logout");
    console.log(res.data);

    userStore.clearUser();
    songStore.clearSongs();
    postStore.clearPosts();
    videoStore.clearVideos();

    router.push("/");
    // window.localStorage.clear();
  } catch (err) {
    console.log(err);
  }
};
</script>
