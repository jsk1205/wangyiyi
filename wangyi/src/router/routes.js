//所以路由配置的数组模块
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import Buy from '@/pages/Buy';
import Cart from "@/pages/Cart";
import Personal from '@/pages/Personal';
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import Search from "@/pages/Search";
export default [
  //创建路由器
  {
    path:'/',
    component:Home
  },
  {
    path:'/category',
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
    path:'/login',
    component:Login,
    meta: {
      isHideFooter: true //标识footer是否隐藏
    }
  },
  {
    path:'/register',
    component:Register,
    meta: {
      isHideFooter: true //标识footer是否隐藏
    }
  },
  {
    path:'/detail',
    component:Detail
  },
  {
    path:'/search',
    component:Search,
    meta: {
      isHideFooter: true //标识footer是否隐藏
    }
  }
]