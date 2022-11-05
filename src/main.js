import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from "@/store"
import TypeNav from '@/components/TypeNav'
import Carsousel from "@/components/Carousel"
import Pagination from "@/components/Pagination"
import * as API from "@/API"
import { Button,MessageBox } from 'element-ui'
import VueLazyload from 'vue-lazyload'
import "@/mock/mockserve"
import "swiper/css/swiper.css"
import atm from '@/assets/atm.png'
import myPlugins from '@/plugins/myPlugins'
import "@/plugins/validate"
Vue.use(VueLazyload,{
  loading:atm
})
Vue.use(myPlugins,{
  name:'upper'
})
Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carsousel.name,Carsousel)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name,Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
new Vue({
  beforeCreate(){
    Vue.prototype.$bus=this
    Vue.prototype.$API=API
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
