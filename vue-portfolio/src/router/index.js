import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MusicView from "../views/MusicView.vue";
import MoviesView from "../views/MoviesView.vue";
import SportView from "../views/SportView.vue";
import ReadingView from "../views/ReadingView.vue";
import ExperienceView from "../views/ExperienceView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import TestimonialView from "../views/TestimonialView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/music",
    name: "music",
    component: MusicView,
  },
  {
    path: "/movies",
    name: "movies",
    component: MoviesView,
  },
  {
    path: "/sport",
    name: "sport",
    component: SportView,
  },
  {
    path: "/reading",
    name: "reading",
    component: ReadingView,
  },
  {
    path: "/experience",
    name: "experience",
    component: ExperienceView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/testimonial",
    name: "testimonial",
    component: TestimonialView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
