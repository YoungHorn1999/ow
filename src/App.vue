<template>
  <div id="app">
    <mainNavBar/>
    <Background/>
    <mySwiper/> 
    <Maincontent/>
  </div>
</template>

<script>
import mainNavBar from './components/navbar/mainNavBar'
import Background from './components/background/Background'
import mySwiper from './components/swiper/mySwiper'
import Maincontent from './components/maincontent/Maincontent'


export default {
  name: "App",
  components: {
    mainNavBar,
    mySwiper,
    Background,
    Maincontent
  },
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
