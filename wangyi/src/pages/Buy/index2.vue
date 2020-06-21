<template>
  <div class="worthContainer">
    <!-- 头部 -->
    <div class="header">
     <i class="iconfont icon-shouye"></i>
     <span class="title">值得买</span>
     <div class="icon">
       <i class="iconfont icon-sousuo"></i>
       <i class="iconfont icon-gouwuche "></i>
     </div>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <div class="worthBuy">
        <img class="worthyImg" src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
        <div class="worthyTitle">
          <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
          <div class="title">严选好物&nbsp;用心生活</div>
        </div>
        <!-- 滑屏区域 -->
        <div class="worthSwiper">
          <div class="worthyCenter">
            <div class="worthItem" v-for="(item,index) in worthNav.navList" :key="index">
              <img :src="item.picUrl" alt="">
              <span class="title">{{item.mainTitle}}</span>
              <span class="text">{{item.viceTitle}}</span>
            </div>
          </div>
        </div>

      </div>

     


    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import {reqWorthyNav} from '@/api'

  export default {
    name:'Buy',
    data(){
      return {
        worthNav:{},
        worthData:{}
      }
    },
    methods:{
      async getWorthNav(){
        let result=await reqWorthyNav()
        console.log(result)
        this.worthNav=result.data
      }
    },
    mounted(){
      this.getWorthNav()
    }
  }
</script>

<style lang="stylus" scoped>
.worthContainer
  background #eee
  .header
    height 90px
    background #eee
    display flex
    line-height 90px
    box-sizing border-box
    .iconfont
      font-size 40px
      margin-left 10px
    .title
      font-size 28px
      display inline-block
      margin 0 auto
    .icon 
      margin-right 10px
  .content
    height 680px
    padding-top 140px
    box-sizing border-box
    position relative
    .worthBuy
      position absolute
      top 0
      left 0
      z-index 1
      .worthyImg
        width 100% 
        height auto
      .worthyTitle
        position absolute
        top 50px
        left 20px
        height 100px
        line-height 100px
        img 
          width 130px
          height 68px
          position absolute
          top 10px
        .title 
          color #ffffff
          font-size 30px
          margin-left 130px
    .worthSwiper
      width 90%
      height 390px
      background #eee
      border-radius 20px
      overflow hidden
      position absolute
      top 150px
      left 50%
      transform translateX(-50%)
      .worthyCenter 
        display flex
        flex-wrap wrap
        overflow hidden
        .worthItem 
          display flex
          align-items center
          flex-direction column
          margin-top 10px
          box-sizing border-box
          width 25%
          overflow hidden
          img 
            width 120px
            height 120px
            background #fff
            border-radius 50%
          .tit
            color #333
            font-size 26px
            font-weight bold
            padding-top 10px 
          .text
            color #999
            font-size 24px
    
</style>
