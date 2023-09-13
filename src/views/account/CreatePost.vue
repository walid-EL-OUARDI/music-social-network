<template>
  <TopNavigation />
  <div class="mt-28  mb-10 flex-grow">
    <div class="container max-w-4xl mx-auto px-2">
      <div class="text-gray-900 font-bold text-xl">Create Post</div>
      <div class="bg-green-500 w-full h-1"></div>
    </div>
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-2">
          <TextInput
            label="Post Title"
            placeHolder="your post title"
            v-model:input="postTitle"
            inputType="text"
            :error="errors.title ? errors.title[0] : ''"
          />
        </div>
        <div class="w-full md:w-1/2 px-2">
          <TextInput
            label="Post Location"
            placeHolder="your post location"
            v-model:input="postLocation"
            inputType="text"
            :error="errors.location ? errors.location[0] : ''"
          />
        </div>
      </div>

      <div class="px-2 mb-6">
        <label class="block mb-2 tracking-wide uppercase text-xs font-bold"
          >Post Image</label
        >
        <input
          class="w-full border border-gray-300"
          type="file"
          ref="file"
          @change="getFile"
        />
      </div>
      <div class="mt-10 px-2 mb-6">
        <TextAreaInput
          label="Post Description"
          placeHolder="your post description"
          v-model:description="postDescription"
          :error="errors.description ? errors.description[0] : ''"
        />
      </div>

      <div class="px-2 flex justify-end">
        <SubmitFormBtn btnText="Create Post" @click="createPost" />
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import TextInput from "@/components/global/TextInput.vue";
import SubmitFormBtn from "@/components/global/SubmitFormBtn.vue";
import TextAreaInput from "@/components/global/TextAreaInput.vue";
import { useUserStore } from "@/stores/useUserStore.js";
import { usePostStore } from "@/stores/usePostStore.js";
import { useRouter } from "vue-router";
import Sawl from "@/sweetalert2.js";
const router = useRouter();
const userStore = useUserStore();
const postStore = usePostStore();

let file = ref(null);
let postTitle = ref(null);
let postDescription = ref(null);
let postLocation = ref(null);
let postImage = ref(null);
let errors = ref([]);
const getFile = () => {
  postImage.value = file.value.files[0];
};

const createPost = async () => {
  errors.value = [];
  if (!postImage.value) {
    Sawl.fire(
      "Opps, something went wrong!",
      "You forgot to upload the post image!",
      "warning"
    );
  }
  let postData = new FormData();
  postData.append("user_id", userStore.id || "");
  postData.append("title", postTitle.value || "");
  postData.append("location", postLocation.value || "");
  postData.append("description", postDescription.value || "");
  postData.append("image", postImage.value || "");

  try {
    await axios.post("post/", postData);
    postStore.fetchPosts(userStore.id);
    router.push("/profile");
  } catch (err) {
    console.log("mochkila", err);
    errors.value = err.response.data.errors;
  }
};
</script>
