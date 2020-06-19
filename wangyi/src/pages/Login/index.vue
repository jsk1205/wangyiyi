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
        <div class="login">
        <i class="iconfont icon-shouji"></i>
        <span class="tit" @click="toRegister">手机号快捷登录</span>
        </div>
        <div class="login colors">
          <i class="iconfont icon-youxiang"></i>
          <span class="tit email">邮箱快捷登录</span>
        </div>
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
  export default {
    name:'Login', 
    methods:{
      toHome(){
        this.$router.push('/')
      },
      toCart(){
        this.$router.push('/cart')
      },
      toRegister(){
        this.$router.push('/Register')
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
        box-sizing border-box
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
