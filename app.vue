<template>
  <div class="flex justify-center text-gray-50 font-serif mx-8">
    <div class="container my-14">
      <div class="font-sans font-bold mb-4 flex flex-row justify-between items-center">
        <div class="text-3xl">
          TaoNet <span class="font-bold">AS4242421577</span>
        </div>
      </div>
      <RouterView />
    </div>
  </div>
  <img src="/ghost.svg" class="svg-color -z-10 top-10 fixed w-full md:w-1/2 lg:w-1/4 left-[calc(50vw)]" />
</template>
<script setup lang="ts">
import "assets/css/tailwind.css";
</script>