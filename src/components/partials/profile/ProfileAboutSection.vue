<template>
  <div class="py-2">
    <p class="text-gray-900 text-lg">
      <b>About me</b>
    </p>
    <p class="text-md md:text-lg text-gray-600 leading-normal">
      {{ userDescription }}
    </p>
  </div>
</template>
<script setup>
import { useUserStore } from "@/stores/useUserStore.js";
const userStore = useUserStore();
const userDescription = userStore.description;
</script>
