<template>
  <div class="recommendContainer">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="iamg">
        <img src="./images/10.jpg" mode=""></img>
      </van-swipe-item>
      <van-swipe-item class="iamg">
        <img src="./images/11.jpg" mode=""></img>
      </van-swipe-item>
      <van-swipe-item>
        <img src="./images/12.jpg" mode=""></img>
      </van-swipe-item>
      <van-swipe-item>
        <img src="./images/4.jpg" mode=""></img>
      </van-swipe-item>
      <van-swipe-item>
        <img src="./images/53.jpg" mode=""></img>
      </van-swipe-item>
    </van-swipe>
    <!-- 横向图标 -->
    <div class="policyList">
        <div class="policyItem" v-for='(item, index) in indexData.policyDescList' :key='index'>
          <img :src="item.icon" alt="" class="Img">
          <span>{{item.desc}}</span>
        </div>
    </div>
    <!-- 10个图标 -->
    <div class="kingList" v-if=" indexData.kingKongModule">
      <div class="kingItem" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
         <img :src="item.picUrl" class="mg"></img>
         <span class="txt">{{item.text}}</span>
      </div>
    </div>
   <!--  Gorys-->
   <Gorys></Gorys>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

import {mapActions, mapState} from "vuex"
import Gorys from "@/components/Gorys";

  export default {
    name:'Recommend',
    data(){
      return {

      }
    },
    components:{
      Gorys
    },
    computed:{
      ...mapState({
        indexData:state=>state.index.indexData
      })
    },
    methods:{
      ...mapActions({
        getIndexData:'getIndexData'
      })
    },
    mounted(){
      this.getIndexData()
    }
  }
</script>

<style lang="stylus" >
.recommendContainer 
   margin-top 4px
   .my-swipe 
     width 100%
     height 300px
    .my-swipe .iamg
      color #fff
      width 100%
      height 300px
      font-size 20px
      line-height 150px
      text-align center
      background-color salmon
      // image 
      //   width 100%
      //   height 300px
    .policyList 
      display flex
      margin-top 10px
      .policyItem
        flex 1
        text-align center
        .Img
          width 32px
          height 32px
          vertical-align middle
          margin-right 10px
          span
            font-size 24upx
            vertical-align middle
    .kingList
      display flex
      flex-wrap wrap
      padding  20px 0
      box-sizing border-box
      .kingItem
        width 20%
        display flex 
        flex-direction column
        align-items center
        margin-bottom 10px
        .mg 
          width 100px
          height 100px
        .txt 
          font-size 24px
          line-height 40px
</style>
