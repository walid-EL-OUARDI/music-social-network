<template>
  <TopNavigation />
  <div class="flex justify-center mt-20 items-center min-h-screen w-full">
    <div class="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[35%] my-4">
      <div class="bg-gray-900 rounded-md p-8 mb-2">
        <form action="" method="post">
          <h1 class="text-gray-100 font-semibold text-2xl">
            Let's get rocking
          </h1>
          <div class="mb-4">
            <TextInput
              label="FirstName"
              inputType="text"
              placeHolder="Your firstName"
              error="your error text"
              :labelColor="false"
              v-model:input="firstName"
            />
            <TextInput
              label="LasttName"
              inputType="text"
              placeHolder="Your lasttName"
              error="your error text"
              :labelColor="false"
              v-model:input="lastName"
            />
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
            <TextInput
              label="comfirm Password"
              inputType="password"
              placeHolder="confirm your password"
              error="your error text"
              :labelColor="false"
              v-model:input="comfirmedPassword"
            />
            <button
              class="block w-full bg-green-600 text-white rounded-sm py-3 text-xl hover:bg-green-500 tracking-wide mt-3"
              type="submit"
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
import TextInput from "../components/global/TextInput.vue";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import { ref } from "vue";
let firstName = ref(null);
let lastName = ref(null);
let email = ref(null);
let password = ref(null);
let comfirmedPassword = ref(null);
</script>
