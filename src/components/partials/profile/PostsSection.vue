<template>
  <div>
    <div class="max-w-4xl mx-auto py-4">
      <div class="font-bold text-gray-100">
        <div class="text-gray-900 text-xl">Posts</div>
        <div class="bg-green-500 w-full h-1"></div>

        <div class="flex justify-end w-full mt-4">
          <RouterLinkBtn
            class="ml-2"
            btnText="Create Post"
            color="green"
            url="/profile/create-post"
          />
        </div>
        <div class="flex flex-wrap mb-4">
          <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
            <div class="rounded-lg border">
              <a href="#">
                <img
                  class="rounded-t-lg w-full"
                  src="https://placehold.co/500"
                  alt=""
                />
              </a>
              <div class="p-2 md:p-4">
                <div class="text-lg">
                  <RouterLink
                    to=""
                    class="underline text-blue-500 hover:text-blue-600"
                  >
                    Post Title
                  </RouterLink>
                </div>
                <p class="py-2 text-gray-900">Location: Agadir</p>
                <p class="text-gray-900 text-md">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veniam, architecto distinctio, ratione inventore aliquid sint
                  neque suscipit magni repudiandae deleniti repellat expedita
                  asperiores esse accusamus voluptates minima id maiores ea?
                </p>
                <div class="mt-2 flex items-center justify-end">
                  <RouterLink
                    to="/profile/edit-post"
                    class="mr-1 bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded-full"
                  >
                    Edit post
                  </RouterLink>
                  <button
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
import RouterLinkBtn from "../../global/RouterLinkBtn.vue";
</script>
