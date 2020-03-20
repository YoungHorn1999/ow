<template>
    <div class="certificatedetail">
        <span class="content1">证书编号：7777777</span>
        <span class="content2">证书类型：实习证明</span>
        <div class="img">图片</div>
        <div class="download"><span class="font">点击下载pdf版</span></div>
    </div>
</template>
<script>
export default {
    name: "CertificateDetail"
}
</script>

<style scoped>
    .certificatedetail{
        width: 100%;
        height: 900px;
        background-color: #3d383a;
        margin-top: 93px;
    }

    .content1{
        position: absolute;
        left: 38vw;
        top: 200px;
        color: white;
        font-size: 2.5vw;
        font-weight: bold;
    }

    .content2{
        position: absolute;
        left: 38vw;
        top: 270px;
        color: white;
        font-size: 2.5vw;
        font-weight: bold;
    }

    .img{
        width: 20vw;
        height: 400px;
        position: absolute;
        left: 40vw;
        top: 400px;
        background-color: #D3D3D3;
        text-align: center;
        font-size: 2vw;
    }

    .download{
        text-align: center;
        width: 10vw;
        height: 40px;
        position: absolute;
        left: 45vw;
        top: 880px;
        background-color: #fff;
        border-radius: 4px;
        cursor:pointer;
    }

    .font{
        font-size: 1vw;
        position: absolute;
        top: 10px;
        left: 25px;
    }
</style>