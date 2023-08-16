<template>
  <button
    class="mt-2 rounded-md inline-block bg-green-500 hover:bg-green-700 font-bold text-white no-underline px-4 py-3"
    @click="$emit('submitForm', true)"
  >
    {{ btnText }}
  </button>
</template>

<script setup>
import { toRefs } from "vue";
defineEmits(["submtForm"]);

const props = defineProps({ btnText: String });
const { btnText } = toRefs(props);
</script>
