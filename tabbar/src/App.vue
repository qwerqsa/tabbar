<template>
  <div id="app">
    <tabar>
      <tabbaritem>
        <img src="./assets/tabbar/cart.svg" alt="">
        <div>首页</div>
      </tabbaritem>
        <tabbaritem>
        <img src="./assets/tabbar/category.svg" alt="">
        <div>首页</div>
      </tabbaritem>
      <tabbaritem>
        <img src="./assets/tabbar/home.svg" alt="">
        <div>首页</div>
      </tabbaritem>
      <tabbaritem>
        <img src="./assets/tabbar/profile.svg" alt="">
        <div>首页</div>
      </tabbaritem>
    </tabar>
  </div>
</template>
<script>
import Tabar from './components/TabBar/tabbar.vue'
import Tabbaritem from './components/TabBar/tabbaritem.vue'
// import Tabbaritem from './components/tabbaritem.vue/'
export default {
    name:'App',
    components:{
      Tabar,
        Tabbaritem
    }
}
</script>
<style>
@import './assets/css/main.css';
</style>
