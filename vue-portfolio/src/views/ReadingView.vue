<template>
  <Navbar />
  <div class="reading-main-continer">
    <div class="reading-container-flex">
      <h2>Readding:</h2>
      t
      <h3>My Current Top Reads:</h3>
      <img src="https://drive.google.com/uc?id=" alt="" />
      <img src="https://drive.google.com/uc?id=" alt="" />
      <img src="https://drive.google.com/uc?id=" alt="" />
    </div>
  </div>
  <Footer />
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "MusicView",
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style scoped>
:root {
  --text: #002e28;
  --background: #e0fffa;
  --primary: #008a70;
  --secondary: #5cd1ff;
  --accent: #007cf0;
}
.reading-main-container {
  margin-top: 100px;
  width: 1200px;
  height: 800px;
}
.reading-container-flex {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
</style>
