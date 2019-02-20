<template lang="html">
  <section>
    <div id="person">
      <router-link to="/login">
        <img src="../assets/avator.jpg"/>
        <button id="login" v-show="isLogin">登陆</button>
      </router-link>
    </div>
    <template>
      <div id="history">
        <router-link to="/history">
          <span>观看历史</span>
          <i class="icon-right"></i>
        </router-link>
      </div>
    </template>
    <template>
      <div id="vieworders">
        <router-link to="/vieworders">
          <span>我的看单</span>
          <i class="icon-right"></i>
        </router-link>
      </div>
    </template>
    <template>
      <div id="settings">
        <router-link to="/settings">
          <span>设置</span>
          <i class="icon-right"></i>
        </router-link>
      </div>
    </template>
    <v-footer></v-footer>
  </section>
</template>

<script>
import Footer from '@/common/footer.vue'
export default {
  components: {
    'v-footer': Footer
  },
  data () {
    return {
      'isLogin': true
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/index/style.css";
#person {
  position: relative;
  display: block;
  display: flex;
  padding: 4rem 0;
  justify-content: center;
  /*border-bottom: 1px solid #ddd;*/
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    img {
      border-radius: 50%;
      max-height: 100px;
      max-width: 100px;
      padding: 0.1rem 1rem;
    }
    #login {
      height: 35px;
      width: 100%;
      border-radius: 5rem;
      background: #0fce0f;
      border: none;
      color: #fff;
    }
  }
}
  #history{
    border-top: 1rem solid #f2f2f2;
    display: block;
    margin-top: 10px;
    width: 100%;
    height: 50px;
    background: #fff;
    position: relative;
    justify-content: center;
    text-decoration:none;
    span{
      display: inline-block;
      text-decoration:none;
      padding: 0.9rem 0;
      margin-left: 10px;
      font-size: 14px;
      color: #000;
    }
    i{
      position: absolute;
      top: 33%;
      margin-right: 15%;
      padding-left: 75%;
    }
  }
  #vieworders{
    border-top: 1rem solid #f2f2f2;
    display: block;
    width: 100%;
    height: 50px;
    background: #fff;
    position: relative;
    justify-content: center;
    text-decoration:none;
    span{
      display: inline-block;
      text-decoration:none;
      padding: 0.9rem 0;
      margin-left: 10px;
      font-size: 14px;
      color: #000;
    }
    i{
      position: absolute;
      top: 33%;
      margin-right: 15%;
      padding-left: 75%;
    }
  }
  #settings{
    border-top: 1rem solid #f2f2f2;
    border-bottom: 1rem solid #f2f2f2;
    display: block;
    width: 100%;
    height: 50px;
    background: #fff;
    position: relative;
    justify-content: center;
    text-decoration:none;
    span{
      display: inline-block;
      text-decoration:none;
      padding: 0.9rem 0;
      margin-left: 10px;
      font-size: 14px;
      color: #000;
    }
    i{
      position: absolute;
      top: 33%;
      margin-right: 15%;
      padding-left: 81%;
    }
  }
</style>
