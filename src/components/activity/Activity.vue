<template>
    <div class="activity">
      <div class="activityTitle"><p >官方活动</p></div>
      <div class="activityContent">通过这些方言活动来认识更多一起学习的小伙伴吧</div>
      <div class="activity1">活动1</div>
      <div class="activity2">活动2</div>
      <div class="activity3">活动3</div>
      <div class="moreActivity" @click="moreActivityClick">
        <span class="moreActivityfont">更多活动</span>
      </div>
    </div>
</template>

<script>
export default {
    name: "Activity",
    methods: {
    moreActivityClick() {
      this.$router.push("/activity")
    }
  }
}
</script>

<style scoped>
.activity{
  width: 100%;
  height: 700px;
  background-color: #a79782;
  position: absolute;
}

.activityTitle{
  font-size: 3vw;
  text-align: center;
  position: relative;
  top: 70px;
  font-weight: bolder;
}

.activityContent{
  font-size: 1.5vw;
  text-align: center;
  position: relative;
  top: 70px;
}

.moreActivity{
  position: absolute;
  left: 44.6vw;
  top: 600px;
  background-color: #fff;
  width: 140px;
  height: 40px;
  text-align: center;
  border-radius: 7px;
  cursor:pointer
}

.moreActivityfont{
  text-align: center;
  position: relative;
  top: 10px;
}

.activity1{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 20vw;
  top: 330px;
  background-color: #D3D3D3;
  text-align: center;
  cursor:pointer
}

.activity2{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 43vw;
  top: 330px;
  background-color: #D3D3D3;
  text-align: center;
  cursor:pointer
}

.activity3{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 66vw;
  top: 330px;
  background-color: #D3D3D3;
  text-align: center;
  cursor:pointer
}
</style>