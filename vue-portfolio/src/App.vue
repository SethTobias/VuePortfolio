<template>
  <router-view />
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["jsonData"]),
  },
  methods: {
    ...mapActions(["fetchJsonData"]),
    fetchData() {
      axios
        .get("https://sethtobias.github.io/VuePortfolioData/")
        .then((response) => {
          this.info = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    // Fetch data when the view is first loaded
    this.fetchData();
  },
};
</script>

<style>
:root {
  --text: #002e28;
  --background: #e0fffa;
  --primary: #008a70;
  --secondary: #5cd1ff;
  --accent: #007cf0;
}

#app {
}

nav {
  padding: 30px;
}

nav a {
}

nav a.router-link-exact-active {
}
</style>
