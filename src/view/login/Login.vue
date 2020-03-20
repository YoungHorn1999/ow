<template>
    <div>
        <mainNavBarLogin/>
        <div class="bg"></div>
        <img src="../../assets/img/小程序logo.png" class="img"/>
        <span class="login" :class="{active: isShow}" @click="changeClick">登录</span>
        <span class="registered"  @click="changeClick" :class="{active: !isShow}" >注册</span>
        <div v-show="isShow">
            <input type="text" placeholder="手机号" class="telephone-number">
            <input type="password" placeholder="密码" class="password">
            <div class="login-button"><span class="login-font">登录</span></div>
            <span class="forget">忘记密码</span>
        </div>
        <div v-show="!isShow">
            <input type="text" placeholder="姓名" class="name">
            <input type="text"  placeholder="手机号" class="telephone-number1">
            <input type="text" placeholder="验证码" class="verification-code">
            <input type="password" placeholder="密码" class="password1">
            <div class="registered-button"><span class="registered-font">注册</span></div>
            <div class="send-verification-code"><span class="send-verification-code-font">获取验证码</span></div>
        </div>
        <InformationLogin/>
    </div>
</template>

<script>
import mainNavBarLogin from '../../components/navbar/mainNavBarLogin'
import InformationLogin from '../../components/information/InformationLogin'

export default {
    name: "Login",
    components: {
        mainNavBarLogin,
        InformationLogin
    },
    data() {
        return {
            isActive: true,
            isShow: true
        }
    },
    methods:{
        changeClick() {
            this.isShow = !this.isShow
        }
    }
}
</script>

<style scoped>
    .bg{
        width: 100%;
        height: 800px;
        background-color: #3d383a;
    }

    .img{
        width: 100px;
        height: 100px;
        position: absolute;
        left: 45vw;
        top: 160px;
    }

    .login{
        font-size: 1.5vw;
        position: absolute;
        left: 43vw;
        top: 305px;
        color: white;
        cursor:pointer;
    }

    .registered{
        font-size: 1.5vw;
        position: absolute;
        left: 50vw;
        top: 305px;
        color: white;
        cursor:pointer;
    }

    .telephone-number{
        position: absolute;
        top: 390px;
        left: 38.8vw;
        width: 18vw;
        height: 32px;
        font-size: 1.2vw;
    }

    .password{
        position: absolute;
        top: 460px;
        left: 38.8vw;
        width: 18vw;
        height: 32px;
        font-size: 1.2vw;
    }

    .login-button{
        background-color: #5a98de;
        width: 18.5vw;
        height: 40px;
        position: absolute;
        left: 38.8vw;
        top: 540px;
        border-radius: 4px;
        cursor:pointer
    }

    .login-font{
        font-size: 1.4vw;
        color: white;
        position: absolute;
        left: 7.7vw;
        top: 3px;
    }

    .forget{
        font-size: 1vw;
        color: white;
        position: absolute;
        left: 46vw;
        top: 610px;
        cursor:pointer
    }

    .verification-code{
        position: absolute;
        top: 530px;
        left: 38.8vw;
        width: 18vw;
        height: 32px;
        font-size: 1.2vw;
    }

    .password1{
        position: absolute;
        top: 600px;
        left: 38.8vw;
        width: 18vw;
        height: 32px;
        font-size: 1.2vw;
    }

    .name{
        position: absolute;
        top: 390px;
        left: 38.8vw;
        width: 18vw;
        height: 32px;
        font-size: 1.2vw;
    }

    .telephone-number1{
        position: absolute;
        top: 460px;
        left: 38.8vw;
        width: 18vw;
        height: 32px;
        font-size: 1.2vw;
    }

    .registered-button{
        background-color: #5a98de;
        width: 18.5vw;
        height: 40px;
        position: absolute;
        left: 38.8vw;
        top: 673px;
        border-radius: 4px;
        cursor:pointer
    }

    .registered-font{
        font-size: 1.4vw;
        color: white;
        position: absolute;
        left: 7.7vw;
        top: 3px;
    }

    .send-verification-code{
        width: 6vw;
        height: 25px;
        position: absolute;
        top: 536px;
        left: 50.7vw;
        border-radius: 3px;
        background-color: #5a98de;
        cursor:pointer
    }

    .send-verification-code-font{
        font-size: 1;
        color: white;
        position: absolute;
        left: 4px;
    }

    .active{
        color: #cc9900;
    }
</style>