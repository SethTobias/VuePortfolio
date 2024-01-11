<template>
  <Navbar />
  <div class="sport-main-container">
    <h1>Hockey and Sport:</h1>
    <div class="sport-container-grid">
      <div class="img-span-row2">t</div>
      <div class="img-center-end">trt</div>
      <div class="img-end-end">t</div>
      <div class="txt-end-start">
        <p>
          In the early years of my life I had no particular interest for sport.
          The only times I would partake in any form of sport was for academic
          reasons or if I was asked to join in. This however changed when I
          learnt about Hockey. Form the very first time I walked onto the Hockey
          turf I knew it was a match made in heaven.
        </p>
      </div>
      <div class="txt-center-end">
        <p>
          Is what I would like to say. My love for the sport actually grew
          thanks to my desire to improve as a player. Through my constant
          failures within the sport I learnt to always get back up after getting
          knocked down. Along my journey as a Hockey player I learnt the
          importance of teamwork and dedication. I also learnt the joys of
          sport.
        </p>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "SportView",
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

.sport-main-container {
  margin-top: 100px;
  width: 1200px;
  height: 800px;
}

.sport-container-grid {
  display: grid;
  grid: 1fr 1fr / repeat(3, 1fr);
}

.sport-container-grid img {
  border: 5px solid var(--text);
}

.img-span-row2 {
  grid-area: 1/1/3/2;
}

.img-center-end {
  grid-area: 1/2/2/3;
}

.img-end-end {
  grid-area: 2/3/3/4;
}

.txt-end-start {
  grid-area: 1/3/2/4;
  text-align: end;
}

.img-center-end {
  grid-area: 2/2/3/3;
  text-align: center;
}
</style>
