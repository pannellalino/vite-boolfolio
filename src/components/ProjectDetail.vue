<script>
export default {
  name: 'ProjectDetail',
  data(){
    return
  },
  props:{
    project: Object
  }
}
</script>

<template>
  
      <div class="card mb-4 bg-dark" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-muted">{{project.name}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{project.summary}}</h6>
          <button class="btn btn-outline-success">
            <router-link class="text-decoration-none" :to="{name: 'ShowDetail', params:{slug: project.slug} }">Show</router-link>
          </button>
        </div>
      </div>

</template>  

<style lang="scss" scoped>
a{
  color: #166037;
  &:hover{
    color: #0c341e;
  }
}
</style>