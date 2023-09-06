<template>
  <TopNavigation />
  <div class="mt-20 mb-20">
    <div class="container max-w-4xl mx-auto mt-10">
      <div class="text-gray-900 font-bold text-xl">Edite Post</div>
      <div class="bg-green-500 w-full h-1"></div>
    </div>
    <div class="max-w-4xl mx-auto mt-10">
      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <TextInput
            label="Post Title"
            placeHolder="your post title"
            v-model:input="postTitle"
            inputType="text"
            :error="errors.title ? errors.title[0] : ''"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <TextInput
            label="Post Location"
            placeHolder="your post location"
            v-model:input="postLocation"
            inputType="text"
            :error="errors.location ? errors.location[0] : ''"
          />
        </div>
      </div>

      <div class="px-3 mb-6">
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
      <div class="mt-10 ml-3 mb-6">
        <TextAreaInput
          label="Post Description"
          placeHolder="your post description"
          v-model:description="postDescription"
          :error="errors.description ? errors.description[0] : ''"
        />
      </div>

      <div class="px-3 flex justify-end">
        <SubmitFormBtn
          btnText="Update Profile"
          @click="updatePost($route.params.id)"
        />
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import TextInput from "@/components/global/TextInput.vue";
import SubmitFormBtn from "@/components/global/SubmitFormBtn.vue";
import TextAreaInput from "@/components/global/TextAreaInput.vue";
import { useUserStore } from "@/stores/useUserStore.js";
import { usePostStore } from "@/stores/usePostStore.js";
import { useRoute } from "vue-router";
import Sawl from "@/sweetalert2.js";
const route = useRoute();
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

onMounted(async () => {
  await postStore.postById(route.params.id);
  postTitle.value = postStore.post[0].title || "";
  postDescription.value = postStore.post[0].description || "";
  postLocation.value = postStore.post[0].location || "";
  // postTitle.value=postStore.post.title
  // console.log(postStore.post[0].title);
});

const updatePost = async (postId) => {
  errors.value = [];
  let postData = new FormData();
  postData.append("user_id", userStore.id || "");
  postData.append("title", postTitle.value || "");
  postData.append("location", postLocation.value || "");
  postData.append("description", postDescription.value || "");
  postData.append("image", postImage.value || "");

  try {
    await axios.post("post/" + postId + "?_method=PUT", postData);
    postStore.fetchPosts(userStore.id);
    // router.push("/profile");
  } catch (err) {
    console.log("mochkila", err);
    errors.value = err.response.data.errors;
  }
};
</script>
