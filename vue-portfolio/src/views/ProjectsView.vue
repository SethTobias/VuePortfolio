<template>
  <Navbar />
  <div class="projects-main-container"></div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
:root {
  --text: #002e28;
  --background: #e0fffa;
  --primary: #008a70;
  --secondary: #5cd1ff;
  --accent: #007cf0;
}

.projects-main-container {
  margin-top: 100px;
  width: 1200px;
  height: 800px;
}
</style>
