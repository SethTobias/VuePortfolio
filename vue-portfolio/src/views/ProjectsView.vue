<template>
  <Navbar />
  <div class="projects-main-container">
    <h2>Projects:</h2>
    <div class="projects-container-grid">
      <div class="projects project-1" @click="modalAppear()">
        <p>Projects Name</p>
        <p>Languages Used</p>
      </div>
      <div class="projects project-2" @click="modalAppear()">
        <p>Projects Name</p>
        <p>Languages Used</p>
      </div>
      <div class="projects project-3" @click="modalAppear()">
        <p>Projects Name</p>
        <p>Languages Used</p>
      </div>
      <div class="projects project-4" @click="modalAppear()">
        <p>Projects Name</p>
        <p>Languages Used</p>
      </div>
      <div class="projects project-5" @click="modalAppear()">
        <p>Projects Name</p>
        <p>Languages Used</p>
      </div>
      <div class="projects project-6" @click="modalAppear()">
        <p>Projects Name</p>
        <p>Languages Used</p>
      </div>
    </div>
    <div class="projects-modal">
      <div class="projects-modal-content">
        <h2 class="close-contain">
          <span class="close" @click="modalClose()">Close </span>
        </h2>
        <div>
          <h3>Project Name:</h3>
          <p>Placeholder</p>
        </div>
        <div>
          <h3>Description:</h3>
          <p>Placeholder</p>
        </div>
        <div>
          <h3>Languages used:</h3>
          <p>Placeholder</p>
        </div>
        <div>
          <h3>Used Frameworks:</h3>
          <p>Placeholder</p>
        </div>
        <div>
          <h3>Links</h3>
          <div>Placeholder</div>
        </div>
      </div>
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
  methods: {
    modalAppear() {
      const modal = document.querySelector(".projects-modal");
      modal.style.display = "block";
    },
    modalClose() {
      const modal = document.querySelector(".projects-modal");
      modal.style.display = "none";
    },
  },
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
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1200px;
  min-width: 250;
}

h2 {
  text-align: center;
}

.projects-container-grid {
  height: auto;
  display: grid;
  grid: repeat(2, minmax(auto, 300px)) / 1fr 1fr 1fr;
  grid-auto-rows: 100px;
  justify-items: center;
  align-items: center;
  text-align: center;
}

.projects {
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 80%;
  height: 50%;
  border: 10px outset var(--text);
}

.projects:hover {
  border: 10px inset var(--accent);
  box-shadow: 5px 5px 10px var(--text);
}

.projects p {
  filter: blur(5px);
}

.projects p:hover {
  filter: blur(0px);
}

.projects-modal {
  display: none;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.projects-modal-content {
  background-color: #fefefe;
  border: 5px solid var(--text);
  border-radius: 5px;
  margin: 15% auto;
  padding: 20px;
  background-color: var(--accent);

  background-size: cover;
  width: 80%;
  color: var(--background);
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-content: center;
  z-index: 1;
}

.projects-modal-content .close-contain {
  margin: 0;
  line-height: 10px;
}
</style>
