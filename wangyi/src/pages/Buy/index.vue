<template>
  <div class="worthContainer">
    <!-- 头部 -->
    <div class="header">
     <i class="iconfont icon-shouye" @click="toHome"></i>
     <span class="title">值得买</span>
     <div class="icon">
       <i class="iconfont icon-sousuo" @click="toSearch"></i>
       <i class="iconfont icon-gouwuche " @click="toCart"></i>
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
        <div class="worthSwiper" ref="worthSwiper">
          <div class="worthyCenter">
            <div class="worthItem" v-for="(item,index) in worthNav.navList" :key="index">
              <img :src="item.picUrl" alt="">
              <span class="title">{{item.mainTitle}}</span>
              <span class="text">{{item.viceTitle}}</span>
            </div>
          </div>

          <!-- <div class="dot" >  
            <span></span>
          </div> -->
        </div>

      </div>
    </div>
      <!-- 瀑布流 -->
      
      <!-- <vueWaterfallEasy v-for="(item,index) in worthManual.topics[0]">
        <img :src="item.avatar" alt="">
      </vueWaterfallEasy> -->
      <div class="wrappers">
        <div class="lookList">
          <div class="lookColumn" v-if=" worthManualData[0]">
            <div class="lookBlock" v-for="(item,index) in worthManualData[0].topics" >
                  <img :src="item.picUrl" alt="" class="Img">
                  <span>{{item.title}}</span>
                  <div class="detail">
                    <div class="good">
                      <img :src="item.avatar" alt="">
                      <span>{{item.nickname}}</span>
                    </div>
                    <div class="some">
                      <img :src="item.schemeUrl" alt="">
                      <span>47k</span>
                    </div>
                  </div>
            
            </div> 
          </div>
          <div class="lookColumn shadow">2</div>
        </div>
      </div> 

  </div>
</template>

<script type="text/ecmascript-6">
import {reqWorthyNav,reqWorthManual,reqWorthAuto} from '@/api'
import vueWaterfallEasy from 'vue-waterfall-easy'
import BScroll from 'better-scroll'
  export default {
    name:'Buy',
    data(){
      return {
        worthNav:{},
        worthIndex:0,
        col:2,
        worthManualData:[],//瀑布流
        worthAuto:{},//触底加载
      }
    },
    components: {
    vueWaterfallEasy
    }, 
    methods:{
      toHome(){
        this.$router.push('/')
      },
      async getWorthNav(){
        let result=await reqWorthyNav()
        //console.log(result)
        this.worthNav=result.data
      },
      async getWorthManual(){
        let result=await reqWorthManual()
        if(result.code==='200')
        this.worthManualData=result.data
        console.log(this.worthManualData)
      },
      toSearch(){
        this.$router.push('/search')
      },
      toCart(){
        this.$router.push('/cart')
      }
    },
    mounted(){
      this.getWorthNav()
      this.getWorthManual()
      let scrollWrap=new BScroll(this.$refs.worthSwiper,{
        scrollX:true,
        scrollY:false,
        snap:{
          speed:800,
          easing:{
            style:'ease-in'
          },
        threshold: 0.5,  // 超过一半时切换到下一屏
        stepX: 169,  // 切换距离为轮播图宽度   
        }
      })
      scrollWrap.on('scrollEnd',({x,y})=>{
        let index=Math.abs(x/169)
        this.worthIndex=Math.ceil(index)
      })
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
      overflow hidden
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
      height 400px
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
        width 1400px
        height 400px
        .worthItem 
          display flex
          align-items center
          flex-direction column
          width 169px
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
  .wrappers
    background skyblue
    width 90%
    border-radius 20px
    height 1500px
    margin 0 auto
    .lookList
      background salmon
      display flex
      .lookColumn
        height 1500px
        width 50%
        // display flex
        background orange
        border-radius 20px
        .lookBlock
          width 100%
          height 400px
          // background #333
          .Img
            display block
            width 100%
            height 200px
            border 1px solid red
          span 
            // font-size 28px
            display inline-block
            height 100px
            padding-top 20px
            box-sizing border-box
          .detail 
            display flex
            padding 0 20px
            box-sizing border-box
            // line-height 30px
            // margin-top 10px
            .good
              display flex
             
              img 
                display inline-block
                width 48px
                height 48px
                border-radius 50%
                background salmon
            .some 
              display flex
              margin-left 80px
              img 
                display inline-block    
                width 32px
                height 32px
                background #eee
                

                

      .shadow
        background salmon
    
</style>
