<template>
  <div class="bottom">
    <div class="item" @click="clickItem('/')" :class="{active:$route.path==='/'}">
      <i class="iconfont icon-home"></i>
      <span class="txt">首页</span>
    </div>
    <div class="item" @click="clickItem('/catrgory')" :class="{active:$route.path==='/catrgory'}">
      <i class="iconfont icon-fenlei"></i>
      <span>分类</span>
    </div>
    <div class="item" @click="clickItem('/buy')" :class="{active:$route.path==='/buy'}">
      <i class="iconfont icon-buy-icon"></i>
      <span>值得买</span>
    </div>
    <div class="item" @click="clickItem('/cart')" :class="{active:$route.path==='/cart'}">
      <i class="iconfont icon-gouwuchekong"></i>
      <span>购物车</span>
    </div>
    <div class="item" @click="clickItem('/personal')" :class="{active:$route.path==='/personal'}">
      <i class="iconfont icon-gerenzhongxin"></i>
      <span>个人中心</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:''  ,
    data(){
      return{
      }
    },
    methods:{
      clickItem(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus">
  .bottom
     position fixed
     bottom 0px
     left 0px
     right 0px
     width 100%
     height 98px
     display flex
     align-items center
     background #eee
     .item
       display flex
       flex-direction column
       align-items center
       flex 20%
       .iconfont
        width 40px
        height 40px
        background #eee
      .txt 
        margin-top 1px
         

      
       
</style>
