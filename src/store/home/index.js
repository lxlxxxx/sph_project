import { reqBannerList, reqCategoryList, reqFloorlist } from "@/API"
const state = {
   categoryList: [],
   bannerList: [],
   floorList: []
}
const mutations = {
   GETCATEGORYLIST(state, categoryList) {
      state.categoryList = categoryList
   },
   GETBANNERLIST(state, bannerlist) {
      state.bannerList = bannerlist
   },
   GETFLOORLIST(state, floorlist) {
      state.floorList = floorlist
   }
}
const actions = {
   async getcategoryList({ commit }) {
      let result = await reqCategoryList()
      if (result.code === 200) {
         commit("GETCATEGORYLIST", result.data)
      }
   },
   async getbannerlist({ commit }) {
      let result = await reqBannerList()
      if (result.code === 200) {
         commit("GETBANNERLIST", result.data)
      }
   },
   async getfloorlist({ commit }) {
      let result = await reqFloorlist()
      if (result.code === 200) {
         commit("GETFLOORLIST", result.data)
      }
   }

}
const getters = {}
export default {
   state,
   mutations,
   actions,
   getters
}