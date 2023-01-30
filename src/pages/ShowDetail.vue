<script>
import axios from 'axios';

export default {
  name: 'ShowDetail',
  data(){
    return{
      baseUrl: 'http://127.0.0.1:8001/api/',
      project: {}
    }
  },
  methods:{
    getApi(){
            axios.get(`${this.baseUrl}projects/${this.$route.params.slug}`)
                .then(res => {
                    this.project = res.data;
                    console.log(res.data);
                })
        }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>
  <div class="container d-flex justify-content-center">
      <div class="card bg-transparent text-success border-success p-4 text-center" style="width: 18rem;">
        <img :src="project.cover_image" class="card-img-top" :alt="project.name">
        <div class="card-body">
          <h5 class="card-title text-white">{{ project.name }}</h5>
          <p class="card-text">{{ project.summary }}</p>
          <router-link class="btn btn-outline-success" :to="{name: 'ProjectCard'}">Go Back</router-link>
        </div>
    </div>
  </div>
</template>  

<style>

</style>