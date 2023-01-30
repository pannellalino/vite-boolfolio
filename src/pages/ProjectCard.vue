<script>
import axios from 'axios';

import ProjectDetail from '../components/ProjectDetail.vue';

export default {
  name: 'ProjectCard',
  components:{
    ProjectDetail
  },
  data(){
    return{
      baseUrl: 'http://127.0.0.1:8001/api/',
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
  
  <div class="container text-center">
    <h2 class="text-success p-5">Elenco progetti</h2>
    <div class="d-flex flex-wrap justify-content-around">
      <ProjectDetail v-for="project in projects" :key="project.id" :project="project" />
    </div>

  </div>

</template>


<style lang="scss">
h1{
  color: white;
}
</style>