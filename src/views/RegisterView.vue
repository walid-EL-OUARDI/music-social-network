<template>
  <TopNavigation />
  <div class="flex justify-center mt-20 items-center min-h-screen w-full">
    <div class="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[35%] my-4">
      <div class="bg-gray-900 rounded-md p-8 mb-2">
        <form @submit.prevent>
          <h1 class="text-gray-100 font-semibold text-2xl">
            Let's get rocking
          </h1>
          <div class="mb-4">
            <TextInput
              label="FirstName"
              inputType="text"
              placeHolder="Your firstName"
              :error="errors.first_name ? errors.first_name[0] : ''"
              :labelColor="false"
              v-model:input="firstName"
            />
            <TextInput
              label="LasttName"
              inputType="text"
              placeHolder="Your lasttName"
              :error="errors.last_name ? errors.last_name[0] : ''"
              :labelColor="false"
              v-model:input="lastName"
            />
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
            <TextInput
              label="comfirm Password"
              inputType="password"
              placeHolder="confirm your password"
              :error="
                errors.confirmed_password ? errors.confirmed_password[0] : ''
              "
              :labelColor="false"
              v-model:input="comfirmedPassword"
            />
            <button
              class="block w-full bg-green-600 text-white rounded-sm py-3 text-xl hover:bg-green-500 tracking-wide mt-3"
              type="submit"
              @click="register"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <p class="text-center text-xl text-gray-900">
        Already have an account?
        <router-link
          to="login"
          class="text-blue-500 no-underline hover:underline"
        >
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import TextInput from "../components/global/TextInput.vue";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import { useUserStore } from "../stores/useUserStore";
import { useSongStore } from "../stores/useSongStore";
import { useVideoStore } from "../stores/useVideoStore";
import { usePostStore } from "../stores/usePostStore";
const router = useRouter();
const userStore = useUserStore();
const songStore = useSongStore();
const postStore = usePostStore();
const videoStore = useVideoStore();
let firstName = ref(null);
let lastName = ref(null);
let email = ref(null);
let password = ref(null);
let comfirmedPassword = ref(null);
let errors = ref([]);

const register = async () => {
  errors.value = [];
  try {
    let res = await axios
      .post("register", {
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        password: password.value,
        password_confirmation: comfirmedPassword.value,
      })
      .then(async (res) => {
        console.log("Res", res);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + res.data.token;
        userStore.setUserDetails(res);
        // await profileStore.fetchProfileById(userStore.id);
        await songStore.fetchSong(userStore.id);
        await postStore.fetchPosts(userStore.id);
        await videoStore.fetchvideo(userStore.id);
        router.push("/profile");
      });
  } catch (err) {
    console.log("mochkila", err);
    errors.value = err.response.data.errors;
  }
};
</script>
