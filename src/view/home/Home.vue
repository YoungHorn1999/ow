<template>
    <div>
        <mainNavBar/>
        <Background/>
        <mySwiper/> 
        <Maincontent/>
    </div>
</template>

<script>
import mainNavBar from '../../components/navbar/mainNavBar'
import Background from '../../components/background/Background'
import mySwiper from '../../components/swiper/mySwiper'
import Maincontent from '../../components/maincontent/Maincontent'

export default {
    name: "home",
    components: {
        mainNavBar,
        mySwiper,
        Background,
        Maincontent
    }
}
</script>

<style scoped>

</style>