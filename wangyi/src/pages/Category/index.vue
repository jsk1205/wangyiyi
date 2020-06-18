<template>
  <div class="cateGoryContainer">
    <!-- 搜索区域 -->
    <div class="searchHeader">
      <i class="iconfont icon-tubiao-"></i>
      <span class="placeholder">搜索商品,共33328款好物</span>
    </div>
    <!-- 内容区域 -->
    <div class="contentContainer">
      <!-- 左侧 -->
      <div class="leftContainer">

        <!-- <van-sidebar v-model="activeKey" class="navList">
          <van-sidebar-item title="item.name" class="navItem"
          v-for="(item,index) in cateGoryList" :key="item.id"
           :class="{activeClass:activeKey === item.id}"
           @click="changeNavId(item.id)">
           {{item.name}}
          </van-sidebar-item>
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar> -->
        <div class="navList">
          <div class="navItem" 
          v-for="(navItem, index) in cateGoryList" :key='navItem.id'
          :class="{activeClass: navId === navItem.id}"
          @click="changeNavId(navItem.id)"
          >{{navItem.name}}
          </div>
        </div>
      </div>

      <!-- 右侧 -->
      <div class="rightContainer">
        
        <div class="rightScroll">
          <div class="contentList" v-if="cateListObj">
            <img :src="cateListObj.imgUrl" alt="" class="contentImg" >

            <div class="listItem" v-for='(item, index) in cateListObj.subCateList'
             :key='item.id'>
              <img :src="item.wapBannerUrl" class="cateImg">
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import { Sidebar, SidebarItem } from 'vant';
import { reqCateNavData } from "@/api";

Vue.use(Sidebar);
Vue.use(SidebarItem);
  export default {
    name:'Category',
    data(){
      return{
        // activeKey: 0,
        cateGoryList:[],
        navId: '', // 导航标识id
      }
    },
    methods:{
      async getCateGoryDatas(){
        let result=await reqCateNavData('/getCateGoryData')
        console.log(result)
        this.cateGoryList=result
        this.navId=this.cateGoryList[0].id
      },
      changeNavId(navId){
				this.navId = navId
			}
    },
    mounted(){
      this.getCateGoryDatas()
    },
    computed:{
      cateListObj(){
        return this.cateGoryList.find(item=>item.id===this.navId)
      }
    }
  }
</script>

<style lang="stylus" >
  .cateGoryContainer
    overflow hidden
    .searchHeader
      position relative
      display flex
      background #eee 
      margin 15px 20px
      border-radius 15px
      height 60px
      .iconfont
        font-size 40px
        position absolute
        left 200px
        top 5px
      .placeholder
         width 90%
         height 60px 
         line-height 60px
         margin 0 auto
         margin-left 100px
         text-align center
         font-size 26px
    .contentContainer
        height calc(100vh - 90px)
        display flex
        border-top 1upx solid #eee
        .leftContainer
          width 20%
          border-right 1px solid #eee
          box-sizing border-box
          .navList
            height calc(100vh - 90px)
            .navItem
              position relative
              font-size 28px
              height 80px
              line-height 80px
              text-align center
              &.activeClass:after
                position: absolute
                top 10px
                left 5px
                content ''
                height 60px
                width 2px
                background salmon
			.rightContainer
				width 80%
				.rightScroll
					height calc(100vh - 90px)
					.contentList
						display flex
						flex-wrap wrap
						.contentImg
							width 520px
							height 190px
							margin 20px auto
						.listItem
							width 33.33%
							display flex
							flex-direction column
							align-items center
							.cateImg
								width 90%
								height 120px
							span
								font-size 22px
								text-align center

</style>
