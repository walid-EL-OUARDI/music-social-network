<template>
  <div class="w-full px-4 bg-black fixed top-0 z-20 text-white-200">
    <div
      class="container mx-auto max-w-4xl h-16 flex items-center justify-between text-xs md:text-sm"
    >
      <div class="">
        <RouterLink to="/">
          <div class="text-white text-2xl"><b>MSN</b></div>
        </RouterLink>
      </div>
      <div>
        <FullScreenModal />
      </div>
    </div>
  </div>
</template>
<script setup>
import FullScreenModal from "./FullScreenModal.vue";
</script>
