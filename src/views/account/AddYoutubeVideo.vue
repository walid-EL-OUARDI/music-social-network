<template>
  <TopNavigation />
  <div class="container max-w-4xl mx-auto mt-20">
    <div class="text-gray-900 font-bold text-xl">Add Youtube Video</div>
    <div class="bg-green-500 w-full h-1"></div>
    <TextInput
      label="Youtube Video Title"
      placeHolder="Your Youtube Video Title"
      v-model:input="youtubeVideoTitle"
      inputType="text"
      error="error message"
    />
    <TextInput
      label="Video URL"
      placeHolder="Your Youtube Video Code"
      v-model:input="videoCode"
      inputType="text"
      error="error message"
    />
    <div class="px-3 flex justify-end mb-4">
      <SubmitFormBtn btnText="Add Song" />
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import { ref } from "vue";
import TextInput from "@/components/global/TextInput.vue";
import SubmitFormBtn from "@/components/global/SubmitFormBtn.vue";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
const youtubeVideoTitle = ref(null);
const videoCode = ref(null);
</script>
