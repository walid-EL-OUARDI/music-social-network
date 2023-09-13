<template>
  <TopNavigation />
  <div class="container mx-auto max-w-4xl py-6 px-3 mt-20 flex-grow">
    <div class="text-gray-900 text-xl font-bold">Post</div>
    <div class="bg-green-500 w-full h-1 mb-4"></div>

    <div class="mx-auto">
      <div class="my-4">
        <div class="flex items-center py-2">
          <router-link to="'">
            <img :src="userProfileImage" class="rounded-full" width="50" />
          </router-link>
          <div class="ml-2 font-bold text-2xl">
            <router-link to="">{{ userName }} </router-link>
          </div>
        </div>
        <div class="border-2 border-gray-300 rounded-sm">
          <img class="w-full" :src="post.image" alt="" />
          <div class="p-4">
            <p class="text-3xl font-bold hover:text-gray-700 pb-4">
              {{ post.title }}
            </p>
            <p class="py-2 text-lg">Event Location: {{ post.location }}</p>
            <p class="pb-6">
              {{ post.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import axios from "axios";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import { useUserStore } from "@/stores/useUserStore.js";
import { usePostStore } from "@/stores/usePostStore.js";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const userStore = useUserStore();
const postStore = usePostStore();
const userName = userStore.firstName + " " + userStore.lastName;
const userProfileImage = userStore.image;
let post = ref([]);

onMounted(async () => {
  await getPost();
});

const getPost = async () => {
  try {
    let res = await axios.get("post/" + route.params.id);
    post.value = res.data.post[0];
    post.value.image =
      import.meta.env.VITE_VUE_APP_BACKEND_URL +
      "postsImages/" +
      post.value.image;
  } catch (err) {
    console.log(err);
  }
};
</script>
