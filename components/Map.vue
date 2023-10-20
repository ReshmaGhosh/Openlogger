<!-- <template>
  <div style="height: 100vh; width: 80vw">
    <LMap ref="map" :zoom="zoom" :center="[47.21322, -1.559482]">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
    </LMap>
  </div>
</template>

<script setup>
import { ref } from "vue";
const zoom = ref(6);
</script>

<style>
body {
  margin: 0;
}
</style> -->

<template>
  <div style="height: 100vh; width: 80vw">
    <LMap ref="map" :zoom="zoom" :center="center">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker v-if="currentLocation" :lat-lng="currentLocation" />
    </LMap>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const zoom = ref(6);
const center = ref([47.21322, -1.559482]);
const currentLocation = ref(null);

const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        currentLocation.value = [latitude, longitude];
        center.value = [latitude, longitude]; // Optional: Set map center to current location
      },
      (err) => {
        console.error("Error fetching location", err);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};

onMounted(getCurrentLocation);
</script>

<style>
body {
  margin: 0;
}
</style>
