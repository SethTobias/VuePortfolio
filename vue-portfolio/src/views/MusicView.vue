<template>
  <Navbar />
  <div class="music-main-continer">
    <div class="music-container-grid">
      <div class="music-text">
        <p>
          I always enjoyed listening to music and singing along to my favourite
          songs. As we all do. My love for music only really started when I
          began LISTENING to music. Yes there is a difference. It all started
          with my English teacher and her rant about how all things have a
          deeper meaning. This got me thinking about the meaning behind the
          songs I listened to. This is where my journey of creating an playlist
          of songs that had more than just a catchy tune to listen to.
        </p>
      </div>
      <div class="music-iframe">
        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/playlist/5gTIHWi7j89AHID4noBOW2?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
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
.music-main-container {
  margin-top: 100px;
  width: 1200px;
  height: 800px;
}
.music-container-grid {
  display: grid;
  grid: "txt iframe" 1fr / 1fr 1fr;
}
.music-text {
  grid-area: txt;
}
.music-iframe {
  grid-area: iframe;
}
</style>
