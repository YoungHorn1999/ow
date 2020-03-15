<template>
  <div id="app">
    <mainNavBar/>
    <img src="./assets/img/bg.png" class="bg">
    <mySwiper/>
  </div>
</template>

<script>
import mainNavBar from './components/navbar/mainNavBar'
import mySwiper from './components/swiper/mySwiper'

export default {
  name: "App",
  components: {
    mainNavBar,
    mySwiper
  },
  
}
</script>

<style>
  @import "./assets/css/base.css";

.bg{
  width: 100%;
  height: 400px;
  margin-top: 114px;
}
</style>
