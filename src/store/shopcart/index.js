import {reqCartList,reqDeleteCartById,reqUpdateCheckedById} from "@/API"
const state={
    cartList:[]
}
const mutations={
    GETCARTLIST(state,cartList){
        state.cartList=cartList
    }
}
const actions={
    async getCartList({commit}){
        let result=await reqCartList()
        if(result.code==200){
         commit("GETCARTLIST",result.data)
        }
     },
    async  deleteCartBySkuId({commit},skuId){
        let result =await reqDeleteCartById(skuId)
        if(result.code==200){
            return 'ok'
        }else{
            Promise.reject(new Error('faile'))
        }
     },
     async checkCart({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked)
        if(result.code==200){
            return "ok"
        }else{
            Promise.reject(new Error('faile'))
        }
     },
     deleteAllCheckedCart({dispatch,getters}){
        let PromiseAll=[]
        getters.cartList.cartInfoList.forEach(item => {
            if(item.isChecked==1){
               let promise = dispatch("deleteCartBySkuId",item.skuId)
               PromiseAll.push(promise)
            }
        })
        return Promise.all(PromiseAll)
     },
     updateAllCheckedCart({dispatch,state},isChecked){
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise= dispatch("checkCart",{skuId:item.skuId,isChecked})
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
     }
}
const getters={
    cartList(state){
        return state.cartList[0]||{}
    }
}
export default {
   state,
   mutations,
   actions,
   getters
}