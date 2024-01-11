<template>
  <Navbar />
  <div class="sport-main-container">
    <h2>Hockey and Sport:</h2>
    <div class="sport-container-grid">
      <div class="img-span-row2">
        <img
          src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTyDLDa2VMmUdx7JbrkTPoqV9UGNn1523SF3KINPN021AXTJaTSBhGc-6765aLQP5INpnRNia9ydHQuCGQ2_HeCb39U=s2560"
          alt=""
        />
      </div>
      <div class="img-center-end">
        <img
          src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTkhCE4CooCBeUbCUL5xSu-0KsvLKNaxSvl8So_K1AeAlWToRf8J-Hy4QKhXhmc-IwCSOWznJ7Le1rBXVU0VwkAGZvYBg=s2560"
          alt=""
        />
      </div>
      <div class="img-end-end">
        <img
          src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQUVRmxwORr0ayMOokh8cgDIn56G8_3hITxbqNmkaeZCdr1jKgK4H1xMVG13G1LjRR5xgZmEHRt96hRehyqgQGjhrpoDw=s2560"
          alt=""
        />
      </div>
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
  margin: 0 auto;
  margin-top: 50px;
  width: 1200px;
}

h2 {
  text-align: center;
  font-size: 3rem;
}

.sport-container-grid {
  display: grid;
  grid: 1fr 1fr / repeat(3, 1fr);
  gap: 5px 10px;
}

.sport-container-grid img {
  border: 3px groove var(--text);
}

.img-span-row2 {
  grid-area: 1/1/3/2;
}

.img-span-row2 img {
  height: 600px;
  width: 300px;
}

.img-center-end {
  grid-area: 1/2/2/3;
}

.img-end-end {
  grid-area: 2/3/3/4;
}

.img-end-end img,
.img-center-end img {
  height: 300px;
  width: 450px;
}

.txt-end-start {
  grid-area: 1/3/2/4;
  text-align: end;
  font-size: 1.7rem;
  line-height: 1.7rem;
}

.txt-center-end {
  grid-area: 2/2/3/3;
  text-align: center;
  font-size: 1.7rem;
  line-height: 1.7rem;
}
</style>
