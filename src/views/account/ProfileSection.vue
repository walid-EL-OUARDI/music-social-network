<template>
  <TopNavigation />
  <div class="mt-20 px-3">
    <div class="container max-w-4xl mx-auto flex">
      <div class="md:w-1/3 w-1/2">
        <img
          class="rounded-lg h-auto shadow-lg"
          :src="image"
          alt="Profile Pic"
        />
      </div>
      <div class="w-full pl-4">
        <div class="flex">
          <div class="w-1/2">
            <h1 class="text-2xl md:text-4xl test-left text-gray-900">
              {{ fullName }}
            </h1>
            <span class="text-md text-gray-700"> {{location}} </span>
          </div>
          <div class="w-1/2 flex justify-end items-center text-center">
            <RouterLinkBtn
              btnText="Edit Profile"
              url="/profile/edit-profile"
              color="green"
            />
          </div>
        </div>
        <ProfileInfoSection />
        <ProfileAboutSection />
      </div>
    </div>
    <SongsSection />
    <YoutubeVideosSection />
    <PostsSection />
  </div>
  <FooterSection />
</template>

<script setup>
import { computed } from "vue";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import ProfileInfoSection from "@/components/partials/Profile/ProfileInfoSection.vue";
import ProfileAboutSection from "@/components/partials/Profile/ProfileAboutSection.vue";
import RouterLinkBtn from "@/components/global/RouterLinkBtn.vue";
import SongsSection from "@/components/partials/Profile/SongsSection.vue";
import YoutubeVideosSection from "@/components/partials/Profile/YoutubeVideosSection.vue";
import PostsSection from "@/components/partials/Profile/PostsSection.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import { useUserStore } from "@/stores/useUserStore.js";
const userStore = useUserStore();
const fullName = computed(() => userStore.firstName + " " + userStore.lastName);
const location = userStore.location;
const image = userStore.image;
</script>
