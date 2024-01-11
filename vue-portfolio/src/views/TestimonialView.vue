<template>
  <Navbar />
  <div class="testimonial-main-container">
    <h2>Testimonial:</h2>
    <div class="testimonial-container-grid">
      <div class="testimonial-items1">
        <div class="card1 testimonial-card">
          <div class="card1 container-grid">
            <div class="card1 img-container">
              <img src="https://drive.google.com/uc?id=" alt="" />
            </div>
            <div class="card1 description">
              <div class="card1 description-collapsed">
                <p>Name:</p>
                <p>Position:</p>
                <p>Relationship:</p>
              </div>
              <div class="card1 description-expanded">
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div class="card2 testimonial-card">
          <div class="card2 container-grid">
            <div class="card2 img-container">
              <img src="https://drive.google.com/uc?id=" alt="" />
            </div>
            <div class="card2 description">
              <div class="card2 description-collapsed">
                <p>Name:</p>
                <p>Position:</p>
                <p>Relationship:</p>
              </div>
              <div class="card2 description-expanded">
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div class="card3 testimonial-card">
          <div class="card3 container-grid">
            <div class="card3 img-container">
              <img src="https://drive.google.com/uc?id=" alt="" />
            </div>
            <div class="card3 description">
              <div class="card3 description-collapsed">
                <p>Name:</p>
                <p>Position:</p>
                <p>Relationship:</p>
              </div>
              <div class="card3 description-expanded">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="testimonial-items2">
        <div class="card4 testimonial-card">
          <div class="card4 container-grid">
            <div class="card4 img-container">
              <img src="https://drive.google.com/uc?id=" alt="" />
            </div>
            <div class="card4 description">
              <div class="card4 description-collapsed">
                <p>Name:</p>
                <p>Position:</p>
                <p>Relationship:</p>
              </div>
              <div class="card4 description-expanded">
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div class="card5 testimonial-card">
          <div class="card5 container-grid">
            <div class="card5 img-container">
              <img src="https://drive.google.com/uc?id=" alt="" />
            </div>
            <div class="card5 description">
              <div class="card5 description-collapsed">
                <p>Name:</p>
                <p>Position:</p>
                <p>Relationship:</p>
              </div>
              <div class="card5 description-expanded">
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div class="card6 testimonial-card">
          <div class="card6 container-grid">
            <div class="card6 img-container">
              <img src="https://drive.google.com/uc?id=" alt="" />
            </div>
            <div class="card6 description">
              <div class="card6 description-collapsed">
                <p>Name:</p>
                <p>Position:</p>
                <p>Relationship:</p>
              </div>
              <div class="card6 description-expanded">
                <p></p>
              </div>
            </div>
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
  name: "TestimonialView",
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

.testimonial-main-container {
  margin: 0 auto;
  margin-top: 50px;
  width: 1200px;
}

h2 {
  font-size: 3rem;
  text-align: center;
}

.testimonial-container-grid {
  display: grid;
  grid-row: 1fr / 1fr;
}

.testimonial-card {
  background-color: var(--secondary);
  height: fit-content;
  width: fit-content;
}

.testimonial-items1 {
  grid-area: 1/1/2/2;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  z-index: -1;
}

.testimonial-items1 .testimonial-card {
  background-color: var(--secondary);
}

.container-grid {
  height: 400px;
  width: 300px;
  display: grid;
  grid: "img" 75% "description" 25% / 1fr;
}

.img-container {
  grid-area: img;
}

.description {
  grid-area: description;
  /* overflow-y: scroll; */
  background-color: var(--primary);
}

.description-collapsed {
  margin: 0;
}

.description-expanded {
  margin: 0;
}

.description {
  grid-area: description;
  overflow-y: hidden;
}

.description-collapsed {
  margin: 0;
}

.description-expanded {
  margin: 0;
}

.card1.testimonial-card {
  margin: 0;
}

.card1.container-grid {
  margin: 0;
}

.card1.img-container {
  margin: 0;
}

.card1.description {
  margin: 0;
}

.card1.description-collapsed {
  margin: 0;
}

.card1.description-expanded {
  margin: 0;
}

.testimonial-card2 {
  margin: 0;
}

.card2.container-grid {
  margin: 0;
}

.card2.img-container {
  margin: 0;
}

.card2.description {
  margin: 0;
}

.card2.description-collapsed {
  margin: 0;
}

.card2.description-expanded {
  margin: 0;
}

.testimonial-card3 {
  margin: 0;
}

.card3.container-grid {
  margin: 0;
}

.card3.img-container {
  margin: 0;
}

.card3.description {
  margin: 0;
}

.card3.description-collapsed {
  margin: 0;
}

.card3.description-expanded {
  margin: 0;
}

.testimonial-items2 {
  grid-area: 1/1/2/2;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  z-index: -2;
}

.testimonial-items2 .testimonial-card {
  background-color: var(--primary);
}

.testimonial-card4 {
  margin: 0;
}

.card4.container-grid {
  margin: 0;
}

.card4.img-container {
  margin: 0;
}

.card4.description {
  margin: 0;
}

.card4.description-collapsed {
  margin: 0;
}

.card4.description-expanded {
  margin: 0;
}

.testimonial-card5 {
  margin: 0;
}

.card5.container-grid {
  margin: 0;
}

.card5.img-container {
  margin: 0;
}

.card5.description {
  margin: 0;
}

.card5.description-collapsed {
  margin: 0;
}

.card5.description-expanded {
  margin: 0;
}

.card6.testimonial-card {
  margin: 0;
}

.card6.container-grid {
  margin: 0;
}

.card6.img-container {
  margin: 0;
}

.card6.description {
  margin: 0;
}

.card6.description-collapsed {
  margin: 0;
}

.card6.description-expanded {
  margin: 0;
}
</style>
