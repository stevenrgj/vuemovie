<template lang="html">
  <div id="search">
    <div id="title">视频</div>
    <router-link to="/search">
      <div class="search_input">
        <i class="icon-search"></i>
        请输入片名、主演或者导演
      </div>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
  @import "../assets/index/style.css";

  #search{
    #title{
      display: block;
      font-size: 20px;
      text-align: center;
      margin-bottom: 14px;
      font-weight: bold;
    }
    padding: 1.15rem 0;
    /*background: #0fce0f;*/
    a{
      display: block;
      display: flex;
      width: 100%;
      text-decoration:none;
      justify-content: center;
      .search_input{
        width: 95%;
        /*border:1px solid #0fce0f;*/
        height: 2.6rem;
        border-radius:0.2rem;
        padding-left: 0.15rem;
        background: #bfbfbf;
        display: flex;
        justify-content: left;
        align-items: center;
        color: #333;
        i{
          font-size:20px;
          color: #eedf4e;
        }
        &:active{
          background: #f2f2f2;
        }
      }

    }
  }
</style>
