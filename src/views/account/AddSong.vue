<template>
  <TopNavigation />
  <div class="container max-w-4xl mx-auto mt-20">
    <div class="text-gray-900 font-bold text-xl">Add song</div>
    <div class="bg-green-500 w-full h-1"></div>
    <TextInput
      label="Song Title"
      placeHolder="Your Song Title"
      v-model:input="songTitle"
      inputType="text"
      :error="errors.title ? errors.title[0] : ''"
    />
    <div class="mt-4">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        Select Image
      </label>

      <div class="mb-3 w-full">
        <input
          class="w-full border border-gray-300"
          type="file"
          ref="file"
          @change="getUplodedFile"
        />
      </div>
    </div>
    <div class="px-3 flex justify-end mb-4">
      <SubmitFormBtn btnText="Add Song" @click="storeSong" />
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import Sawl from "@/sweetalert2.js";
import TextInput from "@/components/global/TextInput.vue";
import SubmitFormBtn from "@/components/global/SubmitFormBtn.vue";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import { useUserStore } from "@/stores/useUserStore.js";
import { useSongStore } from "@/stores/useSongStore.js";
const userStore = useUserStore();
const songStore = useSongStore();
let songTitle = ref(null);
let file = ref(null);
let song = ref(null);
let errors = ref([]);
const getUplodedFile = () => {
  song.value = file.value.files[0];
  console.log(song.value);
};

const storeSong = async () => {
  errors.value = [];
  if (!song.value) {
    Sawl.fire(
      "Opps, something went wrong!",
      "You forgot to upload the mp3 file!",
      "warning"
    );
  }
  let songData = new FormData();
  songData.append("user_id", userStore.id);
  songData.append("title", songTitle.value || "");
  songData.append("song", song.value);
  try {
    let res = await axios.post("song", songData);
    console.log(res);
    songStore.fetchSong(userStore.id);
  } catch (err) {
    errors.value = err.response.data.errors;
    // console.log(errors.value.title[0]);
  }
};
</script>
