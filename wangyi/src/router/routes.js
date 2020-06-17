//所以路由配置的数组模块
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import Buy from '@/pages/Buy';
import Cart from "@/pages/Cart";
import Personal from '@/pages/Personal';
import Login from "@/pages/Login";
import Register from "@/pages/Register";
export default [
  //创建路由器
  {
    path:'/',
    component:Home
  },
  {
    path:'/catrgory',
    component:Category
  },
  {
    path:'/buy',
    component:Buy
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'login',
    component:Login
  },
  {
    path:'register',
    component:Register
  }
]