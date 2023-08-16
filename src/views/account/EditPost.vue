<template>
  <TopNavigation />
  <CropperModal
    v-if="showModal"
    @showModal="showModal = false"
    @croppedImageData="setCroppedImageData"
  />
  <div class="mt-20 mb-20">
    <div class="container max-w-4xl mx-auto mt-10">
      <div class="text-gray-900 font-bold text-xl">Edit Post</div>
      <div class="bg-green-500 w-full h-1"></div>
    </div>
    <div class="max-w-4xl mx-auto mt-10">
      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <TextInput
            label="First Name"
            placeHolder="Walid"
            v-model:input="firstName"
            inputType="text"
            error="error message"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <TextInput
            label="Last Name"
            placeHolder="EL ouardi"
            v-model:input="lastName"
            inputType="text"
            error="error message"
          />
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <TextInput
            label="Location"
            placeHolder="Morocco, Agadir"
            v-model:input="location"
            inputType="text"
            error="error message"
          />
        </div>
      </div>

      <div class="px-3">
        <img :src="image" v-if="image" />
        <DisplayCropperBtn
          label="Profile Image"
          btnText="Update Profile Image"
          @showModal="showModal = true"
        />
      </div>
      <div class="px-3">
        <TextAreaInput
          label="Description"
          placeHolder="Description"
          v-model:description="description"
          error="error message"
        />
      </div>
      <div class="px-3 flex justify-end">
        <SubmitFormBtn btnText="Update Profile" />
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import { ref } from "vue";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import TextInput from "@/components/global/TextInput.vue";
import DisplayCropperBtn from "@/components/global/DisplayCropperBtn.vue";
import CropperModal from "@/components/global/CropperModal.vue";
import SubmitFormBtn from "@/components/global/SubmitFormBtn.vue";
import TextAreaInput from "@/components/global/TextAreaInput.vue";
let showModal = ref(false);
let firstName = ref(null);
let lastName = ref(null);
let location = ref(null);
let description = ref(null);
let imageData = null;
let image = ref(null);
let errors = ref([]);

const setCroppedImageData = (data) => {
  image.value = data.imageUrl;
};
</script>
