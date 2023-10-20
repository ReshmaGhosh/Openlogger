<template>
  <header class="bg-black dark:bg-gray-800">
    <div id="default-carousel" data-carousel="static">
      <div
        class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6"
        :style="{ height: '800px' }"
      >
        <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div class="md:mx-12 md:order-2">
            <h1
              class="text-3xl font-medium tracking-wide text-gray-100 dark:text-white md:text-4xl"
            >
              OpenLogger finns överallt
            </h1>
            <p class="mt-4 text-gray-100 dark:text-gray-100">
              Du kan komma åt OpenLogger vart du än befinner dig och från vilken
              enhet du vill.
            </p>
            <div class="mt-6">
              <NuxtLink
                to="/login"
                class="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400"
              >
                Get a free sensor
              </NuxtLink>
            </div>
          </div>
        </div>
        <Search />
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped></style>
