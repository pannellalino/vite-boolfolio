<script>
export default {
  name: 'Menu'
}
</script>

<template>
  <header>
    <nav>
      <ul class="d-flex justify-content-center p-0">
        <li><router-link :to="{name: 'home'}">Home</router-link></li>
        <li><router-link :to="{name: 'ProjectCard'}">Projects</router-link></li>
        <li><router-link :to="{name: 'about'}">About</router-link></li>
        <li><router-link :to="{name: 'contacts'}">Contacts</router-link></li>
      </ul>
    </nav>
  </header>
</template>  

<style lang="scss" scoped>

 li{
  padding: 15px;
  a{
    color: #166037;
    text-decoration: none;
    &:hover,
    &:active{
      color: #0c341e;
    }
  }
}

</style>