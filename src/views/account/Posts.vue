<template>
  <TopNavigation />
  <div class="container mx-auto max-w-4xl py-6 px-2 mt-20 flex-grow">
    <div class="text-gray-900 text-xl font-bold">Posts</div>
    <div class="bg-green-500 w-full h-1 mb-4"></div>
    <div class="mx-auto">
      <div class="my-4" v-for="(post, index) in posts" :key="index">
        <div class="flex items-center py-2">
          <router-link to="">
            <img
              :src="'http://127.0.0.1:8000/profileImages/' + post.user.image"
              class="rounded-full"
              width="50"
            />
          </router-link>
          <div class="ml-2 font-bold text-2xl">
            <router-link to=""
              >{{ post.user.first_name }} {{ post.user.last_name }}
            </router-link>
          </div>
        </div>
        <div class="border-2 border-gray-300 rounded-sm">
          <img
            class="w-full"
            :src="'http://127.0.0.1:8000/postsImages/' + post.image"
            alt=""
          />
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
    <div class="flex justify-center">
      <v-pagination
        v-model="page"
        :pages="pageCount"
        :range-size="1"
        active-color="#DCEDFF"
        @update:modelValue="getPosts"
      />
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

let page = ref(1);
let pageCount = ref();
let posts = ref([]);

onMounted(async () => {
  await getPosts();
});

const getPosts = async () => {
  try {
    let res = await axios.get("posts?page=" + page.value);
    posts.value = res.data.posts.data;
    pageCount.value = res.data.pageCount;
    // console.log(res.data.pageCount);
    // post.value.image =
    //   import.meta.env.VITE_VUE_APP_BACKEND_URL +
    //   "postsImages/" +
    //   post.value.image;
  } catch (err) {
    console.log(err);
  }
};
</script>
