<template>
    <div class="activity-detail">
        <div class="activityTitle"><p >官方活动</p></div>
        <div class="activityContent">通过这些方言活动来认识更多一起学习的小伙伴吧</div>
        <div class="activity1">活动1</div>
        <div class="activity2">活动2</div>
        <div class="activity3">活动3</div>
        <div class="activity4">活动4</div>
        <div class="activity5">活动5</div>
        <div class="activity6">活动6</div>
    </div>
</template>
<script>
export default {
    name: "activitydetail"
}
</script>

<style scoped>
    .activity-detail{
        width: 100%;
        height: 1000px;
        background-color: #a79782;
        position: absolute;
        margin-top: 93px;
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
    .activity4{
        width: 200px;
        height: 200px;
        position: absolute;
        left: 20vw;
        top: 630px;
        background-color: #D3D3D3;
        text-align: center;
        cursor:pointer
    }

    .activity5{
        width: 200px;
        height: 200px;
        position: absolute;
        left: 43vw;
        top: 630px;
        background-color: #D3D3D3;
        text-align: center;
        cursor:pointer
    }

    .activity6{
        width: 200px;
        height: 200px;
        position: absolute;
        left: 66vw;
        top: 630px;
        background-color: #D3D3D3;
        text-align: center;
        cursor:pointer
    }
</style>