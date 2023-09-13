<template>
  <TopNavigation />
  <div class="container max-w-4xl mx-auto mt-28   px-2 flex-grow ">
    <div class="text-gray-900 font-bold text-xl">Add Youtube Video</div>
    <div class="bg-green-500 w-full h-1"></div>
    <TextInput
      label="Youtube Video Title"
      placeHolder="Your Youtube Video Title"
      v-model:input="youtubeVideoTitle"
      inputType="text"
      :error="errors.title ? errors.title[0] : ''"
    />
    <TextInput
      label="Video URL"
      placeHolder="Your Youtube Video Code"
      v-model:input="videoCode"
      inputType="text"
      :error="errors.video_url ? errors.video_url[0] : ''"
    />
    <div class="px-3 flex justify-end mt-5 mb-10 ">
      <SubmitFormBtn btnText="Add Video" @click="addYoutubeVideoLink" />
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import TextInput from "@/components/global/TextInput.vue";
import SubmitFormBtn from "@/components/global/SubmitFormBtn.vue";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import Swal from "@/sweetalert2.js";
import { useRouter } from "vue-router";
import { useVideoStore } from "@/stores/useVideoStore.js";
import { useUserStore } from "@/stores/useUserStore.js";
const router = useRouter();
const videoStore = useVideoStore();
const userStore = useUserStore();
const youtubeVideoTitle = ref(null);
const videoCode = ref(null);
const errors = ref([]);

const addYoutubeVideoLink = async () => {
  errors.value = [];
  let videoData = new FormData();
  videoData.append("user_id", userStore.id);
  videoData.append("title", youtubeVideoTitle.value || "");
  videoData.append("video_url", videoCode.value || "");
  try {
    await axios.post("video", videoData);
    // console.log(res);
    videoStore.fetchvideo(userStore.id);
    Swal.fire(
      "New video added!",
      'You added a video with the name "' + youtubeVideoTitle.value + '"',
      "success"
    );
    router.push("/profile");
  } catch (err) {
    console.log(err);
    errors.value = err.response.data.errors;
  }
};
</script>
