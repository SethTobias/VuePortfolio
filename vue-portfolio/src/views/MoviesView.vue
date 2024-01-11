<template>
  <Navbar />
  <div class="movies-main-container">
    <div class="movies-container-grid">
      <div class="img-span-row2">
        <img src="https://drive.google.com/uc?id=" alt="" />
      </div>
      <div class="img-center-end">
        <img src="https://drive.google.com/uc?id=" alt="" />
      </div>
      <div class="img-start-end">
        <img src="https://drive.google.com/uc?id=" alt="" />
      </div>
      <div class="txt-span-col2">
        <p>
          As a child I lost track of the countless hours I spent immersing
          myself in the world of movies. To say the my very persona was shaped
          thanks to the numerous characters is far form an understatement.
          Thanks to Stitch I have learnt to not allow what others think of us to
          have an impact on our actions. Also that change is possible if we
          welcome it. That coupled with my healthy obsession for romance films
          drives my hobby of watching movies. As it has a very special place in
          my heart.
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
  name: "MoviesView",
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

.movies-main-container {
  margin-top: 100px;
  width: 1200px;
  height: 800px;
}

.movies-container-grid {
  display: grid;
  grid: 1fr 1fr / repeat(3, 1fr);
}

.img-span-row2 {
  grid-area: 1/3/3/4;
}

.img-center-end {
  grid-area: 2/2/3/3;
}

.img-start-end {
  grid-area: 2/1/3/2;
}

.txt-span-col2 {
  grid-area: 1/1/2/3;
}
</style>
