<template>
  <TopNavigation />
  <div class="px-2 container max-w-4xl mx-auto mt-28 flex-grow mb-4">
    <div class="text-gray-900 font-bold text-xl">Delete Youtube Video</div>
    <div class="bg-green-500 w-full h-1"></div>
    <div
      class="flex items-center justify-between"
      v-for="(video, index) in videoStore.videos"
      :key="index"
    >
      <div>
        <div class="w-full mr-auto mt-2 text-lg p-1 text-gray-900">
          {{ ++index }}.{{ video.title }}
        </div>
        <iframe class="h-60" :src="video.video_url"></iframe>
      </div>
      <button
        @click="deleteVideo(video)"
        class="flex justify-end bg-transparent hover:bg-red-500 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
      >
        Delete
      </button>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import axios from "axios";
import Swal from "@/sweetalert2.js";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import { useRouter } from "vue-router";
import { useVideoStore } from "@/stores/useVideoStore.js";
import { useUserStore } from "@/stores/useUserStore.js";
import { onMounted } from "vue";
const router = useRouter();
const videoStore = useVideoStore();
const userStore = useUserStore();
// const videos = videoStore.videos;
const deleteVideo = async (video) => {
  Swal.fire({
    title: "Are you sure you want to delete this?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.delete("video/" + video.id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        videoStore.fetchvideo(userStore.id);
        router.push("/profile");
      } catch (err) {
        console.log(err);
      }
    }
  });
};
</script>
