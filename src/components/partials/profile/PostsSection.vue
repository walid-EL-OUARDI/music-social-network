<template>
  <div>
    <div class="max-w-4xl mx-auto py-4">
      <div class="font-bold text-gray-100">
        <div class="text-gray-900 text-xl">Posts</div>
        <div class="bg-green-500 w-full h-1"></div>

        <div class="flex justify-end w-full mb-4 mt-4">
          <RouterLinkBtn
            class="ml-2"
            btnText="Create Post"
            color="green"
            url="/profile/create-post"
          />
        </div>
        <div class="flex flex-wrap mb-4">
          <div
            v-for="(post, index) in postStore.posts"
            :key="index"
            class="my-1 px-1 w-full md:w-1/2 lg:w-1/2"
          >
            <div class="rounded-lg border">
              <a href="#">
                <img
                  class="rounded-t-lg w-full h-[18rem]"
                  :src="post.image"
                  alt=""
                />
              </a>
              <div class="p-2 md:p-4">
                <div class="text-lg">
                  <RouterLink
                    :to="'/profile/post/' + post.id"
                    class="underline text-blue-500 hover:text-blue-600"
                  >
                    {{ post.title }}
                  </RouterLink>
                </div>
                <p class="py-2 text-gray-900">Location: {{ post.location }}</p>
                <p class="text-gray-900 text-md">
                  {{ post.description }}
                </p>
                <div class="mt-2 flex items-center justify-end">
                  <RouterLink
                    :to="'/profile/edit-post/' + post.id"
                    class="mr-1 bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded-full"
                  >
                    Edit post
                  </RouterLink>
                  <button
                    @click="deletePost(post)"
                    class="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-1 px-3 rounded-full"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import RouterLinkBtn from "../../global/RouterLinkBtn.vue";
import { usePostStore } from "@/stores/usePostStore.js";
import Swal from "@/sweetalert2.js";
const postStore = usePostStore();
// let posts = postStore.posts;

const deletePost = async (post) => {
  Swal.fire({
    title: "Are you sure you want to delete this?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.delete("post/" + post.id);
        Swal.fire("Deleted!", "Your post has been deleted.", "success");
        postStore.fetchPosts(post.user_id);
      } catch (err) {
        console.log(err);
      }
    }
  });
};
</script>
