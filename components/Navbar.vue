<template>
  <nav
    class="flex fixed w-full items-center justify-between px-6 h-16 bg-green-400 text-gray-100 border-b border-gray-200 z-10"
  >
    <div class="flex items-center">
      <button class="mr-2" aria-label="Open Menu" @click="toggleMenu">
        <!-- Menu SVG Icon -->
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <img
        src="https://app.openlogger.se/bower_components/openlogger-elements/assets/imgs/openlogger-logo-p.svg"
        alt="Logo"
        class="h-auto w-34"
      />
    </div>
    <!-- Other Navbar content -->
  </nav>
</template>

<script setup>
const emit = defineEmits();

const toggleMenu = () => {
  emit("toggle-sidebar");
};
</script>
