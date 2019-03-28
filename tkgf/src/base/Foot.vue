<template>
    <div id='foot'>
        <div class="foot-line">
          <div class="foot-line-middle">
            <div class="foot-logo" :style="logo">

            </div>
          </div>
        </div>
        <div class="foot-content">
          <div class="foot-news">
            <div class="foot-content-left">
              <ul>
                <li>客服电话</li>
                <li>+86 1778572083</li>
                <li>服务时间</li>
                <li>7：00-18：30</li>
              </ul>
              <ul>
                <li>customer service numbers</li>
                <li>+86 1778572083</li>
                <li>service time</li>
                <li>7：00AM-18：30AM</li>
              </ul>
            </div>
            <div class="foot-content-right">
              <div class="address">Address</div>
              <div>四川省成都市都江堰市青城山镇东软大道一号成都东软学院</div>
              <div>Chengdu Neusoft University,  No. 1 Neusoft Avenue, Qingcheng Mountain Town, Dujiangyan, Chengdu, Sicuan</div>
            </div>

          </div>
          <div class="foot-bottom">
            2018-2019|lopyright|lopyright declaration
          </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Foot",
      data:function (){
        return {
          logo:{
            backgroundImage:"url("+require("../assets/footLogo.png") +")",
            backgroundRepeat:'no-repeat',
            backgroundSize:"100% 100%"
          }
        }
      }
    }
</script>

<style scoped lang="less">

  #foot {
    .foot-line {
      border-top: 1px solid #333;
      position: relative;
      min-width: 800px;
      margin-top: 150px;
      .foot-line-middle {
        background: #f8f7f3;
        padding: 0 30px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        .foot-logo {
          width: 200px;
          height: 200px;
        }
      }
    }

    .foot-content {
      width: 96%;
      min-width: 800px;
      margin: 0 auto;
      .foot-news {

        font-size: 15px;
        font-family: '宋体';
        .foot-content-left {
          float: left;

          ul {
            margin-top: 20px;
            li {
              margin: 5px 0;
            }
          }
        }
        .foot-content-left::before {
          content: '';
          clear: both;
        }
        .foot-content-right {
          float: right;
          .address {
            font-family: 'TT';
          }
          div {

            margin-top: 20px;
            width: 265px;
            /*margin-right: 100px;*/
          }
        }
        .foot-content-right::before {
          content: '';
          clear: both;
        }
      }
      .foot-bottom {
        font-size: 20px;
        clear: both;
        text-align: center;
        font-family: 'TT';
      }
    }
  }


</style>
