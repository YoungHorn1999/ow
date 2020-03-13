<template>
    <navBar>
      <div slot="item-text1" class="navBaritem">
          <div v-for="item1 in titles1" :key="item1" class="navBar-item1"><span style="cursor:pointer">{{item1}}</span></div>
      </div>
      <div slot="item-text2" class="navBaritem">
          <div v-for="(item2,index) in titles2" :key="item2" 
          class="navBar-item2" :class="{active: index === currentIndex}"
          @click="titleclick(index)"><span style="cursor:pointer">{{item2}}</span></div>
      </div>
    </navBar>
</template>

<script>
import navBar from './navBar'
import navBarItem from './navBarItem'

export default {
    name: "mainNavBar",
    components: {
        navBar,
        navBarItem
    },
    data() {
        return {
            titles1: ['EN | 简体中文', '登录'],
            titles2: ['首页','简介','官方活动','业务版图','证书鉴定'],
            currentIndex: 0
        }
    },
    methods: {
        titleclick(index) {
            this.currentIndex = index
        }
    }
}
</script>

<style scoped>
    .navBar-item1{
    flex: 1;
    text-align: center;
    color: white;
    font-size: 1.5vw;
    margin-top: 22px;
  }

  .navBar-item2{
    flex: 1;
    text-align: center;
    color: white;
    font-size: 1.5vw;
    margin-top: 15px;
    width: 20px;
  }

  .navBaritem {
      display: flex;
      flex: 1;
  }

  .active{
      color: #ff6000
  }
</style>