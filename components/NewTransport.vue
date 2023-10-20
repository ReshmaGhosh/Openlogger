<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
    <h1 class="text-3xl font-bold mb-8">New Transport</h1>
    
    <div class="w-1/2 bg-white p-6 rounded-md shadow-lg">
      <!-- Name Search Box -->
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input id="name" type="text" class="mt-1 p-2 w-full rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200">
      </div>

      <!-- ID Box Search Box -->
      <div class="mb-4">
        <label for="idBox" class="block text-sm font-medium text-gray-700">ID Box</label>
        <input id="idBox" type="text" class="mt-1 p-2 w-full rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200">
      </div>

      <!-- Transport Search Box -->
      <div class="mb-4">
        <label for="transport" class="block text-sm font-medium text-gray-700">Transport</label>
        <input id="transport" type="text" class="mt-1 p-2 w-full rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200">
      </div>

      <!-- Send Button -->
      <button class="w-full p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
        Send
      </button>
    </div>
  </div>
</template>


<script setup>

</script>

<style scoped>

</style>