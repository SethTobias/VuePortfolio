<template>
  <footer>
    <p>Developed by Seth Tobias</p>
    <p>
      Copy Rights Reserved
      <span class="currentYear">{{ getCurrentYear() }}</span>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
  methods: {
    getCurrentYear() {
      const currentYear = new Date().getFullYear();
      return currentYear;
    },
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

footer {
  color: var(--primary);
  font-size: 1.4rem;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  text-align: center;
  line-height: 0rem;
  margin-top: 15px;
}
</style>
