<template>
  <Navbar />
  <div class="contact-main-container">
    <div class="contact-container-flex">
      <h1>Wanna Get In Touch? Here is How!</h1>
      <p>
        Either complete one of the below contact forms or follow one of the many
        links to any of my social media pages. This includes my Email address
        and telephone number.
      </p>
      <h2>Contact Forms:</h2>
      <p>
        Below you will find one of rwo contact forms. The first being for if you
        would like to get a hold of me for any personal enquires, eg. Get advice
        on how to build an awesome portfolio. The second being for more formal
        and professional enquires, eg. Wanting to collaborate on a certain
        project.
      </p>
      <h3>Personal Form:</h3>
      <form action="">
        <input type="text" />
        <input type="text" />
        <textarea name="" id=""></textarea>
        <input type="submit" value="" />
      </form>
      <h3>Enterprise/Cooperation Form:</h3>
      <form action="">
        <input type="text" />
        <input type="text" />
        <textarea name="" id=""></textarea>
        <input type="submit" value="" />
      </form>
      <h2>Social Platforms:</h2>
      <div class="contact-social-container">
        <i class="fa-regular fa-envelope fa-2xl"></i>
        <i class="fa-solid fa-square-phone fa-2xl"></i>

        <i class="fa-brands fa-linkedin fa-2xl"></i>
        <i class="fa-brands fa-github fa-2xl"></i>
        <i class="fa-brands fa-instagram fa-2xl"></i>
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

.contact-main-container {
  margin-top: 100px;
}

.contact-container-flex {
  margin: auto;
  width: 1200px;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
}

.contact-social-container {
  color: var(--secondary);
}
</style>
