<template>
    <div id="navBar">
        <img src="../../assets/img/小程序logo.png" class="navImg">
      <div class="navBarRightTop">
        <slot name="item-text1"></slot>
      </div>
      <div class="navBarRightBottom">
        <slot name="item-text2"></slot>
      </div>
    </div>
</template>

<script>
export default {
    name: "navBar"
}
</script>

<style scoped>
    #navBar{
    background-color: #312e2f;
    width: 100%;
    height: 114px;
  }

    .navBarRightTop{
    display: flex;
    background-color: #312e2f;
    height: 57px;
    width: 20%;
    position: absolute;
    right: 4vw;
  }

  .navBarRightBottom{
    display: flex;
    background-color: #312e2f;
    height: 57px;
    width: 50%;
    position: absolute;
    right: 3.5vw;
    top: 57px;
  }

  .navImg{
      position: absolute;
      left: 3vw;
      top: 17px;
      width: 80px;
      height: 80px;
  }
</style>