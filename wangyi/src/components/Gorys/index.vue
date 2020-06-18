<template>
  <div class="cateContainer">
    <div class="cateItem"  v-for="(item,index) in indexData.categoryModule"
		   :key='index'>
      <img :src="item.titlePicUrl" class="cateImg">

      <div class="scroll">
        <div class="scrollItem"  v-for="(scrollItem, index) in item.itemList" :key='index'>
          <img :src="scrollItem.showPicUrl" mode="" class="scrollImg">
          <p>{{scrollItem.name}}</p>
        </div>
        <div class="class='scrollItem more'"> 
          <div class='scrollImg'>查看更多></div>
        </div>
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
.cateContainer 
		.cateItem 
			white-space nowrap
			.cateImg
				width 100%
				height 350px
			.scrollItem 
				width 200px
				display inline-block
				margin 20px 10px
				vertical-align top
				&.more
					text-align center
					line-height 200upx
					font-size 26upx
				.scrollImg
					width 200px 
					height 200px
					background #eee
				p
					font-size 24px
					line-height 40px
					width 100%
					/* 自动换行 */
					white-space pre-wrap
					/* 多行文本 溢出省略号替代 */ 
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
          
</style>
