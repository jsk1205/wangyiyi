<template>
  <div class="goryContainer">
    <div class="goryItem"  v-for="(item,index) in indexData.categoryModule"
		   :key="index">
      <image :src="item.titlePicUrl" class="cateImg"></image>

      <div class="scroll">
        <div class="scrollItem"  v-for="(scrollItem,index) in item.itemList" 
			     :key="index">
          <image :src="scrollItem.showPicUrl" class="im"></image>
          <text>{{scrollItem.name}}</text>
        </div>
        <div class="scrollItem more"> 查看更多</div>
      </div>
    </div>



  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from "vuex";
  export default {
    name:'Gorys',
    data(){
      return{

      }
    },
   
    computed:{
       ...mapState({
         indexData:state=>state.index.indexData
       })
    }
  }
</script>

<style lang="stylus" >
.goryContainer 
  .goryItem
    margin-top 20px
    .cateImg 
      width 100%
      height 350px
    .scroll 
      width 100%
      white-space nowrap
      .scrollView
        display flex
        width 200px
        margin-left 20px
        .scrollItem
          display inline-block
          width 200px
          margin-left 20px
          vertical-align top
          &.more
            width 200px
            height 200px
            text-align center
            line-height 200px
            font-size 24px
            background #eee
          .im
            width 200px
            height 200px
            background #eee
          text
            display block
            font-size 26px
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            overflow hidden
            white-space pre-wrap
          
</style>
