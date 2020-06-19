<template>
  <div class="personalContainer">
    <!-- 头部 -->
     <div class="header">
       <div class="person">个人中心</div>

       <div class="userInfo" @click='toLogin'>
         <!-- <router-link :to="/personal/login"></router-link> -->
         <div class="user" >
           <img src="../../../static/images/personal/personal.png" class="iconfont" alt="">
           <div class="userRight">
             <span class="tit">慕尔</span>
             <span>微信用户</span>
           </div>
         </div>
       </div>
     </div>
  <!-- 我的资产 -->
     <div class="content">
       <div class="line">我的资产</div>
       <div class="myAssetList">
         <div class="assetItem">
           <span>￥0</span>
           <span>回馈金</span>
         </div>
         <div class='assetItem'>
					<span>￥0</span>
					<span>红包</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>优惠券</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>津贴</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>礼品卡</span>
				</div>
       </div>
       <div class="personalList">
         <div class="navItem">
           <i class="iconfont icon-wodedingdan"></i>
          <span>我的订单</span>
         </div>
         <div class="navItem">
           <i class="iconfont icon-tuan"></i>
          <span>我的拼团</span>
         </div>
         <div class="navItem">
           <i class="iconfont icon-jifen"></i>
          <span>我的积分</span>
         </div>
         <div class="navItem">
           <i class="iconfont icon-dizhi"></i>
          <span>地址管理</span>
         </div>
         <div class="navItem">
           <i class="iconfont icon-anquan"></i>
          <span>账号安全</span>
         </div>
         <div class="navItem">
           <i class="iconfont icon-kefu"></i>
          <span>联系客服</span>
         </div>
         
         <div class="navItem">
           <i class="iconfont icon-shouhou"></i>
          <span>退还/售后</span>
         </div>
       </div>
     </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'Personal',
    data(){
      return{

      }
    },
    methods:{
      toLogin(){
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="stylus">
.personalContainer 
  .header 
    background #EED7B5
    height 320px
    .person
      text-align center
      font-size 28px
      height 100px
      line-height 100px
      font-weight bold
      color #333
    .userInfo
      display flex
      .user 
        display flex
        .iconfont 
          width 100px
          height 100px
          border-radius 50upx
          margin 0 50px 0 30px
          margin-top 50px
        .userRight
          display flex
          margin-top 60px
          flex-direction column
          align-items flex-start
          span 
            display inline-block
            margin-bottom 10px
            &.tit
              color salmon
              font-weight bold
              font-size 26px


  .content
    .line 
      margin-left 30px
      margin-top 30px
      font-size 28px
      height 50px
      width 90%
      border-bottom 1px solid #EEEEEE
    .myAssetList
      display flex
      width 90%
      margin-top 10px
      .assetItem
        display flex
        flex-direction column
        align-items center
        line-height 40px
        flex 20%
        font-size 24px
        color #333
    .personalList
      display flex
      flex-wrap wrap
      border-top 1px solid #EEEEEE
      margin-top 20px
      .navItem
        width 33.3333%
        display flex
        flex-direction column
        align-items center
        border-bottom 1px solid #EEEEEE
        border-right 1px solid #EEEEEE
        box-sizing border-box
        padding 30px 0
        & :nth-child(3)
          border-right none
        .iconfont
          font-size 60px
        span
          font-size 24px
          line-height 40px
</style>
