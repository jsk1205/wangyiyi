<template>
  <div class="searchContainer">
    <!-- 搜索框 -->
    <div class="search">
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="618夏日夜市"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <!-- 热门搜索 -->
    <div class="hot">
      <span class="tit">热门搜索</span>
      <div class="hotItem">
        <div class="hotList">
          <span class="txt">我是热门</span>
        </div>
      </div>
      <div class="hotItem">
        <div class="hotList">
          <span class="txt">我是热门</span>
        </div>
      </div>
      <div class="hotItem">
        <div class="hotList">
          <span class="txt">我是热门</span>
        </div>
      </div>
    </div>






  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import { Search,Toast} from 'vant';
import { reqSearchInput } from '@/api'
Vue.use(Search);

  export default {
    name:'Search',
    data() {
      return {
        value: '',
        searchInput:{},//初始化数据
      };
    },
    mounted(){
       
    },
    methods: {
      onSearch(val) {
        this.getSearch()
        Toast(val);
      },
      onCancel() {
        Toast('取消')
      },
      async getSearch(){
        let result=await reqSearchInput()
        console.log(result)
     } 
    },
    
  }
</script>

<style lang="stylus">
.searchContainer 
  background #eee
  height calc(100vh - 100px)
  .search
    height 90px
    .van-search
      padding 0
      box-sizing border-box
      height 90px
      .van-search__content
        height 60px
        line-height 50px
        .van-field__left-icon
          line-height 50px
          .van-icon
            font-size 34px
        .van-field__body
          line-height 50px
          font-size 28px
          .van-icon
            font-size 34px
       .van-search__action
        font-size 28px
  .hot
    display flex
    flex-direction column
    margin-top 10px
    .tit 
      display inline-block
      font-size 30px
      background #eee
      margin-bottom 20px
      margin-left 10px
    .hotItem 
      display flex
      flex-direction column
      align-content center
      width 90%
      .hotList
        display inline-block
        margin-right 40px
        margin-bottom 40px
        .txt 
          font-size 28px
          padding 10px
          border-radius 5px
          color #333
          &.active
            color #DD1A21
            border 1px solid #DD1A21
</style>
