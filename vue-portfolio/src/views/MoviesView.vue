<template>
  <Navbar />
  <div class="movies-main-container">
    <h2>Movies:</h2>
    <div class="movies-container-grid">
      <div class="img-span-row2">
        <img
          src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYRSGiddPnpYREHWY2gJzCH2ZabQs4rGKHPSMf6BxAc6kwg67FDcohC2esNIxgtnm1gMkmmHnCv0D7y7d17KFZRqslcfRg=s1600"
          alt=""
        />
      </div>
      <div class="img-center-end">
        <img
          src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYRNiBUENSJTBVeM7j6V1KaPDjl4sGayi0aS3-6UrxJNEgeRdeMDCRWHUph2_40OnS-vKw6aVf3OvPs9wOZJJKc3YRsD=s2560"
          alt=""
        />
      </div>
      <div class="img-start-end">
        <img
          src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQ_q4I1JsqfNENSyp2TgR9H2XtCmv26dNHffpeHgzyCBOQ17NUcGri0DQ1uRJpFbcnDu2YbADAqBWB742GQR7MnQp-v=s2560"
          alt=""
        />
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
  margin: 0 auto;
  margin-top: 50px;
  width: 1200px;
}

h2 {
  text-align: center;
  font-size: 3rem;
}

.movies-container-grid {
  display: grid;
  grid: 1fr 1fr / repeat(3, 1fr);
}

.img-span-row2 {
  grid-area: 1/3/3/4;
  padding-top: 3.5px;
}

.img-span-row2 img {
  height: 600px;
  width: 400px;
}

.img-center-end {
  grid-area: 2/2/3/3;
}

.img-start-end {
  grid-area: 2/1/3/2;
}

.img-start-end img,
.img-center-end img {
  height: 300px;
  width: 400px;
}

.txt-span-col2 {
  grid-area: 1/1/2/3;
  font-size: 1.7rem;
  line-height: 2.2rem;
}
</style>
