<script>
import axios from 'axios';

export default {
  name: 'ShowDetail',
  data(){
    return{
      baseUrl: 'http://127.0.0.1:8000/api/',
      project: {}
    }
  },
  methods:{
    getApi(){
            axios.get(this.baseUrl + this.$route.params.slug)
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
  <div class="container">
    <h1>{{ project.name }}</h1>
  </div>
</template>  

<style>

</style>