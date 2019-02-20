<template lang="html">
  <footer class="footer" >
    <router-link to="/">
      <i class="icon-index"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/category">
      <i class="icon-category"></i>
      <span>频道</span>
    </router-link>
    <router-link to="/person">
      <i class="icon-user"></i>
      <span>我的</span>
    </router-link>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
  @import '../assets/index/style.css';

  .footer{
    position: fixed;
    bottom: 0;
    left: 0 ;
    width: 100%;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: center;
    background: #fff;
    z-index: 9999;
    /*border-top:1px solid #a09898;*/
    a {
      flex:1;
      justify-content: center;
      display:flex;
      text-decoration:none;
      flex-direction: column;
      align-items: center;
      padding:0.05rem 0;
      &:active{
        background: rgba(0,0,0,0.1)
      }
      span{
        color: #333
      }
    }
    .icon-index,.icon-user, .icon-category{
      font-size: 20px;
      color: #333
    }
    .router-link-exact-active i,.router-link-exact-active span{
      color: #eedf4e !important
    }
  }
</style>
