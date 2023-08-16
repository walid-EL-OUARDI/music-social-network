<template>
  <div
    class="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity overflow-y-auto mt-6 flex min-h-full justify-center p-4 items-center py-2"
  >
    <div class="bg-white px-4 pt-5 pb-4 p-6 rounded-md w-[400px]">
      <div class="mt-3">
        <h3 class="text-2xl font-medium leading-6 text-gray-900">Crop Image</h3>
        <div class="flex flex-wrap my-4">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Select Image
          </label>

          <div class="mb-3 w-full">
            <input
              class="w-full border border-gray-300"
              type="file"
              @change="getUploadedImage"
              ref="fileInput"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <Cropper
          ref="cropper"
          :src="uploadedImage"
          :stencil-props="{
            aspectRatio: 1,
          }"
        ></Cropper>
      </div>
      <div class="pb-3 flex pt-4">
        <button
          @click="$emit('showModal')"
          type="button"
          class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-white text-base font-medium shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ml-3"
        >
          Cancel
        </button>
        <button
          v-if="uploadedImage"
          type="button"
          class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-white text-base font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-3"
          @click="crop"
          @showModal="showModal = false"
        >
          Crop Image
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

const emit = defineEmits(["croppedImageData", "showModal"]);

const uploadedImage = ref(null);
const cropper = ref(null);
const fileInput = ref(null);
let croppedImageData = {
  file: null,
  imageUrl: null,
  height: null,
  width: null,
  left: null,
  top: null,
};

const getUploadedImage = (e) => {
  const file = e.target.files[0];
  uploadedImage.value = URL.createObjectURL(file);
  // console.log(uploadedImage.value);
};
const crop = () => {
  const { coordinates, canvas } = cropper.value.getResult();

  croppedImageData.file = fileInput.value.files[0];
  croppedImageData.imageUrl = canvas.toDataURL();
  croppedImageData.height = coordinates.height;
  croppedImageData.width = coordinates.width;
  croppedImageData.left = coordinates.left;
  croppedImageData.top = coordinates.top;

  emit("croppedImageData", croppedImageData);
  emit("showModal", false);
};
</script>
