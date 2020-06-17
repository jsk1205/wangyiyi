<template>
  <div id="indexContainer">
    <!-- 头部 -->
    <div class="header">
      <img class="logo" src="./logo.png" alt="">
      <div class="searchInput">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品</span>
      </div>
      <div class="btn">登录</div>
    </div>
    <!-- 导航 -->
    <div class="navContent" ref="navContent">
      <div class="nav" ref="nav" v-if="indexData.kingKongModule">
        <div class="navItem" 
          :class="{active:navIndex===0}"
          @click="changeIndex(0,0)"
          >
          <span>推荐</span>
        </div>
        <div
          class='navItem '
          v-for="(navItem,index) in indexData.kingKongModule.kingKongList" 
			:key="index"
          :class="{active:navIndex===(index+1)}"
          @click="changeIndex((index+1),navItem.L1Id)"
         >
          <span>{{navItem.text}}</span>
        </div>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="swiper-wrap" ref="swiper">
      <div class="list" ref="list">
        <Recommend v-if='navId===0'></Recommend>
        <CateList v-if='navId !== 0' :navId='navId'> </CateList>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import Recommend from "@/components/Recommend";
import CateList from "@/components/CateList";

export default {
  name: 'Home',
  components:{
    Recommend,
    CateList
  },
  data() {
    return {
        navId: 0, // 导航动态class标识
        navIndex: 0,// 导航对应页面标识
        comName: 'Recommend',
    }
  },
  mounted() {
   this.getIndexData() 
  
  },
  methods: {
    ...mapActions({
      getIndexData:'getIndexData'
    }),
    changeIndex(navIndex,navId){
      (navId !== this.navId) && (this.navId = navId, this.navIndex = navIndex)
    }
  },
  computed: {
    ...mapState({
      indexData:state=>state.index.indexData,
    })
  },
  watch:{
      navId(Value){
          this.comName = (Value === 0?'Recommend': 'CateList')
      }
    }
}
</script>

<style lang="stylus" scoped>
#indexContainer
  .header
    display flex
    align-items center
    padding 10px 0
    .logo
      width 140px
      height 40px
      margin 20px
    .searchInput
      position relative
      flex 1
      height 60px
      background #eee
      line-height 60px
      border-radius 10px
      .placeholder
        font-size 28px
        margin-left 60px
        color #333
      .iconfont
        font-size 28px
        position absolute
        left 20px
        top 0
    .btn
      width 74px
      height 40px
      line-height 40px
      text-align center
      font-size 24px
      color #DD1A21
      border 1px solid #DD1A21
      border-radius 8px
      margin 0 20px
  .navContent
    width 750px
    height 60px
    margin-bottom 30px
    .nav
      display flex
      flex-direction row
      padding-left 30px
      width 750px
      overflow hidden
      box-sizing border-box
      .navItem
        padding  20px
        font-size 30px
        white-space nowrap

        &.active
          color #DD1A21
          border-bottom 2px solid #DD1A21
.text
  font-size 0
</style>

