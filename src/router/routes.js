// import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Search from '@/pages/Search'
// import Register from '@/pages/Register'
// import Detail from "@/pages/Detail"
// import AddCartSuccess from "@/pages/AddCartSuccess"
// import ShopCart from "@/pages/ShopCart"
// import Trade from "@/pages/Trade"
// import Pay from "@/pages/Pay"
// import PaySuccess from "@/pages/PaySuccess"
// import Center from "@/pages/Center"
// import MyOrder from "@/pages/Center/myOrder"
// import GroupOrder from '@/pages/Center/groupOrder'
export default [
    {
        path: '/shopcart',
        component: ()=>import("@/pages/ShopCart"),
        meta: { show: true }
    },
    {
        path: '/addcartsuccess',
        name:"addcartsuccess",
        component: ()=>import("@/pages/AddCartSuccess"),
        meta: { show: true }
    },
    {
        path: '/detail/:skuid',
        component: ()=>import("@/pages/Detail"),
        meta: { show: true }
    },
    {
        path: "/home",
        component: ()=>import('@/pages/Home'),
        meta: { show: true }
    },
    {
        name: 'search',
        path: "/search/:keyword?",
        component: ()=>import('@/pages/Search'),
        meta: { show: true },
    },
    {
        path: "/login",
        component: ()=>import('@/pages/Login'),
        meta: { show: false }
    },
    {
        path: "/register",
        component: ()=>import('@/pages/Register'),
        meta: { show: false }
    }, 
    {
        path: '/trade',
        component:()=>import("@/pages/Trade"),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if(from.path=='/shopcart'){
               next()
            }else{
                next(false)
            }
        }
    },   
    {
        path: '/pay',
        component: ()=>import("@/pages/Pay"),
        meta: { show: false },
        beforeEnter: (to, from, next) => {
            if(from.path=='/trade'){
               next()
            }else{
                next(false)
            }
        }
    },
    {
        path: '/paysuccess',
        component: ()=>import("@/pages/PaySuccess"),
        meta: { show: false },
    },
    {
        path: '/center',
        component: ()=>import("@/pages/Center"),
        meta: { show: false },
        children:[
            {
                path:'myorder',
                component:()=>import("@/pages/Center/myOrder")
            },
            {
                path:'grouporder',
                component:()=>import('@/pages/Center/groupOrder')
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path: '/',
        redirect: "/home",
    }

]
