
<template>
  <div id="register">
    <div class="back">
      <span @click="backPage"> <<< 返回 <span>back</span> </span>
    </div>
    <div class="content-box">
      <div class="logo" :style="logo"></div>
      <div class="text">
        <h2>Chengdu Neusoft University, No.1 Neusoft Avenue, Qingcheng </h2>
        <h2>Mountain Town, Dujiangyan, Chengdu, Sichuan</h2>
      </div>
      <div class="x">
        <span class="icon iconfont icon-shanchu"></span>
      </div>
      <div class="concat">
        <div :style="call">+86 17780572083</div>
        <div :style="email">645054279@qq.com</div>
      </div>

      <div class="formRegister">
        <div class="">
          <span></span>
          <span></span>
        </div>
        <div></div>
      </div>

      <div class="formRegister">
        <div>
          <input type="text" placeholder="真实姓名 Name">
          <input type="text" class="email" placeholder="电子邮件 Email">
        </div>

        <input type="text" placeholder="居民身份证号 Resident ID card number">
        <textarea class="address" placeholder="收件地址 Receiving address"></textarea>
      </div>

      <div class="btn">
        <div class="center" @click="down">Down</div>
      </div>
    </div>

    <div class="toRegister">
      <router-link to="/Login">
        <div class="text" :style="toLogin">
          注册 <span>Register</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data(){
      return {
        logo:{
          backgroundImage:"url('" + require('../assets/logo.png') + "')",
          backgroundRepeat:"no-repeat",
          backgroundSize:"100% 100%",
        },
        email:{
          backgroundImage:"url('" + require('../assets/email.png') + "')",
          backgroundRepeat:"no-repeat",
          backgroundSize:"10% 100%",
        },
        call:{
          backgroundImage:"url('" + require('../assets/call.png') + "')",
          backgroundRepeat:"no-repeat",
          backgroundSize:"10% 100%",
          backgroundPosition:"0 0"
        },
        toLogin:{
          backgroundImage:"url('" + require('../assets/toLogin.png') + "')",
          backgroundRepeat:"no-repeat",
          backgroundSize:"20% 100%",
          backgroundPosition:"0 0"
        },
      }
    },
    methods:{
      backPage(){
        this.$router.go(-1);
      },
      down(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="less">
  #register{
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

    .content-box{
      border: 1px solid #000;
      padding-top: 30px;
      .logo{
        width: 180px;
        height: 180px;
        margin:0px auto;
      }
      .text{
        text-align: center;
        h2{
          font-weight: lighter;
          font-size: 20px;
        }

      }
      .x{
        text-align: center;
        margin: 20px 0;
        span{
          font-size: 30px;
          font-weight: normal;
        }
      }
      .concat{
        div{
          width: 150px;
          height: 20px;
          margin: 10px auto;
          padding-left: 30px;
        }
      }

      .formRegister{
        width: 800px;
        margin: 10px auto;
        div{
          input{
            width: 380px;
          }
          .email{
            margin-left: 20px;
          }
        }
        input{
          width: 790px;
          height: 30px;
          outline: none;
          border: 1px solid #000;
          font-size: 20px;
          margin-top: 20px;
          background-color: rgb(248,247,243);
          font-family: TT;
        }
        .address{
          width: 790px;
          height: 200px;
          outline: none;
          border: 1px solid #000;
          font-size: 20px;
          margin-top: 20px;
          background-color: rgb(248,247,243);
          font-family: TT;
        }

      }

      .btn{
        width: 300px;
        height: 30px;
        margin: 10px auto;
        div{
          color: white;
          width: 80px;
          height: 20px;
          border-radius: 10px;
          background-color: rgb(63,44,27);
          text-align: center;
          line-height: 20px;
          cursor: pointer;
        }
        .center{
          margin: 0 auto;
        }
      }

    }

    .toRegister{
      margin: 10px 0;
      height: 50px;
      .text{
        float: right;
        width: 150px;
        height: 50px;
        padding-left: 42px;
        line-height: 70px;
        font-family: 楷体;
        cursor: pointer;
        span{
          font-family: TT;
        }
      }
    }

  }
</style>
