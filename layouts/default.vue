<template>
  <div>
    <Navbar @toggle-sidebar="toggleMenu" />

    <Sidebar :menuOpen="menuOpen" @update:menuOpen="menuOpen = $event" />

    <slot></slot>
  </div>
</template>

<script setup>
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>


