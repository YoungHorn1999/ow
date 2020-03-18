<template>
    <div ref="block0">
      <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
          <span>
            <p>&nbsp;</p>
               仟言科技（佛山）有限公司致力于开发深度学习方<br>
            言的网络平台，为广大方言学习者提供一个最优质的线<br>
            上学习平台，便捷、有趣的学习模式让方言学习渗入用<br>
            户的生活。“仟言”还携手其他社会组织、社会机构一<br>
            同组织“保护方言文化活动”、“方言学习沙龙”等多<br>
            种线下方言学习活动，多元化地为方言的传承做贡献。<br>
                “仟言”秉承“让科学助力文化”理念，争取成为全<br>
            国方言学习的先导者，成为“方言学习、方言传承”的<br>
            代名词！
            <p>&nbsp;</p>
          </span>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>   <!-- 分页 -->
        <div class="swiper-button-prev" slot="button-prev"></div>  <!-- 箭头左 --> 
        <div class="swiper-button-next" slot="button-next"></div>  <!-- 箭头右 -->
      </swiper>
    </div>
</template>

<script>
export default {
    name: "mySwiper",
    data() {
    return {
      slide: [1, 2, 3],
      //设置属性
      swiperOption: {
        //显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true //允许分页点击跳转
        },
        //设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev'
        },
        //自动轮播
        autoplay: {
          delay: 3000
        },
        //开启循环模式
        loop: true,
        //开启鼠标滚轮控制Swiper切换
        mousewheel: true
    }
  }
}
}
</script>

<style scoped>
    .swiper-slide {
        width: 100%;
        height: 500px;
        font-size: 30px;
        text-align: center;
        background-color: #6495ed;
        color: white;
    }

    span{
        line-height:150%;
    }
</style>