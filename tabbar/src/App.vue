<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>
<script>

// import Tabbaritem from './components/tabbaritem.vue/'
import MainTabBar from './components/MainTabBar.vue'
export default {
    name:'App',
    components: {
      MainTabBar
    }
}
</script>
<style>
@import './assets/css/main.css';
</style>
