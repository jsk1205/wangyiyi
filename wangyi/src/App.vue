<template>
  <div>
   <router-view></router-view>
   <Footer v-if="!$route.meta.isHideFooter"></Footer>
   
  </div>
</template>

<script type="text/ecmascript-6">
import Footer from '@/components/Footer';

  export default {
    name:'',
    components:{
      Footer
    }
  }
  
</script>

<style lang="less" scoped>

 
</style>
