import {getUUID} from "@/utils/uuid_token"
import {reqGoodsInfo,reqAddOrUpdateCart} from "@/API"
const state={
    goodInfo:{},
    uuid_token:getUUID()
}
const mutations={
    GETGOODSINFO(state,goodInfo){
        state.goodInfo=goodInfo
    },
}
const actions={
    async getGoodsInfo({commit},skuid){
       let result= await reqGoodsInfo(skuid)
       if(result.code==200){
        commit('GETGOODSINFO',result.data)
       }
    },
    async addOrUpdateCart({commit},{skuid,skuNum}){
        let result=await reqAddOrUpdateCart(skuid,skuNum)
        if(result.code==200){
            return "成功"
        }else{
            return Promise.reject(new Error("faile"))
        }
    }
}
const getters={
    categoryView(state){
        return state.goodInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[]
    }

}
export default{
    state,
    mutations,
    actions,
    getters
}