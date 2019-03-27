<template>
    <div id="about">
      <div class="content-top">
        <span class="StencilStd">LIFE IS </span><br>
        <span class="Simple">Simple</span><br>
        <span class="StencilStd">CONNECTION</span><br>
        <span class="Day">Day <span class="in">in</span> <span class="StencilStd">2018</span></span><br>
        <span class="Century751BT">Artisry since 2018</span>
      </div>
      <div class="content-list">
        <div class="list-item">
            <div>
              <img src="../assets/about1.png" width="500" alt="">
            </div>

            <div class="text-about">
              <h1>创造因素 <span>Creative factors</span></h1>
              <p>
                食品行业是个良知行业，损害消费者的健康，就是损害自己，质量就是生命线！专注产品质量，继续为消费者把好关键的食品安全关。
              </p>
              <p>
                将通过不断提升品质与附加值，来满足消费者对高品质生活的需求做企业需要团队。
              </p>
              <p>
                糖果行业是一个能给人们带来愉悦的行业，带给人们的愉悦越多，价值就越高！对此我们感到无比自豪！在未来，将以带给消费者更多的愉悦享受为己任——愉悦大众，成就价值。
              </p>
              <p>
                Food industry is a conscience industry, to damage the health of consumers is to damage themselves, quality is the lifeline! Focus on product quality and continue to ensure good food safety for consumers.
              </p>
              <p>
                Through continuous improvement of quality and added value, to meet the needs of consumers for high-quality life to do business needs team.
              </p>
              <p>
                The candy industry is an industry that can bring pleasure to people. The more pleasure it brings, the higher the value it brings. We feel very proud of this. In the future, it will be a duty to bring more pleasure to consumers.
              </p>
            </div>
            <div class="clearfloat"></div>
        </div>

        <div class="list-item">
          <div class="text-about toll">
              <h1>灵感来源 <span>Inspiration Source</span></h1>
              <p>
                生活就是这样
              </p>
              <p>
                我给你一颗糖，你很高兴， 当你看到我给别人两颗，你就对我有看法了。 但你不知道他也曾给我两颗糖，而你什么都没给过我。
              </p>
              <p>
                两人相处，总有一方要先递出那两颗糖，一颗糖传递的永远只有一颗糖的情分。计较得太多，只能说明感情不够深。爱在两情相悦时，谁都会只想会付出不分你我；当爱已成灰：明智的人懂得放弃，真情的人懂得付出，幸福的人懂得超脱。觉得除了像晏几道那种“人皆负之而不恨”的情痴，大部分人之间的感情就像玩跷跷板，求的就是个“心理平衡”。失衡了，久而久之便心生嫌隙。
              </p>
              <p>
                我虽向往前者，但还是提倡后者。Nature needs balance.“
              </p>
              <p>
                Life is like this.
              </p>
              <p>
                I give you a sugar, you are very happy, when you see I give two others, you have my opinion. But you didn't know he gave me two sweets, and you didn't give me anything.
              </p>
              <p>
                Two people get along, there is always one side to hand out the two candies, a candy will always pass on only one candy sentiment. Too much calculation can only show that the feeling is not deep enough. When love is in love, everyone just wants to give it to you and me; when love has become gray: wise people know how to give up, true people know how to pay, happy people know how to detach. It feels like most people's feelings are like playing on the seesaw except for Yan Jidao's "no hatred for everyone" love fool. What they want is a "psychological balance". Out of balance, as time passes, there is a gap in heart.
              </p>
              <p>
                Although I move forward, I advocate the latter. Nature needs balance.
              </p>
          </div>
          <div>
            <img src="../assets/about2.png" width="600" alt="">
          </div>
          <div class="text-about short">
            <h1>品牌概念 <span>Brand Concept</span></h1>
            <p>
              不惜余力，一往情深。追寻年少时的梦想。
            </p>
            <p>
              Spare no effort to go deep into love. Pursuing the dream of youth.
            </p>
          </div>
        </div>
      </div>
      <div class="content-bottom">
        <div class="vertical-line"></div>
      </div>
    </div>
</template>

<script>

    export default {
        name: "About",
        data:function (){
          return {

          }
        },
        created(){
        }
    }
</script>

<style scoped lang="less">
  #about{
    width: 1400px;
    margin:0 auto;
    font-size: 15px;

    .content-top{
      position: relative;
      padding-top: 100px;
      text-align: center;
      span{
        color: rgb(233,225,215);
      }
      .StencilStd{
        font-size: 110px;
        font-family: 'Stencil Std';

      }
      .Day{
        font-size:120px ;
        font-family: 'TT';
      }
      .in{
        font:90px 'TT';
      }
      .Simple{
        display: inline-block;
        font:110px 'SEVER';
        margin: -100px 0 0 200px;
      }
      .Century751BT{
        font-size: 40px;
        font-family: 'Century751 BT';
      }
    }
    .content-list{
      margin-top: -100px;
      .list-item{

        margin: 40px;
        overflow: hidden;
        padding: 20px;
        div{
          float: left;

        }
        div:not(.text-about){
          margin-left: 50px;
        }
        .text-about{

          margin-left: 150px;
          width: 500px;
          float: left;
          line-height: 1.5em;
          padding-top: 80px;
          h1{
            margin: 20px;
            font-size: 30px;
            font-weight: normal;
            span{
              font-family: 'TT';
            }
          }
          p{
            font-family: 'AbobeKaitiStd';
            margin: 11px 0;
          }
        }
        .toll{
          padding-top: 0px;
          margin: 0 50px;
        }
        .short{
          margin-top: 100px;
          margin-left: 70px;
        }
      }
    }

    .content-bottom{
      .vertical-line{
        margin: 0 auto;
        height: 100px;
        width: 0;
        border-left:1px solid #333 ;
      }
    }
  }
</style>
