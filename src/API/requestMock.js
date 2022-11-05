import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css"
const requestMock = axios.create(
    {
        baseURL: '/mock',
        timeout: 5000,
        
    }
)
requestMock.interceptors.request.use((config)=>{
    nProgress.start()
    return config
    
})
requestMock.interceptors.response.use((res)=>{
    nProgress.done()
    return res.data
    
},(error)=>{
    return Promise.reject(new Error("faile"))
})
export default requestMock