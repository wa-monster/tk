<template>
  <div id="app">
    <Head></Head>
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>

import Head  from './base/Head.vue';
import Foot from './base/Foot';

export default {
  name: 'App',
  data(){
    return {
      transitionName:''
    }
  },
  components:{Head,Foot},
}
</script>

<style lang="less">
  @import './common/font.css';
  *{
    margin: 0;
    padding: 0;
    color: #333;
    font-family: "宋体";
  }
  body{
    overflow-x: hidden;
    background-color: #f8f7f3;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style-type: none;
  }

</style>
