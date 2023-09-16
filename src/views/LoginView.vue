<template>
  <TopNavigation />
  <div class="flex justify-center items-center w-full min-h-screen">
    <div class="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[35%] my-4">
      <div class="bg-gray-900 rounded-md p-8 mb-2">
        <form @submit.prevent>
          <h1 class="mb-6 text-gray-100 font-semibold text-2xl">
            Let's get rocking
          </h1>
          <div class="mb-4">
            <TextInput
              label="email"
              inputType="email"
              placeHolder="Your email"
              :error="errors.email ? errors.email[0] : ''"
              :labelColor="false"
              v-model:input="email"
            />
            <TextInput
              label="password"
              inputType="password"
              placeHolder="Your password"
              :error="errors.password ? errors.password[0] : ''"
              :labelColor="false"
              v-model:input="password"
            />
          </div>
          <button
            v-if="!processing"
            class="block w-full bg-green-600 text-white rounded-sm py-3 text-xl hover:bg-green-500 tracking-wide"
            type="submit"
            @click="login"
          >
            Login
          </button>
          <div v-if="processing" class="bg-green-600">
            <ProcessingIcone />
          </div>
        </form>
      </div>
      <p class="text-center text-xl text-gray-900">
        Don't have an account yet?
        <router-link
          to="register"
          class="text-blue-500 no-underline hover:underline"
        >
          Register
        </router-link>
      </p>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "@/sweetalert2.js";
import TextInput from "../components/global/TextInput.vue";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import ProcessingIcone from "@/components/global/ProcessingIcone.vue";
import { useUserStore } from "../stores/useUserStore";
import { useSongStore } from "../stores/useSongStore";
import { useVideoStore } from "../stores/useVideoStore";
import { usePostStore } from "../stores/usePostStore";
const router = useRouter();
const userStore = useUserStore();
const songStore = useSongStore();
const postStore = usePostStore();
const videoStore = useVideoStore();
let email = ref(null);
let password = ref(null);
let processing = ref(false);
let errors = ref([]);
let incorectLoginData = ref(null);

const login = async () => {
  processing.value = true;
  errors.value = [];
  try {
    let res = await axios.post("login", {
      email: email.value,
      password: password.value,
    });
    // console.log(res);
    axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.token;
    userStore.setUserDetails(res);
    // await profileStore.fetchProfileById(userStore.id);
    await songStore.fetchSong(userStore.id);
    await postStore.fetchPosts(userStore.id);
    await videoStore.fetchvideo(userStore.id);
    processing.value = false;
    router.push("/profile");
  } catch (err) {
    processing.value = false;
    console.log(err);
    if (err.response.data.errors) {
      errors.value = err.response.data.errors;
    }
    if (err.response.data.error) {
      Swal.fire({
        title: "Email or  Password is wrong?",
        text: "Please enter the correct data!",
        icon: "warning",
      });
    }
  }
};
</script>
