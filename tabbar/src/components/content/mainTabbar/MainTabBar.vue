<template>
    <tabar>
      <tabbaritem path="/home" activeColor="blue">
        <img src="~assets/tabbar/home.svg" alt="" slot="item-icon">
        <img src="~assets/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/cart" activeColor="blue">
        <img src="~assets/tabbar/category.svg" alt="" slot="item-icon">
        <img src="~assets/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tabbaritem>
        <tabbaritem path="/category" activeColor="blue">
        <img src="~assets/tabbar/cart.svg" alt="" slot="item-icon">
        <img src="~assets/tabbar/cart_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile" activeColor="blue">
        <img src="~assets/tabbar/profile.svg" alt="" slot="item-icon">
        <img src="~assets/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabar>
</template>

<script>
import Tabar from 'components/common/TabBar/tabbar.vue'
import Tabbaritem from 'components/common/TabBar/tabbaritem.vue'
export default {
    components:{
      Tabar,
      Tabbaritem
    }
}
</script>

<style>

</style>