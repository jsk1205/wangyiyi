<template>
  <div class="detailContainer">
    <!-- 头部 -->
    <div class="header">
      <i class="iconfont icon-shouye"></i>
      <span class="tit">网易严选</span>
      <div class="shopCart">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche1"></i>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <img :src="shopDetail.listPicUrl"  class="Img" alt="">
      <div class="tag">暖春特惠</div>
      <span class="txt">${{shopDetail.counterPrice}}</span>
      <span class="tit">{{shopDetail.name}}</span>
       <!-- 内容 -->
      <ul class="list">
          <li>1) 100%桑蚕丝填充，丝丝精粹不掺杂</li>
          <li>2) 创新井字拉网工艺，桑蚕丝不易黏连结块</li>
          <li>3) 两种面料可选，贡缎手感细腻，竹棉清爽透气</li>
          <li>4) AB双面设计，多种活性印花不易褪色</li>
      </ul>
    </div>
    <!-- 底部导航 -->
    <div class="detailFooter">
      <i class="iconfont icon-kefu ic"></i>
      <span class="btn buyNow">立即购买</span>
      <div class="btn addShopCart" @click="addShopCart">加入购物车</div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import { mapState,mapMutations } from 'vuex'
  export default {
    name:'Detail',
    data(){
      return {
        shopDetail:{}
      }
    },
    mounted(){
      this.shopDetail=this.$route.query.res
      console.log( this.shopDetail) 
     
      
    },
    methods:{
      ...mapMutations({
         changeCartList:'changeCartList'
      }),
     addShopCart(){
       //添加购物车
       this.changeCartList(this.shopDetail)
     }
    }
  }
</script>

<style lang="stylus">
.detailContainer
  display flex
  flex-direction column
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
    height calc(100vh-90px)
    
    .Img
      width 100%
			height 700px
      border 1px solid #333
    .tag 
      width 90%
      height 100px
      line-height 100px
      text-align center
      font-size 30px
      color #fff
      margin 20px auto
      background #DD1A21
      border-radius 10px
    .txt
      font-size 50px
      color #DD1A21
      line-height 70px
      margin-left 5%
    .tit
      font-size 28px
      color #333
      margin-left 5%
    .list
      margin-left 5% 
      margin-top 15px
      font-size 28px
      line-height 50px
  .detailFooter
    display flex
    height 80px
    line-height 80px
    position fixed
    bottom 100px
    text-align center
    .ic
      font-size 60px
      width 150px
      color #333
    .btn 
      width 300px 
      &.buyNow
        color #333
        border-left 1px solid grey
      &.addShopCart
        background #DD1A21
				color #fff
</style>
