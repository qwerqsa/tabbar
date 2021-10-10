<template>
  <div class="tab-bar-item">
    <!-- <img src="../../assets/tabbar/cart.svg" alt=""> -->
    <!-- 首页 -->
    <slot></slot>
    <slot></slot>

  </div>
</template>

<script>
export default {

}
</script>

<style>
 .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>