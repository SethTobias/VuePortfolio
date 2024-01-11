<template>
  <nav>
    <div class="nav-container">
      <div class="nav-icon">
        <router-link to="/"
          ><i
            class="fa-brands fa-vuejs fa-2xl"
            style="color: var(--secondary)"
          ></i
        ></router-link>
      </div>
      <div class="nav-link">
        <div class="nav-link-grid">
          <div class="link-items-1">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/projects">Projects</router-link>
          </div>
          <div class="link-items-2">
            <router-link to="/experience">Experience</router-link>
            <router-link to="/testimonial">Testimonial</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>
        </div>
      </div>
      <div class="nav-settings">
        <div class="nav-settings-grid">
          <i class="fa-solid fa-gear fa-lg" style="color: var(--secondary)"></i
          ><i
            class="fa-solid fa-gear fa-lg"
            style="color: var(--secondary)"
          ></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
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

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vmax;
}

.nav-container {
  background-color: var(--text);
  display: grid;
  grid: "a b c" / 1fr 4fr 1fr;
  gap: 4rem;
  height: 10vh;
}

.nav-icon {
  grid-area: a;
  margin: auto;
}

.nav-link {
  grid-area: b;
  align-self: center;
}

.nav-link-grid {
  display: grid;
  grid: 1fr / 1fr;
}

.link-items-1 {
  grid-area: 1/1/1/1;
  display: flex;
  justify-content: space-around;
  animation: navDisappear 8s 5s ease-in-out infinite;
}

.link-items-2 {
  grid-area: 1/1/1/1;
  display: flex;
  justify-content: space-around;
  opacity: 0%;
  z-index: -1;
  animation: navAppear 8s 5s ease-in-out infinite;
}

.nav-settings {
  grid-area: c;
  margin: auto;
}

.nav-settings-grid {
  margin-top: 10px;
  display: grid;
  grid: 15px 15px / 1fr 1fr;
}

.nav-settings-grid i:nth-of-type(1n) {
  grid-area: 1/2/1/2;
}

.nav-settings-grid i:nth-of-type(2n) {
  grid-area: 2/1/2/1;
}

@keyframes navAppear {
  0%,
  100% {
    opacity: 0%;
    z-index: -1;
  }
  50% {
    opacity: 100%;
    z-index: 2;
  }
}

@keyframes navDisappear {
  0%,
  100% {
    opacity: 100%;
    z-index: 2;
  }
  50% {
    opacity: 0%;
    z-index: -1;
  }
}
</style>
