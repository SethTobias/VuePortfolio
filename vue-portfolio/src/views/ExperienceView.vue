<template>
  <Navbar />
  <div class="experience-main-container">
    <h2>Experience:</h2>
    <div class="experience-container-grid">
      <div class="experience-img">
        <img
          src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYT_hR8XuX8gw_eFU_k7bmowuLZnJuBPap-MmZDNXSP3X-6LrvMIGo_rvFaLl_N8SE1vFEJYIP5JlCn6RmYOLQVN7Rp3BA=s1600"
          alt=""
        />
      </div>
      <div class="experience-education">
        <h3>Education</h3>
        <h4>Matric Results</h4>
        <div class="matric-flex">
          <div class="matric-mini-flex">
            <p>Subject</p>
            <p>Mark Achieved</p>
          </div>
          <div class="matric-mini-flex">
            <p>Computer Applications:</p>
            <p>82%</p>
          </div>
          <div class="matric-mini-flex">
            <p>Life Sciences:</p>
            <p>80%</p>
          </div>
        </div>
      </div>
      <div class="experience-volunteer">
        <div class="experience-volunteer-content">
          <h3>Volunteer Experience:</h3>
          <div class="volunteer-young-people">
            <h4>Young People Leader:</h4>
            <p>Organizing Events</p>
            <p>Guiding younger members</p>
          </div>
          <div class="volunteer-fallen-angels">
            <h4>Fallen Angels Rescue:</h4>
            <p>Help walking dogs</p>
            <p>Upkeep of dog shelters</p>
            <p>Basic maintenance tasks</p>
          </div>
        </div>
        <img
          src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYS1tnRyTKo9R17E-1rhgqL4o6JVezI5bUgfWjMx2xideFx_ep2O3kMiiDYHKcacVZo_YwQeRbG4dH8MZTj6gH5TIKfkzQ=s1600"
          alt=""
        />
      </div>
      <div class="experience-skills">
        <h3>Skills:</h3>
        <div class="skills-languages">
          <h4>Languages:</h4>
          <div class="skills-flex">
            <i class="fa-brands fa-html5 fa-2xl"></i>
            <i class="fa-brands fa-css3-alt fa-2xl"></i>
            <i class="fa-brands fa-js fa-2xl"></i>
          </div>
        </div>
        <div class="skills-frameworks">
          <h4>Frameworks:</h4>
          <div class="skills-flex">
            <i class="fa-brands fa-bootstrap fa-2xl"></i>
            <i class="fa-brands fa-vuejs fa-2xl"></i>
          </div>
        </div>
        <div class="skills-other">
          <h4>Other Skills:</h4>
          <div class="skills-flex">
            <i class="fa-brands fa-figma fa-2xl"></i>
            <i class="fa-brands fa-git-alt fa-2xl"></i>
          </div>
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
  name: "ExperienceView",
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
  margin: 0 auto;
  margin-top: 50px;
  width: 1200px;
  text-align: center;
}

h2 {
  text-align: center;
}
.experience-container-grid {
  display: grid;
  grid: repeat(2, minmax(auto, 1fr)) / repeat(3, minmax(auto, 400px));
  background-color: var(--secondary);
  gap: 20px;
  border: 5px solid var(--primary);
}
.experience-container-grid img {
  height: 300px;
  width: 400px;
}

.experience-img {
  grid-area: 1/1/2/2;
}
.experience-education {
  grid-area: 1/2/2/3;
}
.experience-volunteer {
  justify-items: center;
  align-items: center;
  grid-area: 2/1/3/4;
  display: flex;
  justify-content: space-evenly;
}
.experience-skills {
  text-align: center;
  grid-area: 1/3/3/4;
}

.skills-flex {
  display: flex;
  justify-content: space-evenly;
}
</style>
