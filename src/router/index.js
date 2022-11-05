import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes"
import store from "@/store"
Vue.use(VueRouter)
let originPush =VueRouter.prototype.push
let originReplace=VueRouter.prototype.push
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
         originPush.call(this,location,resolve,reject)
    }else{
         originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(location,resolve,reject){
        originReplace.call(this,location,resolve,reject) 
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
let router= new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  },
})

router.beforeEach(async (to,from,next)=>{
  let token =store.state.user.token
  let name = store.state.user.userInfo.name
  if(token){
    if(to.path=='/login'){
      next('/home')
    }else{
      if(name){
        next()
      }else{
        try {
          await store.dispatch('userInfo')
          next()
        } catch (error) {
          await store.dispatch('userLogOut')
          next('/login')
        }
      }
    }
  }else{
    let toPath =to.path
    if(toPath.indexOf('/shopcart')!=-1||toPath.indexOf('/trade')!=-1||toPath.indexOf('/center')!=-1||toPath.indexOf('/pay')!=-1){
      next('/login?redirect='+toPath )
    }else{
      next()
    }
  }
})
export default router