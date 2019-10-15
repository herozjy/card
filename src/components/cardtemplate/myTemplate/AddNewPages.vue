<template>
  <div>
    <zjyheader>
      <div slot="left">返回</div>
      <div>添加新页</div>
    </zjyheader>
    <div class="addNewPages-navbar">
      <div class="addNewPages-navbar-item" v-for="(item,index) in navbarData" :key="index" @click="changeNav(index)">
        {{item}}
      </div>
      <div class="addNewPages-navbar-line " :class="addNewPages_active"></div>
    </div>
    <div class="addNewPages-content">
        <div class="over-content" v-show='addNewPages_active=="active_item_0"'>
            <div class="addNewPages-content-item" @click="addPage(1)">
            <img src="" alt="">
            </div>
            <div class="addNewPages-content-item">
            <img src="" alt="">
            </div>
            <div class="addNewPages-content-item">
            <img src="" alt="">
            </div>
            <div class="addNewPages-content-item">
            <img src="" alt="">
            </div>
            <div class="addNewPages-content-item">
            <img src="" alt="">
            </div>
            <div class="addNewPages-content-item">
            <img src="" alt="">
            </div>
            <div class="addNewPages-content-item">
            <img src="" alt="">
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  import zjyheader from "@/components/ZJY-Header/ZJY-Header";
  import VueEvent from '@/model/VueEventAddPage.js';

  export default {
    data() {
      return {
        navbarData: [
          "单图", "双图", "多图", "纯文字"
        ],
        addNewPages_active: "active_item_0"
      }
    },
    components: {
      zjyheader
    },
    methods: {
      changeNav(index) {
        console.log(index)
        this.addNewPages_active = "active_item_" + index
      },
      addPage(id){
          console.log(id)
          var options = {
              id
          }
        VueEvent.$emit('addPage', options);
        this.$router.goBack();
    }
    }
  }

</script>
<style>
  .zjyheader {
    color: #fff;
    background-color: red !important;
  }

  .addNewPages-navbar {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;

    text-align: center;
    height: 60px;
  }

  .addNewPages-navbar-item {
    flex: 1
  }

  .addNewPages-navbar-line {
    position: absolute;
    width: 100%;
    background-color: #ccc;
    height: 4px;
    bottom: 2px;
  }

  .addNewPages-navbar-line::after {
    content: "";
    position: absolute;
    top: 0;
    background-color: red;
    width: 10%;
    height: 4px;
    transition: all 0.5s;
  }

  .active_item_0.addNewPages-navbar-line::after {
    left: 7.5%;
  }

  .active_item_1.addNewPages-navbar-line::after {
    left: 32.5%;
  }

  .active_item_2.addNewPages-navbar-line::after {
    left: 57.5%;
  }

  .active_item_3.addNewPages-navbar-line::after {
    left: 83%;
  }

  .addNewPages-content {
    padding: 20px;
    overflow: hidden;
  }

  .over-content {
    width: 120%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    box-sizing: content-box;
  }

  .addNewPages-content-item {
    width: 222px;
    height: 300px;
    background-color: red;
    margin-bottom: 20px;
    margin-right: 20px;
  }

</style>
