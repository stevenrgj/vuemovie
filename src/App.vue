<template>
  <div id="app">
    <router-view></router-view>
    <v-Loading v-show="fetchLoading"></v-Loading>
  </div>
</template>

<script>
import Loading from '@/common/loading'
export default {
  components: {
    'v-Loading': Loading
  },
  data () {
    return {
      fetchLoading: false
    }
  }
}
</script>

<style lang="less">
html,body,#app{
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color:rgba(0,0,0,0)
}
/*select {*/
  /*vertical-align: middle;*/
/*}*/
body {
  font-family: PingFangSC-Light,helvetica,'Heiti SC';
  color: #666;
  background: #fff;
}
body{
  margin:0;
  padding:0;
}
</style>
