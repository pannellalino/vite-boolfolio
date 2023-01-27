import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import ProjectCard from './pages/ProjectCard.vue';
import ShowDetail from './pages/ShowDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
      {
        path:'/',
        name:'home',
        component: Home
      },
      {
        path:'/progetti',
        name:'ProjectCard',
        component: ProjectCard
      },
      {
        path:'/chi-siamo',
        name:'about',
        component: About
      },
      {
        path:'/contatti',
        name:'contacts',
        component: Contacts
      },
      {
        path:'/show',
        name:'ShowDetail',
        component: ShowDetail
      }
    ]
});

export { router };