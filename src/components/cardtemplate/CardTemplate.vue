<template>
  <div id="card">
    <zjyheader>
        <div slot="left">返回</div>
        <div>选择模板</div>
        <div slot="right" >我的收藏</div>
    </zjyheader>
    <div class="nav">
      <!-- <div class="swiper_line" :class="active"></div> -->

      <div class="nav_in">
        <div class="nav-item" v-for="(item , index) in navTitle " @click="setTabId($event,index)" :data-index='index'
          :key="index">
          {{item}}
          <div class="line" :class="{'active': active=='tab-container'+index}">

          </div>
        </div>
      </div>
    </div>
    <keep-alive>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" :swipeable="true">
        <mt-tab-container-item id="tab-container0">
          <recomment></recomment>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container1">
          <mt-cell v-for="n in 7" title="tab-container 2" :key="n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="n in 5" title="tab-container 3" :key="n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="n in 7" title="tab-container 4" :key="n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container4">
          <mt-cell v-for="n in 7" title="tab-container 5" :key="n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container5">
          <mt-cell v-for="n in 7" title="tab-container 6" :key="n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container6">
          <mt-cell v-for="n in 7" title="tab-container 7" :key="n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container7">
          <mt-cell v-for="n in 7" title="tab-container 8" :key="n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container8">
          <mt-cell v-for="n in 7" title="tab-container 9" :key="n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container9">
          <mt-cell v-for="n in 7" title="tab-container 10" :key="n"></mt-cell>
        </mt-tab-container-item>



      </mt-tab-container>
    </div>
  </keep-alive>

  </div>

</template>


<script>
  import Vue from 'vue';
  import recomment from "./myTemplate/Recomment"
  import {
    TabContainer,
    TabContainerItem
  } from 'mint-ui';
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
  import zjyheader from "@/components/ZJY-Header/ZJY-Header";

  export default {
    name: "card",
    data() {
      return {
        active: 'tab-container0',
        navTitle: ["推荐", "视频请帖", '会员', "推荐", "视频请帖", '会员', "推荐", "水电费", "的的", "呵呵"],
        widthNavIn: "", //导航item_in宽度
        widthNavItem: "", //导航item宽度
      }
    },
    methods: {
      setTabId(e, index) {
        var that = this;

        // console.log(e.srcElement.dataset.index);  /*获取自定义属性的值*/
        //  var index   =  e.srcElement.dataset.index
        this.active = 'tab-container' + index
      }
    },
    mounted() {
      var navItem = document.getElementsByClassName("nav-item")[0];
      var domRectNavItem = navItem.getBoundingClientRect();
      console.log(domRectNavItem)
      this.widthNavItem = domRectNavItem.width //导航item宽度

      var nav_in = document.getElementsByClassName("nav_in")[0];
      var domRectNavIn = nav_in.getBoundingClientRect();
      console.log(domRectNavIn)
      this.widthNavIn = domRectNavIn.width //导航item_in宽度

    },
    components: {
      recomment,
      zjyheader
    },
    watch: {
      active: function (newVal, oldVal) {
        console.log(newVal, oldVal);
        var index = newVal.substr(-1, 1)
        console.log(index)
        var nav_in = document.getElementsByClassName("nav_in")[0];
       console.log( this.navTitle.length)
        if (index <= 2) {
          nav_in.style.left = 0
        } else if (index >= 3 && index <= this.navTitle.length-3) {
          nav_in.style.left = (2 - index) * this.widthNavItem + "px"
        } else if (index > this.navTitle.length-3) {
          nav_in.style.left = -(this.navTitle.length-5) * this.widthNavItem + "px"
        }

      }
    }
  }

</script>

<style scoped>
    .zjyheader {
        background-color: red;
        color: #fff;
      }

  .item {
    display: inline-block;
  }

  .nav {
    padding: 10px 0;
    width: 100%;
    left: 0;
    overflow: hidden;
    position: relative;
    overflow-x: scroll;
    height: 40px;
  }

  /* 去除滚动条 */
  .nav::-webkit-scrollbar {
    display: none;
  }

  .nav_in {
    position: absolute;
    /* height: 80px; */
    white-space: nowrap;

    display: flex;
    justify-content: flex-start;
    transition: all 0.2s linear
  }

  .swiper_line {
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: 0;
  }


  .nav-item {
    width: 140px;
    text-align: center;
    position: relative;

  }

  .line {
    position: absolute;
    bottom: 0px;

    height: 4px;
    width: 60px;
    left: 50%;
    transform: translateX(-50%)
  }

  .active {
    background-color: red;
  }


  .page-tab-container {
    padding: 0 20px
  }

  /* .page-tab-container {
    margin-top: 40px
  } */

</style>
