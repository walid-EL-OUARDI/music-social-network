<template>
  <router-link
    class="bg-transparent text-gray-900 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
    :class="[
      color ? 'hover:bg-' + color + '-500 border-' + color + '-500' : '',
    ]"
    :to="url"
  >
    {{ btnText }}
  </router-link>
</template>

<script setup>
const props = defineProps({
  btnText: String,
  url: String,
  color: String,
});
</script>
