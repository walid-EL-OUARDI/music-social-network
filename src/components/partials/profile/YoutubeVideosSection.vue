<template>
  <div>
    <div class="max-w-4xl mx-auto py-4">
      <div class="font-bold text-gray-100">
        <div class="text-gray-900 text-xl">Videos</div>
        <div class="bg-green-500 w-full h-1"></div>

        <div class="flex justify-end w-full mt-4">
          <RouterLinkBtn
            class="mr-2"
            btnText="Add Youtube Video"
            color="green"
            url="/profile/add-youtube-video"
          />
          <RouterLinkBtn
            class="hover:bg-red-500"
            btnText="Delete Youtube Video"
            color=""
            url="/profile/delete-youtube-video"
          />
        </div>
        <div class="flex flex-wrap mb-4">
          <div
            class="my-1 px-1 w-full md:w-1/2"
            v-for="video in videoStore.videos"
            :key="video"
          >
            <div class="text-xl text-gray-900">{{ video.title }}</div>
            <iframe class="w-full h-60" :src="video.video_url"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RouterLinkBtn from "../../global/RouterLinkBtn.vue";
import { useVideoStore } from "@/stores/useVideoStore.js";
import { useUserStore } from "@/stores/useUserStore.js";
const videoStore = useVideoStore();
const userStore = useUserStore();
</script>
