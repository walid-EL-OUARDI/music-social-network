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
                label="New Password"
                inputType="password"
                placeHolder="Your password"
                :error="error.password ? error.password[0] : ''"
                :labelColor="false"
                v-model:input="password"
              />
              <TextInput
                label="comfirm Password"
                inputType="password"
                placeHolder="confirm your password"
                :error="
                  error.confirmed_password ? error.confirmed_password[0] : ''
                "
                :labelColor="false"
                v-model:input="comfirmedPassword"
              />
            </div>
            <button
              v-if="!processing"
              class="block w-full bg-green-600 text-white rounded-sm py-3 text-xl hover:bg-green-500 tracking-wide"
              type="submit"
              @click="resetPassword"
            >
              Reset Password
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
import Swal from "@/sweetalert2.js";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import TextInput from "@/components/global/TextInput.vue";
import ProcessingIcone from "@/components/global/ProcessingIcone.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
let password = ref(null);
let comfirmedPassword = ref(null);
let error = ref([]);
let processing = ref(false);
// console.log(route.query.token);

const resetPassword = async () => {
  error.value = [];
  try {
    processing.value = true;
    let res = await axios
      .post("reset-Password", {
        token: route.query.token,
        password: password.value,
        password_confirmation: comfirmedPassword.value,
      })
      .then(() => {
        Swal.fire({
          title: "Your Password Has Been Updated",
          icon: "success",
        });
        router.push("/profile");
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
