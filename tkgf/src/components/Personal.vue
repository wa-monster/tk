<template>
    <div id="personal" :style="bg">
      <div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Personal",
        data(){
          return {
            bg:{
              backgroundImage:"url('"+ require('../assets/personal.jpg') + "')",
              backgroundRepeat:'no-repeat',
              backgroundSize:"100% 100%"
            }
          }
        }
    }
</script>

<style scoped lang="less">
  #personal{
    width: 100%;
    height: 2400px;
  }

</style>
