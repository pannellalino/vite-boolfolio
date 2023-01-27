<script>

import Menu from './partials/Menu.vue';

export default {
  name: 'App',
  components:{
    Menu
  }
}
</script>


<template>
  <Menu />
  <router-view></router-view>
</template>


<style lang="scss">
@use './style/general.scss';
</style>