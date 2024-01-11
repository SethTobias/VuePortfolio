<template>
  <Navbar />
  <div class="reading-main-container">
    <h2>Readding:</h2>
    <p>
      People often quite shocked when I tell them that reading is one of my many
      hobbies. For myself though I would not have it any other way. I can start
      at a book for hours and feel like no time has passed what so ever. I enjoy
      the fact that simply words can create such a vivid picture in ones mind
      without even being to see it. The world of literature is so vast that you
      can lose yourself in countless books effortlessly. My favourite books to
      read include Manga, Manhua and the occasional novel.
    </p>
    <h3>My Current Top Reads:</h3>
    <div class="reading-container-flex">
      <img
        src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTc6XDKc4qhmic5P2KFKhiy9V4EOPtLNdFBj-ZSh96m3KWqFh9deysNIiIxJ90wkqf9aa-8PiOZ0qPowqxWwaY40URscg=s1600"
        alt=""
      />
      <img
        src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQMGqzowDia6MStQ8ZbMyiIXsWm2rBKzzcKd6LgNr3XMZDU4Pd5015i1SeGjkHqnc7ibBzfOF7AuLN0Kbn6o8Z3qa4h=s2560"
        alt=""
      />
      <img
        src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYSbHRj9xplJR6dc7DHNgL0xXKKWkCGGGlacOB86rSlbXv1LhUUcq92U9ory6udRUUei2Azhl_WFfY2IpnjZmFu50bDPoA=s2560"
        alt=""
      />
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
.reading-main-container {
  margin: 0 auto;
  margin-top: 50px;
  width: 1200px;
}

h2 {
  text-align: center;
  font-size: 3rem;
}

h3 {
  text-align: center;
  font-size: 1.9rem;
}

p {
  text-align: center;
  font-size: 1.6rem;
}

.reading-container-flex {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

.reading-container-flex img {
  height: 400px;
  width: 300px;
  border: 5px outset var(--secondary);
  box-shadow: var(--text) 10px 10px 10px;
}
</style>
