<template>
    <div>
        <div  ref="block0" id="flag" ></div>
        <navBar>
        <div slot="item-text1" class="navBaritem">
            <div v-for="item1 in titles1" :key="item1" class="navBar-item1"><span style="cursor:pointer">{{item1}}</span></div>
        </div>
        <div slot="item-text2" class="navBaritem">
            <div v-for="(item2,index) in titles2" :key="item2" 
            class="navBar-item2" :class="{active: index === currentIndex}"
            @click="goAssignBlock('block'+ index,60)" ><span style="cursor:pointer">{{item2}}</span></div>
        </div>
        </navBar>
        <Background/>
        <div class="block1" id="flag"></div>
        <div class="block1-1" ref="block1"></div>
        <mySwiper/>
        <div class="block2" id="flag"></div>
        <div ref="block2" ></div>
        <Activity/>
        <div class="block3" id="flag"></div>
        <div class="block3-3" ref="block3" ></div>
        <sponsor/>
        <div class="block4" id="flag"></div>
        <div class="block4-4" ref="block4"></div>
        <Certificate/>
        <Information/>
    </div>
</template>

<script>

    import Background from '../../components/background/Background'
    import mySwiper from '../../components/swiper/mySwiper'
    import navBar from '../../components/navbar/navBar'
    import Activity from '../../components/activity/Activity'
    import Sponsor from '../../components/sponsor/Sponsor'
    import Certificate from '../../components/certificate/Certificate'
    import Information from '../../components/information/Information'

export default {
    name: "home",
    components: {
        mySwiper,
        Background,
        navBar,
        Activity,
        Sponsor,
        Certificate,
        Information
    },
    data() {
        return {
            titles1: ['EN | 简体中文', '登录'],
            titles2: ['首页','简介','官方活动','业务版图','证书鉴定'],
            currentIndex: 0
        }
    },
    mounted() {
        // 监听滚动事件
        window.addEventListener('scroll', this.onScroll, false)
    },
    destroy() {
        // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        goAssignBlock(el, speed) {
            let _this = this;
            let windowH = window.innerHeight; //浏览器窗口高度
            let h = this.$refs[el].offsetHeight; //模块内容高度
            let t = this.$refs[el].offsetTop; //模块相对于内容顶部的距离
            let top = t ; //需要滚动到的位置，若改为 t 则滚动到模块顶部位置，此处是滚动到模块相对于窗口垂直居中的位置
            let scrollTop =
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop; //滚动条距离顶部高度
            let currentTop = scrollTop; //默认滚动位置为当前滚动条位置，若改为0，则每次都会从顶部滚动到指定位置
            let requestId;
            //采用requestAnimationFrame，平滑动画
            function step() {
              //判断让滚动条向上滚还是向下滚
              if (scrollTop < top) {
                if (currentTop <= top) {
                  //   window.scrollTo(x,y) y为上下滚动位置
                  window.scrollTo(0, currentTop);
                  requestId = window.requestAnimationFrame(step);
                } else {
                  window.cancelAnimationFrame(requestId);
                }
                //向下滚动
                currentTop += speed;
              } else {
                if (top <= currentTop) {
                  //注：此处 - speed 是解决居中时存在的问题，可自行设置或去掉
                  window.scrollTo(0, currentTop - speed);
                  requestId = window.requestAnimationFrame(step);
                } else {
                  window.cancelAnimationFrame(requestId);
                }
                //向上滚动
                currentTop -= speed;
              }
            }
        window.requestAnimationFrame(step);
          },
          titleClick(index){
              this.currentIndex = index
          },


        // 滚动监听器
        onScroll() {
        // 获取所有锚点元素
        const navContents = document.querySelectorAll('#flag')
        // 所有锚点元素的 offsetTop
        const offsetTopArr = []
        navContents.forEach(item => {
          offsetTopArr.push(item.offsetTop)
        })
        // 获取当前文档流的 scrollTop
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 定义当前点亮的导航下标
        let navIndex = 0
        for (let n = 0; n < offsetTopArr.length; n++) {
          // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
          // 那么此时导航索引就应该是n了
          if (scrollTop >= offsetTopArr[n]) {
            navIndex = n
          }
        }
        this.currentIndex = navIndex
      },
    
    }
}


</script>

<style scoped>
    .block1{
      /* width: 200px;
      height: 200px;
      background-color: black; */
      position: absolute;
      top: 300px;
    }

    .block1-1{
        position: absolute;
        top: 350px;
    }

    .block2{
      position: absolute;
      top: 850px;
    }

    .block3{
        position: relative;
        top: 600px;
    }

    .block3-3{
        position: relative;
        top: 650px;
    }

    .block4{
        position: absolute;
        top: 3100px;
    }

    .block4-4{
        position: absolute;
        top: 3150px;
    }

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