<template>
    <div id="login">
      <div class="back">
        <span @click="backPage"> <<< 返回 <span>back</span> </span>
      </div>
      <div class="content-box">
        <div class="logo" :style="logo"></div>
        <div class="text">
          <h2>Detailed consultation</h2>
        </div>
        <div class="x">
          <span class="icon iconfont icon-shanchu"></span>
        </div>
        <div class="concat">
          <div :style="call">+86 17780572083</div>
          <div :style="email">645054279@qq.com</div>
        </div>

        <div class="formLogin">
          <div class="Name">
            <span class="zh">真实姓名</span><br>
            <span class="en">Real name</span>
            <input type="text" v-model="userName">
          </div>
          <div class="email">
            <span class="zh">电子邮件</span><br>
            <span class="en">E-mail</span>
            <input type="text" v-model="Email">
          </div>
        </div>
        <div class="btn">
            <div class="left" @click="down">Down</div>
            <div class="right" @click="clean">Clean</div>
        </div>
      </div>

      <div class="toRegister">
        <router-link to="/Register">
          <div class="text" :style="toRegister">
            注册 <span>Register</span>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
          return {
            userName:'',
            Email:'',
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
            toRegister:{
              backgroundImage:"url('" + require('../assets/toRegister.png') + "')",
              backgroundRepeat:"no-repeat",
              backgroundSize:"20% 100%",
              backgroundPosition:"0 0"
            },
          }
        },
        methods:{
          backPage(){
            this.$router.push('/Home');
          },
          clean(){
            this.userName = '';
            this.Email = '';
          },
          down(){
            this.$store.commit('changeLoginState');
            this.$router.push('/Home')
          }
        }
    }
</script>

<style scoped lang="less">
#login{
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
    padding-top: 10px;
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
    .formLogin{
      width: 250px;
      margin: 40px auto 0 auto;
      text-align: center;
      div{
        margin: 40px 0;
      }
      input{
        width: 240px;
        height: 30px;
        outline: none;
        font-size: 20px;
      }
      .zh{
        font-size: 24px;
        font-family: 楷体;
      }
      .en{
        font-size: 24px;
        font-family: TT;
      }
    }
    .btn{
      width: 300px;
      height: 30px;
      margin: 0 auto;
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
      .left{
        float: left;
      }
      .right{
        float: right;
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
