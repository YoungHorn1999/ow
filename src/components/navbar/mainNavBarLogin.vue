<template>
    <navBar>
      <div slot="item-text1" class="navBaritem">
            <span class="text1" :class="{active: !isActive}" @click="changeLang">EN</span>
            <span class="text2">|</span>
            <span class="text3" :class="{active: isActive}" @click="changeLang">简体中文</span>
            <span class="text4" >登录</span>
      </div>
      <div slot="item-text2" class="navBaritem">
          <div v-for="(item2,index) in titles2" :key="item2" 
          class="navBar-item2" :class="{active: index === currentIndex}"
          @click="titleClick(index)"><span style="cursor:pointer">{{item2}}</span></div>
      </div>
    </navBar>
</template>

<script>
import navBar from './navBar'

export default {
    name: "mainNavBar",
    components: {
        navBar,
    },
    data() {
        return {
            titles1: ['EN | 简体中文', '登录'],
            titles2: ['首页','简介','官方活动','业务版图','证书鉴定'],
            currentIndex: 9,
            isActive: true
        }
    },
    methods: {
        titleClick(index) {
            this.currentIndex = index;
            if(index === 0){
                this.$router.push("/home")    
            }
        },
        changeLang() {
          this.isActive = !this.isActive
        },
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

  .text1{
    position: absolute;
    left: 0;
    top: 30px;
    color: white;
    font-size: 1.5vw;
    cursor:pointer
  }

  .text2{
    position: absolute;
    left: 45px;
    top: 30px;
    color: white;
    font-size: 1.5vw;
  }

  .text3{
    position: absolute;
    left: 70px;
    top: 30px;
    color: white;
    font-size: 1.5vw;
    cursor:pointer
  }

  .text4{
    position: absolute;
    left: 210px;
    top: 30px;
    color: #ff6000;
    font-size: 1.5vw;
    cursor:pointer;
  }

  .active{
      color: #ff6000
  }
</style>