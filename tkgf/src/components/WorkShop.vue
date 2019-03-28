<template>
    <div id="WorkShop">
      <transition name="yared">
        <div class="anima" v-if="show" key="4">
          <div class="mainimg" v-for="(item, index) in bbtimg1" :key="index">
            <div class="img1" :style="item"></div>
          </div>
        </div>
        <div class="anima" v-else key="5">
          <div class="mainimg" v-for="(item, index) in bbtimg1" :key="index">
            <div class="img1" :style="item"></div>
          </div>
        </div>

      </transition>
      <!--<div class="mainimg" v-for="(item, index) in bbtimg1" :key="index">-->
        <!--<div class="img1" :style="item"></div>-->
      <!--</div>-->
      <ul>
        <li v-for="(item, index) in list" :key="index">
            <div class="pdt" v-if="index%2 !== 0">

              <div class="pdt-left" >
                  <img :src="local+item.title_pic" width="700" alt="">
              </div>
              <div class="pdt-right">
                <div class="bao">
                  <p>
                    <span class="title">{{item.title_en}}</span><br>
                    <span class="title">{{item.title_zh}}</span><br>

                  </p>
                  <p>
                    <span class="sketch">{{item.sketch_zh}}</span><br>
                    <span class="sketch">{{item.sketch_en}}</span><br>
                  </p>
                  <p>
                    <span class="num-data">￥ {{item.price}}</span><br>
                    <span class="num-data">PCS {{item.stock_zh}}</span><br>
                    <span class="num-data">EAN-8 {{item.code}}</span><br>
                  </p>
                  <router-link :to="{path:'Pay',query:{proName:item.title_en}}" class="pay"><<< pay for it</router-link>
                </div>
              </div>

            </div>

            <div class="pdt" v-if="index%2 === 0">

              <div class="pdt-left" >
                <div class="bao">
                  <p>
                    <span class="title">{{item.title_en}}</span><br>
                    <span class="title">{{item.title_zh}}</span><br>

                  </p>
                  <p>
                    <span class="sketch">{{item.sketch_zh}}</span><br>
                    <span class="sketch">{{item.sketch_en}}</span><br>
                  </p>
                  <p>
                    <span class="num-data">￥ {{item.price}}</span><br>
                    <span class="num-data">PCS {{item.stock_zh}}</span><br>
                    <span class="num-data">EAN-8 {{item.code}}</span><br>
                  </p>
                  <router-link :to="{path:'Pay',query:{proName:item.title_en}}" class="pay">pay for it >>> </router-link>
                </div>
              </div>
              <div class="pdt-right">
                  <img :src="local+item.title_pic" width="700" alt="">
              </div>
            </div>
            <div class="clear"></div>
        </li>
      </ul>

    </div>
</template>

<script>
    import {Candy,getImg} from '../api'

    export default {
      name: "WorkShop",
      data:function (){
        return {
          show:true,
          transitionName:'',
          local:process.env.API_ROOT,
          bbt1:{
            backgroundImage:"",
          },
          bbt2:{
            backgroundImage:"",

          },
          bbtimg:[],
          imglist:[],
          list:[],
          classify:'bbt'
        }
      },
      computed:{
          bbtimg1:function (){
            this.bbtimg=[];
            for(let item of this.imglist){
              let bgurl = {};
              bgurl.backgroundImage = "url('"+item.path+"')";
              this.bbtimg.push(bgurl);
            }
            return this.bbtimg;
          }
      },
      created(){
        if(this.$route.query.classify === undefined){
          this.classifychange();
        }else{
          this.getWorkShop();
          this.classifychange();
        }
      },
      mounted(){
        this.$router.afterEach((to, from, next) => {
          window.scrollTo(0, 0);
        });
      },
      methods:{
        async getCandy(candy){
           let bbt =  await Candy(candy);
           this.list = bbt.list;
        },

        async Img(){
          let data = await getImg(this.classify);
          if(data.empty){
            return
          }
          this.imglist = data.list;
          this.imglist.map(function (item){
            return item.path =item.path.replace(/\\/g,'/');
          })
        },
        getWorkShop(){
          this.classify = this.$route.query.classify;
          console.log(this.classify);
        },
        classifychange(){
          if(this.classify ===''){
            return;
          }else{
            this.Img();
            this.getCandy(this.classify);


          }
        }
      },
      //监听
      //先写要监听的数据，然后{} 里面写hanlder句柄函数，参宿原数据和新数据，函数里面写要做什么，还有个deep可以深入监听
      watch:{
        $route:{
            handler:function (val, oldval){
              this.getWorkShop();
              // this.$router.go(0);
              //切换路由参数生命周期中的created不会变化，需要监听$toute 再次调用需要刷新数据的函数；
              this.classifychange();



              this.transitionName = 'yared';
              this.show = !this.show;
              console.log(this.show)
            }
        }
      }
    }
</script>

<style scoped lang="less">
  .yared-enter-active, .yared-leave-active{
    transition: all .5s;
  }
  .yared-enter{
    transform: translateX(100%);
  }
  .yared-leave-to{
    transform: translateX(-100%);
  }

  #WorkShop{
    padding-top: 1px;
    .anima{
      width: 100%;
      position: absolute;
      .mainimg{
        width: 100%;
        .img1{
          wdith:100%;
          height: 700px;
          background-repeat:no-repeat;
          background-size:100% 100%;
        }
      }
    }



    ul{
      width: 1200px;
      margin: 1420px auto 20px auto;
      li{
        .pdt-left{
          width: 600px;
          float: left;
        }
        .pdt-right{
          width: 600px;
          float: right;
          text-align: right;
        }
        .clear{
          clear: both;
        }
          .bao{
            width: 300px;
            margin: 100px auto;
          }
          span{
            line-height:35px;
          }
          a{
            display: block;
            text-align: center;
          }

          .title{
            font-size:25px ;
            font-family: 'TT';
          }
          .sketch{
            font-family: 'TT';
            font-size: 15px;
          }
          .num-data{
            font-size: 15px;
            font-weight: bold;
            color: rgb(105,95,97);
            font-family: 'TT0524M';
          }
          .pay{
            font-family: 'TT';
          }
      }
    }
  }


</style>
