<template>
  <div id="head">
    <ul class="nav">
      <router-link to="/Home" tag="span" exact>
        <li id="home">
          <div class="navicon"><span class="icon iconfont icon-shouye1-copy"></span>网站首页</div>
          <div class="navbottom" >Home Page</div>
        </li>
      </router-link>
      <li id="center">

      </li>
      <router-link to="/Search" tag="span">
        <li id="search">
          <div class="navicon"><span class="icon iconfont icon-sousuo"></span>糖品快搜</div>
          <div class="navbottom" >Search</div>
        </li>
      </router-link>

      <router-link :to="{path:'WorkShop',query:{classify:'bbt'}}" tag="span">
        <li id="sell" @mouseenter="overSellClass" @mouseleave="outSellClass">
          <div class="navicon"><span class="icon iconfont icon-icon-test"></span>糖客坊</div>
          <div class="navbottom" >WorkShop</div>
          <ul  :style="{height:isMoveOver+'px'}" >
            <router-link v-for="(item,index) in proClass"
                         :key="index"
                         :to="{path:'WorkShop',query:{classify:item.type}}"
                         tag="span"
            >
              <li class="sell-class" >{{item.name}}</li>
            </router-link>
          </ul>
        </li>
      </router-link>
      <router-link to="/About" tag="span">
        <li id="about">
          <div class="navicon"><span class="icon iconfont icon-guanyu"></span>关于糖客</div>
          <div class="navbottom" >About</div>
        </li>
      </router-link>

    </ul>
  </div>

</template>

<script>
  import {getProductClass} from '../api';

  export default {
    name: "Head",
    data(){
      return {
        proClass:'',
        isMoveOver:'',
      }
    },
    created(){
      this.getProClass()

    },
    methods:{
      overSellClass(){
        this.isMoveOver = this.proClass.length*30
      },
      outSellClass(){
        this.isMoveOver = '0'
      },
      async getProClass(){
        let data =  await getProductClass()
        this.proClass = data.data
      }
    }
  }
</script>

<style scoped lang="less">




  #head{
    position: relative;
    z-index: 1000;
    font-family: '宋体';
    font-size: 15px;
    height: 60px;
    box-shadow: 3px 0px 20px #000;
    background-color: #f2f2f2;
    ul.nav{
      min-width: 800px;
      width: 80%;

      position: relative;
      margin: 0 auto;
      .router-link-active .navbottom::before{
        transform: scaleX(1);
        transform-origin: 0 0;
      }

      li#home{
        /*margin-right: 800px;*/
        float: left;
      }

      li#sell{
        position: relative;
        ul{
          margin: 0;
          padding: 0;
          width: 150px;
          position: absolute;
          top: 50px;
          left: 0;
          height: 0;
          overflow: hidden;
          background: rgb(242,242,242);
          li{
            padding: 5px 0;
            text-align: center;
            width: 100%;
          }
          li:hover{
            background: #c5c5c5;
          }
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -ms-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
        }
      }
      /*li#sell:hover{*/
        /*.move{*/
          /*height: 300px;*/
        /*}*/
      /*}*/


      li{
        margin: 0;
        position: relative;
        list-style-type:none ;
        float: right;
        cursor: pointer;
        font-size: 14px;
        .navicon{
          padding-left: 20px ;
          height: 30px;
          .icon{
            font-size: 18px;
            padding-right: 10px;
            line-height: 30px;
          }

        }

        .navbottom{
          position: relative;
          padding-left: 50px;
          padding-top: 3px;
          width: 100px;

        }
        .navbottom::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width:100% ;
          height: 100%;
          border-top: 2px solid red;
          transform: scaleX(0);
          transform-origin: 100% 0;
          transition: transform 0.2s ;
        }



      }

    }



  }




</style>
