<template>
  <TopNavigation />
  <div class="container max-w-4xl mx-auto mt-20 mb-[166px]">
    <div class="text-gray-900 font-bold text-xl">Delete Youtube Video</div>
    <div class="bg-green-500 w-full h-1"></div>
    <div class="">
      <div class="w-3/4 mr-auto mt-2 text-lg p-1 text-gray-900">
        1.this is a youtube Video
      </div>
      <iframe
        class="w-1/3 h-60"
        src="https://www.youtube.com/embed/5KOw4WVV2Og"
      ></iframe>

      <div class="w-1/4 ml-auto p-1">
        <button
          class="flex justify-end bg-transparent hover:bg-red-500 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
</script>
