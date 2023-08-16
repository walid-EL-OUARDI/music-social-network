<template>
  <div>
    <div class="max-w-4xl mx-auto py-4">
      <div class="font-bold text-gray-100">
        <div class="text-gray-900 text-xl">Songs</div>
        <div class="bg-green-500 w-full h-1"></div>

        <div class="flex justify-end w-full mt-4">
          <RouterLinkBtn class="mr-2" btnText="Add Song" color="green" url="/profile/add-song" />
          <RouterLinkBtn
            class="hover:bg-red-500"
            btnText="Delete Song"
            color=""
            url="/profile/delete-song"
          />
        </div>
      </div>
      <div class="mt-4 bg-green-500">
        <SongPlayer />
      </div>
    </div>
  </div>
</template>

<script setup>
import RouterLinkBtn from "../../global/RouterLinkBtn.vue";
import SongPlayer from "./SongPlayer.vue";
</script>
