<template>
  <TopNavigation />
  <div class="mt-20">
    <div class="container max-w-4xl mx-auto flex mt-10">
      <div class="w-1/3">
        <img
          class="w-full rounded-lg h-auto shadow-lg"
          src="https://placehold.co/500"
          alt="Profile Pic"
        />
      </div>
      <div class="w-full pl-4">
        <div class="flex">
          <div class="w-1/2">
            <h1 class="text-2xl md:text-4xl test-left text-gray-900">Walid</h1>
            <span class="text-md text-gray-700"> Morocco, Agadir </span>
          </div>
          <div class="w-1/2 flex justify-end items-center">
            <RouterLinkBtn btnText="Edit Profile" url="/profile/edit-profile" color="green" />
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
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import ProfileInfoSection from "@/components/partials/Profile/ProfileInfoSection.vue";
import ProfileAboutSection from "@/components/partials/Profile/ProfileAboutSection.vue";
import RouterLinkBtn from "@/components/global/RouterLinkBtn.vue";
import SongsSection from "@/components/partials/Profile/SongsSection.vue";
import YoutubeVideosSection from "@/components/partials/Profile/YoutubeVideosSection.vue";
import PostsSection from "@/components/partials/Profile/PostsSection.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
</script>
