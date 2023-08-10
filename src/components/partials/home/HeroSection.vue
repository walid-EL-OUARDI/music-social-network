<template>
  <div class="absolute top-1/2 -translate-y-1/2 w-full z-10">
    <div class="text-center mb-3 px-4">
      <h1 class="text-4xl text-gray-100 mb-3">
        <b>Music Social Network</b>
      </h1>
      <p class="text-xl text-gray-300 mb-3">
        Login or Register now and join other like minded people all around the
        world who want to share there music!
      </p>
      <p class="text-xl text-gray-300">Let the music be your guide...</p>
    </div>
    <div class="mb-3 px-4 flex justify-between items-center">
      <RouterLink
        class="w-full mr-2 font-semibold py-2 px-4 bg-green-600 text-white text-center text-2xl rounded-lg cursor-pointer hover:bg-green-500 shadow-md foucus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        to="/login"
        >Login</RouterLink
      >
      <RouterLink
        class="w-full py-2 px-4 bg-blue-600 text-white font-semibold text-center text-2xl rounded-lg cursor-pointer hover:bg-blue-500 shadow-md foucus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        to="/register"
        >Register</RouterLink
      >
    </div>
  </div>
  <div class="h-screen w-full relative -z-50">
    <video autoplay muted loop class="fixed h-full object-cover w-full">
      <source src="/media/Concert.mp4" type="video/mp4" />
    </video>
    <div
      class="after:absolute after:inset-0 after:bg-black after:bg-opacity-60"
    ></div>
  </div>
</template>
