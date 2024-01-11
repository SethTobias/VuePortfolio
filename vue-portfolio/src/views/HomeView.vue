<template>
  <Navbar />
  <main>
    <div class="index-container">
      <div class="index-main">
        <div class="index-main-img">
          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQOaEOcG2XSy5xi6W1b0C3DXLH99AyX9wrRIR_9wAxoe4IXAeNjibAQsYXK2gdj-BTwPtW6t_rB8niTyqKmaZP1bo8OoA=s1600"
            alt=""
          />
        </div>
        <div class="index-main-info">
          <p>I am Seth Tobias,</p>
          <p>An Aspiring Developer.</p>
          <p>Based in Tableview, CapeTown.</p>
        </div>
      </div>
      <div class="index-extra-flex">
        <div class="index-extra-projects">
          <h2>My recent projects:</h2>
          <div class="index-extra-projects-grid">
            <img
              class="index-project latest"
              src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTLtxmzBnoImDOB_2yd8TbQoDE10MnYH4hyBXUM1wtXjldqGuPCeb5Zgo5H9hfGLZpXaw9aVceU0oGWrC_3vH4aazqMpQ=s1600"
              alt=""
            />
            <div><a href="">See a preview of my projects!</a></div>
            <img
              class="index-project old"
              src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTLtxmzBnoImDOB_2yd8TbQoDE10MnYH4hyBXUM1wtXjldqGuPCeb5Zgo5H9hfGLZpXaw9aVceU0oGWrC_3vH4aazqMpQ=s1600"
              alt=""
            />
            <div><a href="">See a preview of my projects!</a></div>
            <img
              class="index-project older"
              src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTLtxmzBnoImDOB_2yd8TbQoDE10MnYH4hyBXUM1wtXjldqGuPCeb5Zgo5H9hfGLZpXaw9aVceU0oGWrC_3vH4aazqMpQ=s1600"
              alt=""
            />
            <div><a href="">See a preview of my projects!</a></div>
            <img
              class="index-project-oldest"
              src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTLtxmzBnoImDOB_2yd8TbQoDE10MnYH4hyBXUM1wtXjldqGuPCeb5Zgo5H9hfGLZpXaw9aVceU0oGWrC_3vH4aazqMpQ=s1600"
              alt=""
            />
            <div><a href="">See a preview of my projects!</a></div>
          </div>
        </div>
        <div class="index-extra-cv">
          <h2>My curriculum Vitae:</h2>
          <div class="index-extra-cv-card">
            <div class="index-cv-img">
              <img
                src="https://drive.google.com/uc?id=19b0HKDMgti0Z37jsg4nhQdOenrOmwdGn"
                alt=""
              />
            </div>
            <div class="index-cv-buttons">
              <div>Print</div>
              <div>Download</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
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
main {
  margin-top: 100px;
}
.index-container {
}

.index-main {
}

.index-main-img {
  display: flex;
  justify-content: center;
}

.index-main-img img {
  width: 25rem;
  height: 30rem;
  border: 5px solid var(--secondary);
}

.index-main-info {
  text-align: center;
  font-size: 2rem;
  line-height: 0.3rem;
}

.index-extra-flex {
  width: 80%;
  margin: auto;
  display: grid;
  grid: "item1 item2" 100% / 1fr 1fr;
  gap: 20px;
}

.index-extra-projects h2 {
  text-align: center;
}

.index-extra-projects-grid img {
  width: 350px;
}

.index-extra-projects-grid {
  display: grid;
  gap: 1rem;
  grid:
    "a b" 1fr
    "c d" 1fr / 1fr 1fr;
}

.index-extra-projects-grid img {
  border: 5px solid var(--secondary);
}

.index-extra-projects-grid img:nth-of-type(1n) {
  grid-area: a;
}

.index-extra-projects-grid img:nth-of-type(2n) {
  grid-area: b;
}

.index-extra-projects-grid img:nth-of-type(3n) {
  grid-area: c;
}

.index-extra-projects-grid img:nth-of-type(4n) {
  grid-area: d;
}

.index-extra-projects-grid div:nth-of-type(1n) {
  grid-area: a;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-self: center;
}

.index-extra-projects-grid div:nth-of-type(2n) {
  grid-area: b;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-self: center;
}

.index-extra-projects-grid div:nth-of-type(3n) {
  grid-area: c;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-self: center;
}

.index-extra-projects-grid div:nth-of-type(4n) {
  grid-area: d;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-self: center;
}

.index-extra-projects-grid {
}

.index-project.latest {
}

.index-project.old {
}

.index-project.older {
}

.index-project.oldest {
}

.index-extra-cv h2 {
  text-align: center;
}

.index-extra-cv {
  margin: 0 auto;
}

.index-extra-cv-card {
  background-color: var(--primary);
}

.index-cv-img {
  display: flex;
  justify-content: center;
  width: 300px;
  height: 360px;
}

.index-cv-buttons {
  display: flex;
  justify-content: space-around;
}
</style>
