<template>
  <TopNavigation />
  <div class="container max-w-4xl mx-auto mt-20 mb-[166px]">
    <div class="text-gray-900 font-bold text-xl">Delete Song</div>
    <div class="bg-green-500 w-full h-1"></div>
    <div class="">
      <div class="w-3/4 mr-auto mt-2 text-lg p-1 text-gray-900">
        <div
          v-for="(song, index) in userSongs"
          :key="index"
          class="flex items-center"
        >
          <div>{{ ++index }}. {{ song.title }}</div>
          <div class="w-1/4 ml-auto p-1">
            <button
              @click="deleteSong(song)"
              class="flex justify-end bg-transparent hover:bg-red-500 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import Swal from "@/sweetalert2.js";
import { useRouter } from "vue-router";
const router = useRouter();

import { useSongStore } from "@/stores/useSongStore.js";
import axios from "axios";
const songStore = useSongStore();
const userSongs = songStore.songs;

const deleteSong = async (song) => {
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
        await axios.delete("song/" + song.id);
        songStore.fetchSong(song.user_id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        router.push("/profile");
      } catch (err) {
        console.log(err);
      }
    }
  });
};
</script>
