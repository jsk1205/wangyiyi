<template>
  <div id="indexContainer">
    <!-- 头部 -->
    <div class="header">
      <img class="logo" src="./logo.png" alt="">
      <div class="searchInput" @click="toSearch">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" class="placeholder" placeholder="搜索商品">
        <!-- <span class="placeholder">搜索商品</span> -->
      </div>
      <div class="btn" @click="toLogin">{{userInfo.username? userInfo.username:'请登录'}}</div>
    </div>
    <!-- 导航 -->
    <div class="navContent" ref="navContent">
      <div class="nav" id="nav">
        <div class="navItem" 
          :class="{active:navIndex===0}"
          @click="changeIndex(0,0)"
          
          >
          <span>推荐</span>
        </div>
       <div  v-if="indexData.kingKongModule" style="display:flex"> 
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
    </div>
    <!-- 内容区 -->
    <div class="swiper-wrap" ref="swiper">
      <div class="list">
        <Recommend v-if='navIndex===0'></Recommend>
        <CateList v-if='navIndex !== 0' :navId='navId'> </CateList>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import Recommend from "@/components/Recommend";
import CateList from "@/components/CateList";

import BScroll from 'better-scroll'

export default {
  name: 'Home',
  components:{
    Recommend,
    CateList
  },
  data() {
    return {
        navIndex:0,//控制下边框的显示条
				navId: 0,// 导航id
        comName: 'Recommend',
        userInfo:{}
    }
  },
  mounted() {
   this.getIndexData() 
 
     let wrapper = this.$refs.navContent
      console.log(wrapper)
      scroll = new BScroll(wrapper, {
          scrollY:false,
        　scrollX: true,
          click: true
    })
   
   
    let swiper=this.$refs.swiper
    scrollY=new BScroll(swiper,{
      　scrollY:true,
        
        click:true,
    })
    let userInfo=localStorage.getItem('userInfo')
      if (userInfo) {
        this.userInfo=JSON.parse(userInfo)
        // console.log(this.userInfo)
      }
  },
  methods: {
    ...mapActions({
      getIndexData:'getIndexData'
    }),
    changeIndex(navIndex,navId){
      this.navIndex=navIndex
      this.navId=navId
    },
    toLogin(){
      this.$router.push('/login')
    },
    toSearch(){
      this.$router.push('/search')
    }
  },
  
  computed: {
    ...mapState({
      indexData:state=>state.index.indexData,
    })
  },
  watch:{
      navIndex(Value){
          this.comName = (Value === 0?'Recommend': 'CateList')
      }
    }
}
</script>

<style lang="stylus" scoped>
#indexContainer
  width 750px
  .header
    display flex
    align-items center
    padding 10px 0
    height 100px
    box-sizing border-box
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
        background #eee
        color #333
      .iconfont
        font-size 40px
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
    overflow hidden
    .nav
      display inline-flex
      flex-direction row
      padding-left 30px
      box-sizing border-box
      .navItem
        padding  20px
        font-size 30px
        white-space nowrap

        &.active
          color #DD1A21
          border-bottom 2px solid #DD1A21
  .swiper-wrap
    overflow hidden
    height calc(100vh - 190px)
    .list
      //display inline-block
      // 
.text
  font-size 0
</style>

