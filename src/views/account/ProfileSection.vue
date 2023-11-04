<template>
  <TopNavigation />
  <div class="mt-20 px-3">
    <div
      v-if="userStore.email_verified == 0"
      class="container max-w-4xl mx-auto mb-2"
    >
      <div
        class="rounded-md p-2 flex justify-between items-center bg-red-500 text-white w-full"
      >
        <p class="text-xl capitalize">Your account it is not verified</p>
        <button
          v-if="!processing"
          class="bg-slate-600 hover:bg-gray-500 py-2 px-4 rounded-md capitalize"
          @click="sendVerificationEmail"
        >
          click her to verify it
        </button>
        <div v-if="processing">
          <ProcessingIcone class="bg-red-500" />
        </div>
      </div>
    </div>
    <div class="container max-w-4xl mx-auto flex">
      <div class="md:w-1/3 w-1/2">
        <img
          class="rounded-lg h-auto shadow-lg"
          :src="userStore.image"
          alt="Profile Pic"
        />
      </div>
      <div class="w-full pl-4">
        <div class="flex">
          <div class="w-1/2">
            <h1 class="text-2xl md:text-4xl test-left text-gray-900">
              {{ fullName }}
            </h1>
            <span class="text-md text-gray-700"> {{ userStore.location }} </span>
          </div>
          <div class="w-1/2 flex justify-end items-center text-center">
            <RouterLinkBtn
              btnText="Reset Password"
              url="/profile/send-reset-password"
              color="green"
              class="mr-2"
            />
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
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { computed } from "vue";
import Swal from "@/sweetalert2.js";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import ProfileInfoSection from "@/components/partials/Profile/ProfileInfoSection.vue";
import ProfileAboutSection from "@/components/partials/Profile/ProfileAboutSection.vue";
import RouterLinkBtn from "@/components/global/RouterLinkBtn.vue";
import ProcessingIcone from "@/components/global/ProcessingIcone.vue";
import SongsSection from "@/components/partials/Profile/SongsSection.vue";
import YoutubeVideosSection from "@/components/partials/Profile/YoutubeVideosSection.vue";
import PostsSection from "@/components/partials/Profile/PostsSection.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import { useUserStore } from "@/stores/useUserStore.js";
const userStore = useUserStore();
const router = useRouter();
const fullName = computed(() => userStore.firstName + " " + userStore.lastName);
// const location = userStore.location;
// const image = userStore.image;
const processing = ref(false);

const sendVerificationEmail = async () => {
  try {
    processing.value = true;
    await axios.get("email/verify/" + userStore.email);
    processing.value = false;
    router.push("/profile/send-verify-email");
  } catch (err) {
    console.log(err);
    processing.value = false;
    Swal.fire({
      title: "Somthing went wrong !!",
      icon: "warning",
    });
  }
};
</script>
