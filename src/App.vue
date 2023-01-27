<script>

import axios from 'axios';
import Menu from './partials/Menu.vue';
import ProjectCard from "./pages/ProjectCard.vue";

export default {
  name: 'App',
  components:{
    Menu,
    ProjectCard
  },
  data(){
    return {
      baseUrl: 'http://127.0.0.1:8000/api/',
      projects: []
    }
  },
  methods:{
    getApi(){
      axios.get(this.baseUrl + 'projects')
        .then(result =>{
          this.projects = result.data.projects
        })
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>


<template>
  <Menu />
  <router-view></router-view>
  <div class="container text-center">
    <h1 class="text-success p-5">Elenco progetti</h1>
    <div class="d-flex flex-wrap justify-content-around">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>


<style lang="scss">
@use './style/general.scss';
</style>