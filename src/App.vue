<template>
  <div id="app">
    <mainNavBar/>
  </div>
</template>

<script>
import mainNavBar from './components/navbar/mainNavBar'

export default {
  name: "App",
  components: {
    mainNavBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
