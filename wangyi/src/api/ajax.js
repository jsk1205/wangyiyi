//二次封装axios
import axios from "axios";
import Nprogress from "nprogress";
//配置不显示右上角的旋转进度条即只显示水平进度条
//Nprogress.configure({showSpinner:false})
//1
const ajax=axios.create({
  // baseURL:'/api',
  // timeout:1000
})
//2请求拦截器
ajax.interceptors.request.use((config)=>{
  Nprogress.start()
    return  config
})
//2响应拦截器
ajax.interceptors.response.use(
  (response)=>{
  Nprogress.done()
  //3
  return response.data

  },
  error=>{
    Nprogress.done()
    //4
    alert('请求出错'+error.message||'未知错误')
    return Promise.reject(error)
    // console.log('请求出错',error)
  }

)

export default ajax