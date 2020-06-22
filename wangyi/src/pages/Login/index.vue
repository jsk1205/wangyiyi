<template>
  <div class="loginContainer">
    <!-- 头部 -->
    <div class="header">
      <i class="iconfont icon-shouye" @click="toHome"></i>
      <span class="tit">网易严选</span>
      <div class="shopCart">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche1" @click="toCart"></i>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="center">
      <div class="title">
        <i class="iconfont icon-icon_A icon"></i>
        <span>网易严选</span>
      </div>
      <div class="ic">
        <!-- <div class="login">
          <i class="iconfont icon-shouji"></i>
          <span class="tit" @click="toRegister">手机号快捷登录</span>
        </div>
        <div class="login colors">
          <i class="iconfont icon-youxiang"></i>
          <span class="tit email">邮箱快捷登录</span>
        </div> -->
   <!--<van-form @submit="onSubmit" class="form">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
          class="username"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
          class="password"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit"
          class="btn">
            提交
          </van-button>
        </div>
       </van-form> -->
        <form action="###" class="formLogin" >
          用户名： <input v-model="username"  type="text" placeholder="请输入用户名"> <br>
          <br>
          密  码： <input v-model="password" type="text" placeholder="请输入密码"> <br>
          <br>
          <!-- @click.prevent="tologin" -->
          <button type="submit" class="btn" @click.prevent="toLogin">登录</button>
          <button type="submit" class="btn" @click.prevent="toRegister">注册</button>
        </form>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="sign">
        <div class="font">
          <i class="iconfont icon-gongzhonghao"></i>
          <span>微信</span>
          <i class="line lie">|</i>
        </div>
        <div class="font">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
          <i class="line li">|</i>
        </div>
        <div class="font">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
   

  </div>
</template>

<script type="text/ecmascript-6">
import ajax from '@/api/ajax'
  export default {
    name:'Login', 
    data(){
      return{
        username: '',
        password: ''
      }
    },
    methods:{
      toHome(){
        this.$router.push('/')
      },
      toCart(){
        this.$router.push('/cart')
      },
      toRegister(){
        this.$router.push('./register')
      },
      // tologin(){
      //   this.$router.push('/Register')
      // },
      //  onSubmit(values) {
      //   console.log('submit', values);
      // }
      async toLogin(values){
        // console.log('submit', values);
        let {username,password}=this
        //验证规则
        let usernameReg =/^[a-zA-z0-9]{4,12}$/
        let passwordReg = /^[0-9]{4,6}$/
        //前端验证
        if (!usernameReg.test(username.trim())) {
           alert('用户名不正确，用户名必须是4-12位的字母或者数字')
           return
        }
        if(!passwordReg.test(password.trim())){
          alert('密码不正确，密码必须是4-6位的数字')
          return
        }
        //后端验证
       let result=await ajax.get('/api/login',{
            params:{username,password}
        })
        //console.log('------',result)
        if(result.code==='200'){
          localStorage.setItem('userInfo',result.data)
        }
        this.$router.push('/personal')
        // .then((res)=>{
        //   console.log(res)
        //   const {redirect}=this.$route.query
        //   this.$router.replace(redirect||'/personal')
        // }).catch(err=>{
        //   console.log('登录失败')
        //   console.log(err)
        // })
      }
    } 
  }
</script>
<style lang="stylus">
.loginContainer
  position relative
  .header
    height 90px
    line-height 90px
    width 100%
    display flex
    background #fff
    .iconfont
      font-size 40px
      width 50px
      height 50px
      margin-left 15px
      margin-right 15px
    .tit 
      font-size 30px
      text-align center
      flex 1
      .shopCart
        display flex
        .iconfont
          font-size 28px


  .center
    // height calc(100vh-90px)
    display flex
    flex-direction column
    align-items center
    background #eee
    .title
      margin-top 150px
      .iconfont 
        font-size 60px
  
    .ic
      margin-top 200px
      width 90%
      margin-left 50px
      .login
        display flex
        width 90%
        line-height 100px
        height 100px
        background #DD1A21
        border-radius 10px
        margin-bottom 40px
        color #fff
        &.colors
          border 1px solid #DD1A21
          background #F0F0F0
          color red
        .iconfont
          display inline-block
          margin-left 200px
        .tit 
          display inline-block
          margin 0 auto
          margin-left 10px
  .footer
    background #eee
    position absolute
    bottom -400px
    .sign 
      display flex
      height 100px
      text-align center
      line-height 100px
      .font
        width 250px
        height 100px
        .iconfont
          font-size 36px 
        span 
          font-size 24px
          display inline
          margin-right 20px 
          margin-left 10px
        .line 
          display inline
          margin-left 20px
        
</style>
