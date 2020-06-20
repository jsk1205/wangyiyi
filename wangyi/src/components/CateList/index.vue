<template>
  <div class="cateList" v-if="cateObj">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-if="cateObj.category">
      <van-swipe-item v-for="(swiperItem, index) in cateObj.category.bannerUrlList" :key='index'>
        <img :src="swiperItem" mode="" class="im"></img>
      </van-swipe-item> 
    </van-swipe>
    <span class="title">{{cateObj.category.name}}</span>
    <span class="tit">{{cateObj.category.frontDesc}}</span>
    <ShopList :shopList='cateObj.itemList'></ShopList>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import ShopList from '@/components/ShopList'
import {reqIndexCateDate} from '@/api'

Vue.use(Swipe);
Vue.use(SwipeItem);

  export default {
    name:'CateList',
    props: ['navId'],
    data(){
      return{
        cateList:[]
      }
    },
    components:{
      ShopList
    },
    mounted(){
      this.getIndexCateDate()
      
    },
    methods:{
      async getIndexCateDate(){
        this.cateList=await reqIndexCateDate()
      }
    },
    computed:{
     cateObj(){
				return this.cateList.find(item => item.category.parentId === this.navId)
			}
    },
   
  }
</script>

<style lang="stylus">
  .cateList
    overflow hidden
    .my-swipe 
      width 100%
      height 300px
      overflow hidden
      & .van-swipe-item 
        color #fff
        font-size 20px
        line-height 150px
        text-align center
        background-color #39a9ed
        .im 
          width 100%
				  height 300px
    .title
      display block
      text-align center
      font-size 34px
      color #333
      line-height 70px
    .tit
      display block
      text-align center
      font-size 24px
      color #999
      line-height 40px
		
 
</style>
