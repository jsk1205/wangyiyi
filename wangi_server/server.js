let Koa = require('koa')
let KoaRouter = require('koa-router');
let cors=require('cors')
require('./db')
let StudentsModel=require('./collections/students')
//生成应用的实例
const app = new Koa();
const router = new KoaRouter();


let demoData = require('./datas/demo');
//3.1 使用中间键函数
app
  .use(router.routes())
  .use(router.allowedMethods())//声明使用路由的方法
  .use(cors())
router.get('/demo', (ctx, next) => {
  ctx.body = demoData
});

// axios中post请求默认是 application/json   qs.string()
// app.use(express.json())
//3.2注册 路由
router.get('/test', (ctx, next) => {
  // 1. 获取路由参数： query对象
  console.log(6666)
	console.log(ctx.query)
  // 2. 返回路由数据
  ctx.body = '测试返回内容'
});

//返回主页数据的接口
let indexDate=require('./datas/index.json')
router.get('/getIndexData',(ctx,next)=>{
  ctx.body=indexDate
  // ctx.body={
  //   code:200,
  //   data:indexDate
  // }
})

//返回首页导航分类数据
let indexCateData=require('./datas/indexCateList.json')
router.get('/getIndexCateList',async(ctx,next)=>{
  // 生成的H5应用存在跨域问题，通过CORS设置跨域配置
  ctx.set('Access-Control-Allow-Origin', '*')
    await new Promise(resolve => setTimeout(() => resolve(),2000))
    ctx.body=indexCateData
})

//分页数据
let cateNavData=require('./datas/categoryDatas.json')
router.get('/getCateGoryData',async(ctx,next)=>{
  ctx.body=cateNavData
})
//登录
 let loginData=router.get('/login',(ctx,next)=>{
  //获取请求参数
  const {username,password}=ctx.query
  console.log(username,password)
  //处理请求参数
  if(!username||!password){
    ctx.body={
      code:'400',
      msg:'用户名或密码不正确'
    }
  }else{
    ctx.body={
      code:'200',
      msg:'登录成功',
      data:JSON.stringify({
        username,
        password
      })
    }
  }

})
//注册
let registerData=router.get('/register',async(ctx,next)=>{
  const {username,password}=ctx.query
 console.log(username)
  //处理请求参数
   //判断当前用户名是否已经被注册,未注册则存入当前用户名
  try {
    let result = await StudentsModel.findOne({username})
    if(result){
      ctx.body={
        code:'502',
        msg:'用户已被注册'
      }
    }else{
      await StudentsModel.create({
        username,password:password>>>0
      })
      ctx.body={
        code:'200',
        msg:'注册成功'
      }
    }
  } catch (error) {
    console.log(error)
    ctx.body={
      code:'502',
      msg:'当前无法注册,请稍后再试'
    }
  }

})
//2.监听端口
app.listen('3002',(err)=>{
  if(err){
    console.log("服务器启动失败")
    console.log(err);
  }else{
    console.log('服务器启动成功')
    console.log("服务器地址： http://localhost:3002")
  }
})
// app.listen('3001', () => {
//   console.log('服务器地址: http://localhost:3001');
// })
