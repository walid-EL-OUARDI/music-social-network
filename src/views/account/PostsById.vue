<template>
  <TopNavigation />
  <div class="container mx-auto max-w-4xl py-6 px-3 mt-20">
    <div class="text-gray-900 text-xl">Post By ID</div>
    <div class="bg-green-500 w-full h-1 mb-4"></div>

    <div class="mx-auto">
      <div class="my-4">
        <div class="flex items-center py-2">
          <router-link to="'">
            <img
              src="https://placehold.co/500"
              class="rounded-full"
              width="50"
            />
          </router-link>
          <div class="ml-2 font-bold text-2xl">
            <router-link to="">Name Here </router-link>
          </div>
        </div>
        <img class="w-full" src="https://placehold.co/500" alt="" />
        <div class="p-4">
          <p class="text-3xl font-bold hover:text-gray-700 pb-4">
            This is a title
          </p>
          <p class="py-2 text-lg">Event Location: London</p>
          <p class="pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            nostrum.
          </p>
        </div>
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
</script>
