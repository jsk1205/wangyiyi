<template>
  <div class="registerContainer">
   <div class="header">
      <i class="iconfont icon-shouye" @click="toHome"></i>
      <span class="tit">网易严选</span>
      <div class="shopCart">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche1" @click="toCart"></i>
      </div>
   </div>
   <div class="content">
      <div class="item">
        <div class="sign">
          <i class="iconfont icon-icon_A icon"></i>
          <span class="txt">网易严选</span>
        </div>
      </div>

  <van-form @submit="onSubmit" class="lis">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
        class="li"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        class="li"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"
        class="btn">
          提交
        </van-button>
      </div>
  </van-form>

   </div>



  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import { Form } from 'vant';
import { Field } from 'vant';
import {Button} from 'vant'
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
  export default {
    name:'Register', 
    data() {
      return {
        username: '',
        password: '',
      };
    }, 
    methods:{
      toHome(){
        this.$router.push('/')
      },
      toCart(){
        this.$router.push('/cart')
      },
       onSubmit(values) {
        console.log('submit', values);
      }
    }

  }
</script>

<style lang="stylus">
.registerContainer 
  .header
    height 90px
    line-height 90px
    width 100%
    display flex
    background #fff
    .iconfont
      font-size 40px
      width 50px
      height 50px
      margin-left 15px
      margin-right 15px
    .tit 
      font-size 30px
      text-align center
      flex 1
      .shopCart
        display flex
        .iconfont
          font-size 28px
  .content
    .item
      display flex
      border-top 1px solid #eee
      .sign 
        display flex
        height  300px
        line-height 300px
        justify-content center
        margin-left 220px
        .iconfont
          display inline-block
          font-size 60px
        span  
          display inline-block
          font-size 50px
          margin-left 20px
  .lis
    width 600px
    margin-left 80px
    .li 
      height 100px
      font-size 26px
      .btn
        font-size 24px
</style>
