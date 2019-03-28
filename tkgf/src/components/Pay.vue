<template>
  <div id="pay">
    <div class="back">
      <span @click="backPage"> <<< 返回 <span>back</span> </span>
    </div>
    <div id="content">
      <div id="img">
        <img :src="imgurl" alt="" width="500">
      </div>
      <div id="introduce">
        <div class="title">
          <span class="zh">{{listData.title_zh}}</span><br>
          <span class="en">{{listData.title_en}}</span>
        </div>
        <div class="easyint">
          <div>
            <h4>制作工序</h4>
            <span class="int_zh">{{listData.sketch_zh}}</span><br>
            <span class="int_en">{{listData.sketch_en}}</span>
          </div>
          <div>
            <h4>订购方式</h4>
            <span class="int_zh">本产品通过邮寄和到店自取得方式进行售卖</span>
            <span class="int_en">This product is sold by mail and by store.</span>
          </div>
        </div>
        <div id="adlogo">
          <div :style="positionPNG"></div>
        </div>
        <div id="lineText">
          <div id="line"></div>
          <div id="text">
            <span class="l_zh">店铺位置</span><br>
            <span class="l_en">Shop location</span>
          </div>
        </div>
        <div id="address1">
          <span class="ad_zh" :style="positionPNG2">四川省成都市都江堰市成都东软学院</span>
          <span class="ad_en">Chengdu Neusoft University, Dujiangyan, Chengdu, Sichuan</span>
        </div>

        <div id="address2">
          <div class="add">
            东软大道一号：<span>Neusoft Avenue 1</span>
          </div>
          <div>
            611844
          </div>
          <div>
            <span>Call:</span> +86 17780572083
          </div>
        </div>
      </div>
      <div id="sendAddress">
        <div id="proimg" :style="proimg"></div>
        <div id="Delivery">
          <h2>收货地址</h2>
          <span>Receiving address</span>
        </div>
        <div id="formSubmit">
          <form>

            <div class="name_call">
              <input type="text" v-model="buysInfo.name"  >
              <input type="text" v-model="buysInfo.tell" >
            </div>
            <div class="mailAddress">
              <input type="text" v-model="buysInfo.address" >
            </div>
            <div class="message">
              <textarea name="" id="" cols="30" rows="10" v-model="buysInfo.message"></textarea>
            </div>
            <div class="subBtn" >
              <button type="button" @click="postInfo">Pay for it</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getproInfo,postProInfo} from '../api';

   export default {
    name: "Pay",
    data(){
      return {
        buysInfo:{
          name:'',
          tell:'',
          address:'',
          message:'',
          productName:'',
          price:''
        },
        proName:'123',
        listData:{},
        positionPNG:{
          backgroundImage:"url('" + require('../assets/position.png') + "')",
          backgroundRepeat:"no-repeat",
          backgroundSize:"50% 50%",
          backgroundPosition:"50% 50%"
        },
        positionPNG2:{
          backgroundImage:"url('" + require('../assets/position2.png') + "')",
          backgroundRepeat:"no-repeat",
          backgroundSize:"7% 100%",
          backgroundPosition:"left top"
        },
        proimg:{
          backgroundImage:"url('" + require('../assets/proimg.png') + "')",
          backgroundRepeat:"no-repeat",
          backgroundSize:"100% 100%",
        },
        imgurl:process.env.API_ROOT

      }
    },
    created(){
      this.proName =  this.$route.query.proName;
      this.getdata(this.proName)
    },
    methods:{
      backPage(){
        this.$router.go(-1);
      },
      async getdata(proName){
        this.data =  await getproInfo(proName)
        if(this.data.empty){

        }else{
          this.listData = this.data.list[0];
          this.imgurl = this.imgurl + this.listData.title_pic;
          this.buysInfo.productName = this.listData.title_zh;
          this.buysInfo.price = this.listData.price;
        }
      },
      async postInfo(){
        let data = this.buysInfo;
        await postProInfo(data)
          .then(function (response){
            console.log(response);
          })
          .catch(function (error){
            console.log(error);
          });
        this.$router.go(0);
      }
    },
  }
</script>

<style scoped lang="less">
  span{
    color: rgb(146,110,113);

  }
  h3{
    color: rgb(146,110,113);
  }
  h2{
    color: rgb(146,110,113);
  }
#pay{
  .back{
    margin: 10px ;

    span{
      cursor: pointer;
      font-family: 楷体;
      span{
        font-family: TT;
      }

    }
  }
  #content{
    width: 1500px;
    margin: 10px auto;
    overflow: hidden;
    padding-top: 50px;
    #img,#sendAddress{
      /*border: 1px solid #000;*/
      width: 440px;
      float: left;
    }
    #introduce{
      width: 500px;
      float: left;

    }
    #img{
      padding-top: 100px;
      overflow: hidden;
    }
    #introduce{
      .title{
        text-align: center;
        font-size: 30px;
        .zh{
          font-family: 楷体;
        }
        .en{
          font-family: TT;

        }
      }
      .easyint{
        width: 100%;
        margin-top: 30px;
        div{
          width: 30%;
          float: left;
          margin: 0 10%;
          h4{
            text-align: center;
            font-family: 楷体;
            font-weight: normal;
          }
          span{
            font-size: 15px;
          }
          .int_zh{
            font-family: 楷体;
          }
          .int_en{
            font-family: TT;
          }
        }
      }

      #adlogo{
        margin-top: 150px;
        width: 100%;
        div{
          width: 180px;
          height: 180px;
          border-radius:50%;
          border: 2px solid rgb(142,130,110);
          margin: 0 auto;
        }
      }

      #lineText{
        width: 100%;
        height: 100px;
        position: relative;
        #line{
          width: 100%;
          border-top: 2px solid rgb(142,130,110);
          position: absolute;
          top: 50%;
        }
        #text{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          background-color: rgb(248,247,243);
          padding: 0 70px;
          .l_zh{
            font-family: 楷体;
          }
          .l_en{
            font-family: TT;
          }
        }
      }
      #address1{
        width: 100%;
        text-align: center;
        span{
          display: inline-block;
        }
        .ad_zh{
          padding-left: 20px;
          font-family: 楷体;
        }
        .ad_en{
          font-family: TT;
        }
      }
      #address2{
        width: 100%;
        div{
          width: 33%;
          float: left;
          text-align: center;
          font-size: 12px;
          font-family: "楷体";
          span{
            font-family: TT;
          }
        }
      }

    }

    #sendAddress{
      #proimg{
        width: 300px;
        height: 170px;
        margin: 10px auto ;

      }
      #Delivery{
        width: 300px;
        margin: 30px  auto;
        text-align: center;
        h2{
          font-family: 楷体;
          font-weight: normal;
        }
        span{
          font-family: TT;
        }
      }
      #formSubmit{
        width: 300px;
        margin: 10px auto;

        form{

          input{
            color: rgb(146,110,113);
            width: 110px;
            height: 30px;
            padding-left: 32px;
            outline: none;
            background-color: rgb(248,247,243);
            border: 1px solid rgb(146,110,113);
          }
          .name_call{
            color: rgb(146,110,113);
            margin: 10px 0;
            position: relative;
            overflow: hidden;
          }
          .name_call::after{
            content: '姓名:';
            display: block;
            position: absolute;
            top: 8px;
            left: 4px;
            z-index: 555;
            font-size: 12px;
            color: rgb(146,110,113);
          }
          .name_call::before{

            content: '电话:';
            display: block;
            position: absolute;
            top: 8px;
            left: 155px;
            z-index: 555;
            font-size: 12px;
            color: rgb(146,110,113);
          }
          .mailAddress{

            position: relative;
            width: 300px;
            margin: 10px 0 ;
            input{
              width: 240px;
              border: 1px solid rgb(146,110,113);
              padding-left: 56px;
              color: rgb(146,110,113);
            }
          }
          .mailAddress::before{
            content: "邮寄地址:";
            position: absolute;
            top: 8px;
            left: 4px;
            font-size: 12px;
            color: rgb(146,110,113);
          }
          .message{
            width: 300px;
            position: relative;
            margin: 10px 0;
            textarea{
              width: 234px;
              padding:7px 7px 7px 56px;
              height: 100px;
              outline: none;
              background-color: rgb(248,247,243);
              border: 1px solid rgb(146,110,113);
              color: rgb(146,110,113);
            }
          }
          .message::before{
            content: "买家留言:";
            position: absolute;
            top: 8px;
            left: 4px;
            font-size: 12px;
            color: rgb(146,110,113);
          }
          .subBtn{
            float: right;
            button{
              width: 80px;
              background-color: rgb(248,247,243);
              border: 1px solid rgb(146,110,113);
              border-radius: 15px;
              padding:0 5px;
              font-size: 14px;
              font-family: TT;
              cursor: pointer;
            }
          }
        }
      }

    }
  }
}
</style>
