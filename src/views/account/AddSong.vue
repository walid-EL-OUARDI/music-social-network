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
      error="error message"
    />
    <div class="mt-4">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        Select Image
      </label>

      <div class="mb-3 w-full">
        <input class="w-full border border-gray-300" type="file" />
      </div>
    </div>
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
const songTitle = ref(null);
</script>
