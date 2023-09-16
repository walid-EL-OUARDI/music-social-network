<template>
  <TopNavigation />
  <div class="flex-grow w-full">
    <div class="w-1/2 mx-auto container bg-gray-900 p-4 mt-28 mb-20 rounded-md">
      <div class="mb-4 text-gray-200">
        <p class="text-xl font-bold mb-2">
          Hello {{ userStore.firstName }} {{ userStore.lastName }},
        </p>
        <p class="text-lg leading-7">
          You have Successfully Verified Your Email, And Activate your Account
        </p>
      </div>
      <div class="">
        <router-link
          to="/profile"
          class="bg-gray-600 hover:bg-gray-500 rounded-md text-white px-4 py-2 text-center text-xl"
        >
          Go Back To Your Profile
        </router-link>
      </div>
      <div />
    </div>
  </div>
  <FooterSection />
</template>
<script setup>
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import axios from "axios";
import { onMounted } from "vue";
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

onMounted(async () => {
  await verifyEmail();
});
const verifyEmail = async () => {
  try {
    await axios.post(
      "verify-email/" + route.params.id + "/" + route.params.hash
    );
    userStore.fetchUser();
  } catch (err) {
    console.log(err);
  }
};
</script>
