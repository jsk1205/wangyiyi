<template>
  <div class="registerContainer">
   <div class="header">
      <i class="iconfont icon-shouye" @click="toHome"></i>
      <span class="tit">网易严选</span>
      <div class="shopCart">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche1" @click="toCart"></i>
      </div>
   </div>
   <div class="content">
      <div class="item">
        <div class="sign">
          <i class="iconfont icon-icon_A icon"></i>
          <span class="txt">网易严选</span>
        </div>
      </div>
      <form action="###" class="formLogin">
        用户名： <input v-model="username"  type="text" placeholder="请输入用户名"> <br>
        <br>
        密  码： <input v-model="password" type="text" placeholder="请输入密码"> <br>
        <br>
        确认密码： <input v-model="rePassword" type="text" placeholder="请再次确认密码"> <br>
        <br>
        <button type="submit" @click.prevent="toRegister">注册</button>
      </form>

   </div>



  </div>
</template>

<script type="text/ecmascript-6">
// import Vue from 'vue';
// import { Form } from 'vant';
// import { Field } from 'vant';
// import {Button} from 'vant'
// Vue.use(Form);
// Vue.use(Field);
// Vue.use(Button);
import ajax from '@/api/ajax'
  export default {
    name:'Register', 
    data() {
      return {
        username: '',
        password: '',
        rePassword:''
      }
    }, 
    methods:{
        toHome(){
          this.$router.push('/')
        },
        toCart(){
          this.$router.push('/cart')
        },
        async toRegister(){
          let {username,password,rePassword}=this
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
          if(password!==rePassword){
            alert('两次输入密码不一致，请再次确认');
            return
          }
          //后端验证
          let result=await ajax.get('/api/register',{params:{username,password}})
          console.log(result)
          // .then((res)=>{
          //   console.log(res)
          // }).catch(err=>{
          //   console.log('注册失败')
          //   console.log(err)
          // })
      }
      


    }

  }
</script>

<style lang="stylus">
.registerContainer 
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
  .content
    .item
      display flex
      border-top 1px solid #eee
      .sign 
        display flex
        height  300px
        line-height 300px
        justify-content center
        margin-left 220px
        .iconfont
          display inline-block
          font-size 60px
        span  
          display inline-block
          font-size 50px
          margin-left 20px
    // .formLogin
    //   width 600px
    //   margin-left 80px
  // .form
  //   width 600px
  //   margin-left 80px
  //   .username 
  //     height 100px
  //     font-size 26px
  //   .password
  //     height 100px
  //     font-size 26px
  //     .btn
  //       font-size 24px
</style>
