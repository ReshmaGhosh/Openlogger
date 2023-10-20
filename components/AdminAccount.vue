<!-- <template>
  <div class="history-container">
    <div class="history-banner">
      <h1 class="history-title">History</h1>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.history-container {
  height: 100vh;
  background-color: #f5f5f5; /* Light gray for the entire page */
}

.history-banner {
  background-color: #e0e0e0; /* Slightly darker gray for the banner */
  padding: 20px 0; /* Vertical padding */
  width: 100%; /* Full width */
  display: flex;
  justify-content: center; /* Center the title horizontally */
}

.history-title {
  color: #333;
  padding-top: 80px;
  font-size:xx-large;
  font-weight: 700;
}
</style> -->

<template>
  <div class="history-container">
    <div class="history-banner">
      <h1 class="history-title">History</h1>
    </div>
  </div>
</template>

<style scoped>
.history-container {
  height: 100vh;
  background-color: #f5f5f5; /* Light gray for the entire page */
}

.history-banner {
  background-color: #e0e0e0; /* Slightly darker gray for the banner */
  padding: 20px 0; /* Vertical padding */
  width: 100%; /* Full width */
  display: flex;
  justify-content: center; /* Center the title horizontally */
}

.history-title {
  color: #333;
  padding-top: 80px;
  font-size: xx-large;
  font-weight: 700;
}
</style>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

const router = useRoute();
</script>
