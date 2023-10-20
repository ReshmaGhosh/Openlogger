<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100"
  >
    <!-- Outer Div -->
    <div class="w-full max-w-md bg-white p-6 rounded-md shadow-lg">
      <!-- Title -->
      <h1 class="text-3xl font-bold mb-8 text-center">ID box</h1>
      <!-- ID Box Search Box -->
      <div class="mb-4">
        <label for="idBox" class="block text-sm font-medium text-gray-700">
          ID Box
        </label>
        <input
          id="idBox"
          type="text"
          class="mt-1 w-full p-2 rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
      <!-- Arrival Button -->
      <button
        class="w-full p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
      >
        Arrival
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
