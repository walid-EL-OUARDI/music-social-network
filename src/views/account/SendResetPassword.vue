<template>
  <TopNavigation />
  <div class="flex-grow w-full">
    <div class="flex justify-center mt-20 w-full">
      <div class="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[35%] my-4">
        <div class="bg-gray-900 rounded-md p-8 mb-2">
          <form @submit.prevent>
            <h1 class="mb-6 text-gray-100 font-semibold text-2xl">
              Reset Your Password
            </h1>
            <div class="mb-4">
              <TextInput
                label="email"
                inputType="email"
                placeHolder="Your email"
                :error="error.email ? error.email[0] : ''"
                :labelColor="false"
                v-model:input="email"
              />
            </div>
            <button
              v-if="!processing"
              class="block w-full bg-green-600 text-white rounded-sm py-3 text-xl hover:bg-green-500 tracking-wide"
              type="submit"
              @click="sendPasswordResetLink"
            >
              Send Password Reset Link
            </button>
            <div v-if="processing" class="bg-green-600">
              <ProcessingIcone />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <FooterSection />
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import TextInput from "@/components/global/TextInput.vue";
import ProcessingIcone from "@/components/global/ProcessingIcone.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
let email = ref(null);
let error = ref([]);
let processing = ref(false);

const sendPasswordResetLink = async () => {
  error.value = [];
  try {
    processing.value = true;
    let res = await axios.post("send-reset-Password-email", {
      email: email.value,
    });
    processing.value = false;
    console.log(res);
  } catch (err) {
    processing.value = false;
    console.log(err);
    if (err.response.data.errors) {
      error.value = err.response.data.errors;
    }
  }
};
</script>
