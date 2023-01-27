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
          <a href="#" class="">Show</a>
        </div>
      </div>

</template>  

<style>

</style>