<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-16 bg-gray-100"
  >
    <h1 class="text-3xl font-bold mb-8">My Transport</h1>

    <!-- <div class="w-1/2 bg-white p-6 rounded-md shadow-lg"> -->
      <!-- ID Box Search Box -->
      <div class="mb-4">
        <label for="idBox" class="block text-sm font-medium text-gray-700">
          ID Box
        </label>
        <input
          id="idBox"
          type="text"
          class="mt-1 p-2 w-full rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>

      <!-- Map Container -->
      <Map />
    </div>
  <!-- </div> -->
</template>

<script setup></script>

<style scoped></style>
