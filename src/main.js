import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vueSwiper from 'vue-awesome-swiper'  //引入vue-awesome-swiper
import 'swiper/dist/css/swiper.css'  //引入样式

Vue.config.productionTip = false

Vue.use(vueSwiper)  //使用插件

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
