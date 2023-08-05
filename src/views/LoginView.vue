<template>
  <div class="flex justify-center items-center w-full min-h-screen">
    <div class="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[35%] my-4">
      <div class="bg-gray-900 rounded-md p-8 mb-2">
        <form action="" method="post">
          <h1 class="mb-6 text-gray-100 font-semibold text-2xl">
            Let's get rocking
          </h1>
          <div class="mb-4">
            <TextInput
              label="email"
              inputType="email"
              placeHolder="Your email"
              error="your error text"
              :labelColor="false"
              v-model:input="email"
            />
            <TextInput
              label="password"
              inputType="password"
              placeHolder="Your password"
              error="your error text"
              :labelColor="false"
              v-model:input="password"
            />
          </div>
          <button
            class="block w-full bg-green-600 text-white rounded-sm py-3 text-xl hover:bg-green-500 tracking-wide"
            type="submit"
          >
            Login
          </button>
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
import TextInput from "../components/global/TextInput.vue";
import { ref } from "vue";
let email = ref(null);
let password = ref(null);
</script>
