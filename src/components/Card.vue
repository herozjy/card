<template>
  <div id="card">
    <zjyheader>
        <div >电子请帖</div>
        <div slot="right" @click="help()">帮助</div>
    </zjyheader>
    <div id="navbar">
      <div class="navbar-item">
        <router-link to="/binke">
          <img src="../assets/logo.png" />
          <div>宾客</div>
        </router-link>
      </div>
      <div class="navbar-item">
        <router-link to="/liwu">
          <img src="../assets/logo.png" />
          <div>礼物.礼盒</div>
        </router-link>
      </div>
      <div class="navbar-item">
        <router-link to="/bimai">
          <img src="../assets/logo.png" />
          <div>婚前必买</div>
        </router-link>
      </div>
      <div class="navbar-item">
        <router-link to="/mv">
          <img src="../assets/logo.png" />
          <div>婚礼MV</div>
        </router-link>
      </div>
    </div>

    <div class="content">

      <div class="item">
        <router-link to="/tempnews/creatTemplate">

          <img src="../assets/1.png" alt="">
        </router-link>
      </div>


    </div>



    <div class="creat">
      <router-link to="/cardtemplate">
        + 创建请帖
      </router-link>
    </div>



  </div>

</template>


<script>
  import Vue from 'vue'
  import zjyheader from "@/components/ZJY-Header/ZJY-Header";


  export default {
    name: "card",
    data() {
      return {
        msg: '我是一个新闻组件',
      }
    },
    methods: {
      help(){
        console.log(1)
      }
    },
    mounted() {

    },
    components: {
      zjyheader
    }

  }

</script>

<style scoped>
  #card a {
    color: #fff;
    text-decoration: none;
  }

  .zjyheader {
    background-color: red;
    color: #fff;
  }

  #navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: red;
    padding: 20px 0;
  }

  .navbar-item {
    /* display: flex;
    align-items: center; */
    text-align: center;
    color: #fff;
    width: 120px;
    height: 80px;
  }

  .navbar-item img {
    width: 50px;
    height: 50px;
    display: block;
    margin: 0 auto 10px;
  }

  .creat {
    position: fixed;
    background-color: red;
    width: 200px;
    height: 70px;
    line-height: 70px;
    border-radius: 70px;
    text-align: center;
    color: #fff;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%)
  }

  .content {
    padding: 0 40px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
  }

  .item {
    width: 48%;
    height: 490px;
    margin-top: 20px;
  }

  .item img {
    width: 100%;
    height: 100%;
  }

</style>
