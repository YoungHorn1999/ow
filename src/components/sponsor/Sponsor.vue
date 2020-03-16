<template>
    <div class="sponsor">
        <span class="sponsortitle">合作洽谈</span>
        <span class="sponsorcontent1">面向企业</span>
        <div class="sponsorcontent1-1">
          <ur>
            <li>合作更多多元化方言学习产品</li>
            <li>挖掘方言学习产品宣传渠道</li>
            <li>为多元化方言学习活动提供商业支持（场地、物资等等）等。</li>
          </ur>
        </div>
        <div class="sponsorimg1">图片</div>
        <span class="sponsorcontent2">面向政府</span>
        <div class="sponsorcontent2-1">
          <ur>
            <li>弘扬“传承方言”的社会精神</li>
            <li>营造“全民学习方言”的社会氛围</li>
            <li> 联合举办“方言学习”、“方言宣传”的积极阳光的社会活动</li>
            <li>加强社会主义精神文明建设等</li>
          </ur>
        </div>
        <div class="sponsorimg2">图片</div>
        <span class="sponsorcontent3">面向学校</span>
        <div class="sponsorcontent3-1">
          <ur>
            <li> 联合组织开展“方言唱歌比赛”、“方言小品比赛”、“方言演讲比赛”<br>等一列精彩纷呈的校园文化建设活动；</li>
            <li>建立“方言学习角”、成立学校方言学习协会，提供更多方言学习平台；</li>
            <li> 评选“校园方言学习先锋者”，荣誉获得者可代表学校或协会参与更多<br>宣传活动及志愿活动之中等</li>
          </ur>
        </div>
        <div class="sponsorimg3">图片</div>
        <span class="sponsorcontent4">面向社会机构</span>
        <div class="sponsorcontent4-1">
          <ur>
            <li> 联合开展方言保护的志愿者活动，评选“优秀志愿者”进行表彰</li>
            <li>与地方政府联合开展有关“方言传承”的活动，弘扬传承传统文化<br>的社会方言；</li>
            <li> 为志愿活动、宣传活动提供场地、相关知识等服务。</li>
          </ur>
        </div>
        <div class="sponsorimg4">图片</div>
        <div class="advisory" @click="advisoryClick"><span class="advisoryfont">马上咨询</span></div>
    </div>
</template>

<script>
export default {
    name: "Sponsor",
    methods: {
        advisoryClick() {

        }
    }
}
</script>

<style scoped>
.sponsor{
  width: 100%;
  height: 1500px;
  background-color: #cec6c0;
  position: relative;
  top: 700px;
  }

  .sponsortitle{
    font-size: 3vw;
    font-weight: bolder;
    position: absolute;
    left: 44vw;
    top: 90px;
  }

  .sponsorcontent1{
    font-size: 2vw;
    position: absolute;
    font-weight: bolder;
    left: 50vw;
    top: 230px;
    color: #c7685c;
  }

  .sponsorcontent1-1{
    font-size: 1.3vw;
    position: absolute;
    left: 50vw;
    top: 290px;
  }

  .sponsorimg1{
    width: 400px;
    height: 200px;
    position: absolute;
    background-color: #D3D3D3;
    left: 15vw;
    top: 210px;
    font-size: 20px;
    text-align: center;
  }

  .sponsorcontent2{
    font-size: 2vw;
    position: absolute;
    font-weight: bolder;
    left: 15vw;
    top: 500px;
    color: #c7685c;
  }

  .sponsorcontent2-1{
    font-size: 1.3vw;
    position: absolute;
    left: 15vw;
    top: 560px;
  }

  .sponsorimg2{
    width: 400px;
    height: 200px;
    position: absolute;
    background-color: #D3D3D3;
    left: 60vw;
    top: 480px;
    font-size: 20px;
    text-align: center;
  }

  .sponsorcontent3{
    font-size: 2vw;
    position: absolute;
    font-weight: bolder;
    left: 50vw;
    top: 770px;
    color: #c7685c;
  }

  .sponsorcontent3-1{
    font-size: 1.3vw;
    position: absolute;
    left: 50vw;
    top: 830px;
  }

  .sponsorimg3{
    width: 400px;
    height: 200px;
    position: absolute;
    background-color: #D3D3D3;
    left: 15vw;
    top: 765px;
    font-size: 20px;
    text-align: center;
  }

  .sponsorcontent4{
    font-size: 2vw;
    position: absolute;
    font-weight: bolder;
    left: 15vw;
    top: 1040px;
    color: #c7685c;
  }

  .sponsorcontent4-1{
    font-size: 1.3vw;
    position: absolute;
    left: 15vw;
    top: 1100px;
  }

  .sponsorimg4{
    width: 400px;
    height: 200px;
    position: absolute;
    background-color: #D3D3D3;
    left: 60vw;
    top: 1025px;
    font-size: 20px;
    text-align: center;
  }

  .advisory{
    position: absolute;
    left: 44.6vw;
    top: 1350px;
    width: 140px;
    height: 40px;
    text-align: center;
    border-radius: 7px;
    cursor:pointer;
    background-color: #169bd5;
  }

  .advisoryfont{
    position: relative;
    top: 10px;
    color: white;
  }
</style>