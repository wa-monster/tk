<template>
    <div id="app">
      <div v-if="isLogin">
          <ul id="person">

            <li class="wel">
              <span class="icon iconfont icon-denglu1"></span>
              <span>Hello</span>
              <span>Mr Bin</span>
            </li>
            <li>
              <span>小钱包</span>
              <span>Purse</span>
            </li>
            <li>
              <span>已购买</span>
              <span>Purchased</span>
            </li>
            <li>
              <span>浏览历史</span>
              <span>History</span>
            </li>
            <li>
              <span>用户信息</span>
              <span>information</span>
            </li>
          </ul>
      </div>
      <div v-else>
        <router-link to="/Login">
          <div id="AccountNumber">
            <span class="icon iconfont icon-denglu1"></span>
          </div>
        </router-link>
      </div>

      <Swiper></Swiper>
      <div class="preview">
        <div class="preview-title">
          <div class="preview-line"></div>
          <div class="preview-text">
            <span class="preview-title-zh">公司预览</span>
            <br>
            <span class="preview-title-en">Company Preview</span>
          </div>
        </div>

        <div class="preview-left">
            <span>概念产品  / <span>Conceptual product</span></span>
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
            <div class="view">View the details</div>
        </div>
        <div class="preview-right">
            <span class="new">新消息 / <span>New</span></span><br>
            <span>2048.9.20</span><br>
            <span>公司上市一周年团建活动顺利开展</span>
          <p>
            <span>为回馈广大客户一直以来对我公司产品的信赖，我们将于2018年10月1日到12月1日</span><br>
            <span>推出我们独自生产的免费糖果一包</span><br>
            <span>In return for our customers'trust in our products, we will launch a package of free candy from October 1 to December 1, 2008. </span>
          </p>
          <div class="view">View the details</div>
        </div>

      </div>


      <div class="gift">
        <div class="gift-content">
          <div class="gift-left">
            <span>《作为礼物送给少时的自己》</span><br>
            <span>“As a gift for a little time.”</span>
            <p>
              <span></span>
              <span>生活就像一袋糖，你永远不知道下一块会是什么味道</span><br>
              <span>Life is like a bag of sugar, you never know what the next one will taste like.</span>
            </p>
            <div class="get-into">点击进入商品界面</div>
          </div>
          <div class="gift-right">
              <div class="gift-right-c">
                <div class="img1" :style="img1"></div>
                <span>作为礼物送给朋友</span><br>
                <span>As a Gifts for friends</span>
              </div>
              <div class="gift-right-c">
                <div class="img1" :style="img2"></div>
                <span>给自己购买</span><br>
                <span>Buying for yourself</span>
              </div>
          </div>
          <div class="gift-bottom">
              <span>2018-2019</span>
              <span>|</span>
              <span>Copyright</span>
              <span>|</span>
              <span>Copyright declaration</span>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    import Swiper from '@/base/Swiper'

    export default {
        name: "Home",
        data() {
          return {
            msg:"123456",
            isLogin:this.$store.state.isLogin,
            img1:{
              backgroundImage:"url('"+require('../assets/gift.png')+"')",
              backgroundSize:"70% 70%",
              backgroundPosition:'50% 50%',
              backgroundRepeat:"no-repeat"
            },
            img2:{
              backgroundImage:"url('"+require('../assets/vipCard.png')+"')",
              backgroundSize:"70% 70%",
              backgroundPosition:'50% 50%',
              backgroundRepeat:"no-repeat"
            },
          }
        },
        methods:{

        },
      components:{Swiper}
    }
</script>

<style scoped="scoped" lang="less">
  #app{
    #AccountNumber{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid #777;
      text-align: center;
      line-height: 40px;
      background-color: rgb(248,247,243);
      position: absolute;
      top: 200px;
      left: 5px;
      z-index: 1000;
    }
    #person{
      padding: 0;
      border-radius: 20px;
      border: 1px solid #777;
      text-align: center;
      line-height: 40px;
      background-color: rgb(248,247,243);
      position: absolute;
      top: 60px;
      left: 0px;
      z-index: 1000;
      li{
        margin-top: 10px;
        margin-bottom: 20px;
        cursor: pointer;
        span{
          padding: 0;
          margin: 0;
          font-size: 14px;
          display: block;
          height: 20px;
          line-height: 20px;
          font-family: TT;
        }
      }
      .wel{
        span{
          font-family: 楷体;
        }

      }
    }
    .preview{
      width: 1400px;
      margin: 80px auto 0 auto;
      height: 500px;
      .preview-title{
        position: relative;
        .preview-line{
          border-top: 2px solid rgb(182,165,96);
        }
        .preview-text{
          background-color: rgb(248,247,243);
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%,-50%);
          padding:20px;
          font-size: 30px;
          text-align: center;
          .preview-title-zh{
            font-family: TT;
          }
          .preview-title-en{
            font-family: TT;
          }
        }
      }

      .preview-left{
        margin-top: 50px;
        margin-left: 20px;
        width: 650px;
        float: left;
        text-align: center;
        span{
          font-family: TT;
          font-size: 20px;
        }
      }
      .preview-right{
        margin-top: 50px;
        margin-right: 20px;
        width: 650px;
        float: right;
        text-align: center;

        p{
          margin-top: 20px;
        }
        span{
          font-family: TT;
          font-size: 15px;
          line-height: 30px;
        }
        .new{
          font-size: 20px;
        }
      }
      .view{
        font-size: 15px;

        border: 1px solid rgb(182,169,96);
        width: 150px;
        height: 30px;
        line-height: 30px;
        margin: 30px auto;
      }

    }

    .gift{
      background-color: black;
      .gift-content{
        width: 1400px;
        margin: 0 auto;
        .gift-left{
          margin: 100px 0px 100px 40px;
          width: 650px;
          text-align: center;
          float: left;
          span{
            color: #fff;
            font-family: 'TT';
            line-height: 25px;
          }
          .get-into{
            width: 200px;
            height: 30px;
            border: 1px solid  #fff;
            text-align: center;
            line-height: 30px;
            margin: 20px auto;
            color: #fff;
            cursor: pointer;
          }
          p{
            margin-top: 30px;
          }
        }



        .gift-right{
          width: 650px;
          margin: 100px 40px 100px 0;
          float: right;
          .gift-right-c{
            margin-left: 100px;
            float: left;
            text-align: center;
            .img1{
              width: 150px;
              height: 150px;
              border: 3px solid #fff;
              border-radius:50% ;
            }
            span{
              color: #fff;
              font-family: 'TT';
            }
          }

        }


        .gift-bottom{
          text-align: center;
          margin:10px  ;
          clear: both;
          span{
            color: #fff;
            font-family: 'TT';
          }
        }

      }
    }


  }

</style>
