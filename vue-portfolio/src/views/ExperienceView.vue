<template>
  <Navbar />
  <div class="experience-main-container">
    <div class="experience-container-grid">
      <div class="experience-img">
        <img src="https://drive.google.com/uc?id=" alt="" />
      </div>
      <div class="experience-education">
        <h3></h3>
        <p></p>
      </div>
      <div class="experience-volunteer">
        <h3></h3>
        <img src="" alt="" />
        <p></p>
      </div>
      <div class="experience-skills">
        <h3>Skills:</h3>
        <h4>Languages:</h4>
        <h4>Frameworks:</h4>
        <h4>Design Skills:</h4>
        <h4>Other Skills:</h4>
      </div>
    </div>
    <div class="experience-iframe">
      <iframe src="" frameborder="0"></iframe>
    </div>
  </div>
  <Footer />
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "HomeView",
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

.experience-main-container {
  margin-top: 100px;
  width: 1200px;
  height: 800px;
}

.experience-container-grid {
  display: grid;
  grid: repeat(4, 1fr) / repeat(4, 1fr);
}
.experience-img {
  grid-area: 1/1/2/2;
}
.experience-education {
  grid-area: 2/2/3/3;
}
.experience-volunteer {
  grid-area: 3/1/4/3;
}
.experience-skills {
  grid-area: 1/3/4/5;
}
.experience-iframe {
  grid-area: 4/1/5/5;
}
</style>
