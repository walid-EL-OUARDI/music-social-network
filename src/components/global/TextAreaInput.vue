<template>
  <div class="mt-5">
    <label
      class="block mb-2 tracking-wide uppercase text-xs font-bold text-gray-900"
      >{{ label }}</label
    >
    <textarea
      :placeholder="placeHolder"
      v-model="descriptionComputed"
      autocomplete
      cols="10"
      rows="6"
      class="appearance-none block tracking-wide w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    />
  </div>
  <span v-if="error" class="text-red-500"> {{ error }} </span>
</template>

<script setup>
import { toRefs, computed } from "vue";

const emit = defineEmits(["update:description"]);

const props = defineProps({
  label: String,
  description: String,
  error: String,
  placeHolder: {
    type: String,
    default: "",
  },
});

const { label, description, error, placeHolder } = toRefs(props);

const descriptionComputed = computed({
  get: () => description.value,
  set: (val) => emit("update:descriptionComputed", val),
});
</script>
