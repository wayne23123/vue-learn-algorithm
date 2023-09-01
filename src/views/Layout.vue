<script setup>
import NavBarFixed from "../components/NavBarFixed.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <NavBarFixed />
  <NavBar />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
