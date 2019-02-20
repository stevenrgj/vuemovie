<template>
  <section id="search_main">
    <div id="title">视频</div>
    <div id="search">
      <i class="icon-search"></i>
      <input type="text" placeholder="请输入片名、主演或者导演"  v-model.trim="search">
      <i id="closeicon" v-show="search" class="icon-com"></i>
      <router-link to="/">
        <span>取消</span>
      </router-link>
    </div>
    <div class="search_title">
      搜索结果
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/index/style.css";
  #search_main {
    #title{
      display: block;
      font-size: 20px;
      text-align: center;
      margin-bottom: 14px;
      margin-top: 14px;
      font-weight: bold;
    }
    #search {
      position: relative;
      width: 95%;
      height: 2.6rem;
      border-radius:0.2rem;
      padding-left: 0.15rem;
      background: #bfbfbf;
      display: flex;
      justify-content: left;
      align-items: center;
      margin-left: 10px;
      color: #333;
      text-decoration: none;
      input{
        width: 85%;
        height: 1.6rem;
        border: aliceblue;
        border-radius: 0.3rem;
        padding-left: 0.6px;
        margin-left: 1.6rem;
      }
      span{
        color: #fff;
        text-decoration: none;
        margin-left: 0.1rem;
        font-size: 16px;
      }
      i{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0.25rem;
        font-size: 20px;
      }
      #closeicon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 24rem;
        font-size: 20px;
      }
    }
    .search_title {
      padding: 0.1rem 0;
      padding-left: 0.2rem;
      background: #f2f2f2;
      color: #333
    }
  }

</style>
