// store.js
import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    jsonData: null,
  },
  mutations: {
    setJsonData(state, data) {
      state.jsonData = data;
    },
  },
  actions: {
    fetchJsonData({ commit }) {
      return axios
        .get("https://sethtobias.github.io/VuePortfolioData/")
        .then((response) => {
          commit("setJsonData", response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching JSON data:", error);
        });
    },
  },
  getters: {
    getJsonData: (state) => state.jsonData,
  },
  modules: {},
});
