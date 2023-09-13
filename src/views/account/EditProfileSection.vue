<template>
  <TopNavigation />
  <CropperModal
    v-if="showModal"
    @showModal="showModal = false"
    @croppedImageData="setCroppedImageData"
  />
  <div class="mt-28 mb-10">
    <div class="container max-w-4xl mx-auto px-2">
      <div class="text-gray-900 font-bold text-xl">Edite Profile</div>
      <div class="bg-green-500 w-full h-1"></div>
    </div>
    <div class="max-w-4xl mx-auto mt-5">
      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-2">
          <TextInput
            label="First Name"
            placeHolder="your first name"
            v-model:input="firstName"
            inputType="text"
            :error="errors.first_name ? errors.first_name[0] : ''"
          />
        </div>
        <div class="w-full md:w-1/2 px-2">
          <TextInput
            label="Last Name"
            placeHolder="your lastname"
            v-model:input="lastName"
            inputType="text"
            :error="errors.last_name ? errors.last_name[0] : ''"
          />
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-2">
          <TextInput
            label="Location"
            placeHolder="your location"
            v-model:input="location"
            inputType="text"
            :error="errors.location ? errors.location[0] : ''"
          />
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-2">
          <CroppedImage
            v-if="croppedImage"
            label="Cropped Image"
            :image="croppedImage"
          />
          <CroppedImage v-else label="Cropped Image" :image="image" />
        </div>
      </div>
      <div class="px-2">
        <DisplayCropperBtn
          label="Profile Image"
          btnText="Update Profile Image"
          @showModal="showModal = true"
        />

        <TextAreaInput
          label="Description"
          placeHolder="Description"
          v-model:description="description"
          :error="errors.description ? errors.description[0] : ''"
        />
      </div>
      <div class="px-2 flex justify-end mt-4">
        <SubmitFormBtn btnText="Update Profile" @submitForm="updateUser" />
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import TopNavigation from "@/components/layouts/TopNavigation.vue";
import FooterSection from "@/components/layouts/FooterSection.vue";
import TextInput from "@/components/global/TextInput.vue";
import DisplayCropperBtn from "@/components/global/DisplayCropperBtn.vue";
import CropperModal from "@/components/global/CropperModal.vue";
import CroppedImage from "@/components/global/CroppedImage.vue";
import SubmitFormBtn from "@/components/global/SubmitFormBtn.vue";
import TextAreaInput from "@/components/global/TextAreaInput.vue";
import { useUserStore } from "@/stores/useUserStore";
const userStore = useUserStore();
let showModal = ref(false);
let firstName = ref(null);
let lastName = ref(null);
let location = ref(null);
let description = ref(null);
let croppedImage = ref(null);
let imageData = null;
let image = ref(null);
let errors = ref([]);

const setCroppedImageData = (data) => {
  imageData = data;
  croppedImage.value = data.imageUrl;
};

onMounted(() => {
  firstName.value = userStore.firstName || null;
  lastName.value = userStore.lastName || null;
  location.value = userStore.location || null;
  description.value = userStore.description || null;
  image.value = userStore.image || null;
});

const updateUser = async () => {
  let data = new FormData();
  data.append("first_name", firstName.value || "");
  data.append("last_name", lastName.value || "");
  data.append("location", location.value || "");
  data.append("description", description.value || "");
  if (imageData) {
    data.append("image", imageData.file || "");
    data.append("height", imageData.height || "");
    data.append("width", imageData.width || "");
    data.append("left", imageData.left || "");
    data.append("top", imageData.top || "");
  }
  errors.value = [];
  try {
    await axios.post("user/" + userStore.id + "?_method=PUT", data);
    userStore.fetchUser();
  } catch (err) {
    console.log("mochkila", err);
    errors.value = err.response.data.errors;
  }
};
</script>
