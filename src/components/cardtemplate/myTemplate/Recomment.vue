<template>
  <div id="myTemplate">
    <div class="myTemplate-itme" v-for="item in imgData" :key="item.index">
      <router-link :to="'/tempnews/'+item.imgId">
        <img :src="item.imgSrc" alt="">
      </router-link>
      <div class="collect">收藏</div>
    </div>
  </div>

</template>


<script>
  export default {
    "name": "myTemplate",
    data() {
      return {
        imgData: [
          {
            imgId: "1",
            imgSrc: require("../../../assets/logo.png")
          },
          {
            imgId: "2",
            imgSrc: require("../../../assets/logo.png")
          },
          {
            imgId: "3",
            imgSrc: require("../../../assets/logo.png")
          },
          {
            imgId: "4",
            imgSrc: require("../../../assets/logo.png")
          }

        ]
      }
    },

  }

</script>


<style>
  #myTemplate {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
   
  }

  .myTemplate-itme {
    width: 46%;
    height: 500px;
    margin: 20px 10px 0;
    background-color: rgb(39, 196, 188);
    position: relative;
  }

  .myTemplate-itme a {
    width: 100%;display: inline-block
  }

  .myTemplate-itme img {
    width: 100%;
    height: 100%;
  }
  .collect{
    position: absolute;
    right: -5px;
    top: 20px;
    background-color: #fff;
    width: 100px;
    height: 48px;
    line-height: 48px;
    box-shadow: 2px 0px 2px 3px #cccccc;
    text-align: center;
    border-top-left-radius:48px; 
    border-bottom-left-radius:48px; 
    z-index: 2
  }

</style>
