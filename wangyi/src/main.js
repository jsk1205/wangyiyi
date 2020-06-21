import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store'
import 'lib-flexible/flexible'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import '../node_modules/swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
