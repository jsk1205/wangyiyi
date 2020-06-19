<template>
  <div class="listContainer">
    <div class="listItem" @click="toDetail(item)"
      v-for='(item, index) in shopList' :key='index'>

      <img :src="item.listPicUrl" alt="" class="im">
      <p>{{item.name}}</p>
			<p style='color: red;font-weight: bold;'>$ {{item.retailPrice}}</p>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'ShopList' ,
    props:['shopList'], 
    methods:{
      toDetail(shopItem){
				//console.log(shopItem) //{}
				//let data=JSON.stringify(shopItem)
				//console.log(data) //字符串
          this.$router.push({
					  path:'/detail',
						query: {res: shopItem}
						})
			},
		}
  }
</script>

<style lang="stylus">
 .listContainer
		display flex
		flex-wrap wrap
		justify-content space-around
		&:after
			content ""
			width 350px
			height 0
			
		.listItem
			width 350px
			display flex
			flex-direction column
			.im 
				width 350px
				height 350px
			p
				white-space pre-wrap
				font-size 28px
				line-height 50px
				text-align left
 
</style>
