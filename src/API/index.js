import request from "./request";
import requestMock from "./requestMock";
export const reqCategoryList=()=>request(
    {
        url:'/product/getBaseCategoryList',
        method:'get'
    }
)
export const reqBannerList=()=>requestMock(
    {
        url:"/banner",
        method:"get"
    }
)
export const reqFloorlist=()=>requestMock.get("/floor")

export const reqGetSearchInfo = (params)=>request({
    url:"/list",
    method:"post",
    data:params
})
export const reqGoodsInfo =(skuid)=>request({url:`/item/${skuid}`,method:'get'})


export const reqAddOrUpdateCart =(skuid,skuNum)=>request.post(`/cart/addToCart/${skuid}/${skuNum}`)

export const reqCartList = ()=>request.get('/cart/cartList')

export const reqDeleteCartById = (skuId)=>request({url:`/cart/deleteCart/${skuId}`,method:"delete"})

export const reqUpdateCheckedById = (skuId,isChecked)=>request.get(`/cart/checkCart/${skuId}/${isChecked}`)

export const reqGetCode =(phone)=>request.get(`/user/passport/sendCode/${phone}`)

export const reqUserRegister = (data)=>request({url:"user/passport/register",method:'post',data})

export const reqUserLogin = (data)=>request({url:'/user/passport/login',method:'post',data})

export const reqUserInfo = ()=>request.get('/user/passport/auth/getUserInfo')

export const reqLogOut = ()=>request.get('user/passport/logout')

export const reqAddressInfo = ()=>request.get('/user/userAddress/auth/findUserAddressList')

export const reqOrderInfo = ()=>request.get('/order/auth/trade')

export const reqSubmitOrder = (tradeNo,data)=>request.post(`/order/auth/submitOrder?tradeNo=${tradeNo}`,data)

export const reqPayInfo = (orderId)=>request.get(`/payment/weixin/createNative/${orderId}`)

export const reqPayStatus =(orderId)=>request.get(`/payment/weixin/queryPayStatus/${orderId}`)

export const reqMyOrderList = (page,limit)=>request.get(`/order/auth/${page}/${limit}`)
