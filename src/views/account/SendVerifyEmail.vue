<template>
  <TopNavigation />
  <div class="flex-grow w-full">
    <div class="w-1/2 mx-auto container bg-gray-900 p-4 mt-28 mb-20 rounded-md">
      <div class="mb-4 text-gray-200">
        <p class="text-xl font-bold mb-2">
          Hello {{ userStore.firstName }} {{ userStore.lastName }},
        </p>
        <p class="text-lg leading-7">
          Please check your Gmail inbox. We've sent you an email containing a
          verification link. Click on the link to confirm your email address and
          activate your account.
        </p>
      </div>
      <div class="">
        <button
          v-if="!processing"
          @click="sendVerificationEmail"
          class="bg-gray-600 hover:bg-gray-500 rounded-md text-white px-4 py-2 text-center text-xl"
        >
          Resend Verification Email
        </button>
        <div v-if="processing">
          <ProcessingIcone class="bg-gray-900 w-10" />
        </div>
      </div>
    </div>
  </div>
  <FooterSection />
</template>
<script setup>
import { ref } from "vue";
import Swal from "@/sweetalert2.js";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import ProcessingIcone from "@/components/global/ProcessingIcone.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "vue-router";
import axios from "axios";
const userStore = useUserStore();
const router = useRouter();
const processing = ref(false);
const sendVerificationEmail = async () => {
  try {
    processing.value = true;
    await axios.get("email/verify/" + userStore.email);
    processing.value = false;
    Swal.fire({
      title: "Check your Gmail inbox",
      icon: "success",
    });
  } catch (err) {
    processing.value = false;
    console.log(err);
    Swal.fire({
      title: "Somthing went wrong !!",
      icon: "warning",
    });
  }
};
</script>
