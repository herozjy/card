<template>
  <div id="myScroll">

    <img class="music_audio" src="../../../assets/flower.png" alt="">
    <img src="@/assets/arrow.png" class="arrow" alt="">

    <!-- MEGALOBOX.mp3 -->
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrapper">

      <swiper-slide v-for="(item,index) in sliderData" :key="index" class="swiper-slide " v-show="isShow">
        <div v-show="index==activeIndex">
          <component :is="'template'+ item.id" :userInfo="userInfo" :isUpLoadImg='isUpLoadImg'></component>
        </div>
      </swiper-slide>

    </swiper>

    <div style="position: fixed; top:20px;left:20px;z-index: 999;color: #000" @click=" back()">返回</div>
    <router-link to="/saveinfo" class="footer_btn" v-if="!isUpLoadImg">开始制作</router-link>
    <div class="footer_create" v-if="isUpLoadImg">
      <div class="footer_create_left">

        <router-link to="/addnewpages">
          <img src="@/assets/icon1.png" alt="">
          <div>加页</div>
        </router-link>

        <div>
          <img src="@/assets/icon2.png" alt="">
          <div>排序/删页</div>
        </div>

        <div>
          <img src="@/assets/icon3.png" alt="">
          <div>设置</div>
        </div>

        <div>
          <img src="@/assets/icon4.png" alt="">
          <div>预览</div>
        </div>

      </div>

      <div class="footer_create_right">
        <div class="">
          发送
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "Vue"

  // 异步组件
  const template1 = Vue.component('template1', function (resolve) {
    require(['@/components/cardtemplate/Alltemplate/template1'], resolve)
  });
  const template2 = Vue.component('template1', function (resolve) {
    require(['@/components/cardtemplate/Alltemplate/template2'], resolve)
  });
  const template3 = Vue.component('template1', function (resolve) {
    require(['@/components/cardtemplate/Alltemplate/template3'], resolve)
  });
  const template4 = Vue.component('template1', function (resolve) {
    require(['@/components/cardtemplate/Alltemplate/template4'], resolve)
  });
  const template5 = Vue.component('template1', function (resolve) {
    require(['@/components/cardtemplate/Alltemplate/template5'], resolve)
  });
  const template6 = Vue.component('template1', function (resolve) {
    require(['@/components/cardtemplate/Alltemplate/template6'], resolve)
  });
  const template7 = Vue.component('template1', function (resolve) {
    require(['@/components/cardtemplate/Alltemplate/template7'], resolve)
  });

  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper';
  import {
    Indicator
  } from 'mint-ui';
  import VueEvent from '@/model/VueEventAddPage.js';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        sliderData: [{
          id: 1,
        }, {
          id: 2,
        }, {
          id: 3,
        }, {
          id: 4,
        }, {
          id: 5,
        }, {
          id: 6,
        }, {
          id: 7,
        }, ],
        userInfo: {
          bridegroomName: "张三",
          brideName: "李四",
          adress: "杭州市西湖区文一西路98号婚礼记国际酒楼",
          tiemDemo4: '2017年12月12日11时30分',
        },
        swiperOption: {
          // swiper configs 所有的配置同swiper官方api配置
          notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          direction: 'vertical', //水平方向移动
          grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
          setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
          autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
          slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
          mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
          mousewheelControl: false, //同上
          height: window.innerHeight, // 高度设置，占满设备高度
          resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
          observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
          on: {
            // 回调函数，swiper从一个slide过渡到另一个slide结束时执行。
            // slideChangeTransitionEnd: function (e) {
            //   //swiper 切换页面 重新加载动画  
            //   // 思路：使用display属性把div未在当前swiper页面的元素隐藏不执行动画，当swiper滑动到当前页面时候block显示 div执行动画
            //   $(".swiper-slide-active").find('.item').removeClass('nopage').addClass('showpage')
            //   $(".swiper-slide-prev,.swiper-slide-next").find('.item').removeClass('showpage').addClass('nopage')
            // },
            //监听滑动切换事件，返回swiper对象
            slideChange: () => {
              let swiper = this.$refs.mySwiper.swiper;
              console.log(swiper.activeIndex); //滑动打印当前索引
              this.activeIndex = swiper.activeIndex
            }
          },

        },
        flag: true,
        activeIndex: 0,
        isShow: false,
        timer: null,
        pciture: "",
        isUpLoadImg: false,
        num111:1
      }
    },
    created() {
      //从后台获取数据
    },
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      console.log(this.$route.params)
      var params = this.$route.params
      if (params.tid == "creatTemplate") {
        var userInfo = JSON.parse(localStorage.getItem("userInfo"));
        this.userInfo = {
          ...
          userInfo,
        };
        this.isUpLoadImg = true;
        VueEvent.$on("addPage", (res) => {
          
        // this.sliderData =  this.sliderData.splice(-1,0,res)
        // console.log(this.sliderData)
         })
      }
   

      //禁用鼠标右键
      var img = document.getElementsByTagName("img")
      for (var i = 0; i < img.length; i++) {
        (function (i) {
          img[i].oncontextmenu = function (e) {
            e.preventDefault();
            console.log("2113")
          }
        })(i)
      }

      var that = this
      //swiper.slideTo(index,speed,runCallbacks)
      //index：必填，需要跳到页面的索引
      // speed：选填，切换速度（毫秒）
      // runCallbacks：选填，boolean，为false时不触发onSlideChange回调函数。
      this.swiper.slideTo(0, 0, true); //手动跳到指定页
      this.isShow = true

      //添加背景音乐，并判断音频是否加载完成
      this.addAudioTag('audio', function (audio) { //监听audio是否加载完毕，如果加载完毕，则读取audio播放时间
        var tiemsss = new Date().getTime()
        try {
          audio.play();
        } catch (e) {
          console.log(e)
        }
        audio.loop = "loop";
        var music_audio = document.getElementsByClassName('music_audio')[0];
        music_audio.style.transform = "rotate(360deg)"
        var num = 1;
        clearInterval(that.timer); // 清除定时器
        that.timer = setInterval(function () {
          num++
          music_audio.style.transform = "rotate(" + num * 360 + "deg)";
        }, 4000)
      })

      //加载icon 开启
      Indicator.open({
        spinnerType: 'fading-circle'
      });

      //判断图片是否加载完成
      this.getImgLoadEd('myScroll', function () {
        that.isShow = true;
        //加载icon 关闭
        Indicator.close();
      });



      //swiper 切换页面 重新加载动画  
      // // 思路：使用display属性把div未在当前swiper页面的元素隐藏不执行动画，当swiper滑动到当前页面时候block显示 div执行动画
      // $(".swiper-slide-prev,.swiper-slide-next").find('.item').removeClass('showpage').addClass('nopage')
    },
    methods: {
      getImgLoadEd(loadingBox, callback) {
        //存放 指定要加载的图片 的盒子
        var loadingBox = document.getElementById(loadingBox);
        //指定要加载的图片 的数量
        var imgL = loadingBox.getElementsByTagName("img");
        //指定要加载的图片 起始 key
        var imgStart = 0;

        IfLoadImg();

        //定时器执行的 加载图片 方法
        function IfLoadImg() {
          //所有图片加载完毕
          if (imgStart >= imgL.length) {
            console.log('图片加载完成，图片总数量：' + imgStart);
            if (callback) {
              callback();
            }
            return;
          }
          //根据 指定要加载的图片 的KEY 加载图片的方法
          loadImg(imgStart);

          function loadImg(imgIndex) {
            var curImg = imgL[imgIndex].src;
            var loadImg = new Image();
            loadImg.src = curImg;
            loadImg.onload = function () {
              imgStart++;
              IfLoadImg();
            }
          }
        }
      },
      addAudioTag: function (node, callback) {
        var myScroll = document.getElementById("myScroll");
        var audio = document.createElement(node);
        audio.src = require('../../../assets/MEGALOBOX.mp3') //这里放音乐的地址
        myScroll.appendChild(audio)
        audio.oncanplay = function () {
          callback(audio)
        }
      },
      isChange(e) {
        console.log(e);
        this.picture = e.target.files[0]; // get input file object
        console.log(this.picture);

      },
      upload: function () {
        var that = this;
        var formData = new FormData();
        formData.append('picture', this.picture);
        console.log(formData)
        return
        // specify Content-Type, with formData as well
        this.$http.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (res) {
          res.json().then(function (result) {
            that.result = result.info;
            console.log(that.result);
          });
        }, function (res) {
          console.log(res.body);
        });
      },
      back() {
        if (this.isUpLoadImg) {
          // redirect
          this.$router.replace({
            path: "/"
          })
          this.$router.isBack = true //路由自定义属性  


        } else {
          this.$router.goBack() //路由自定义属性

        }
      }


    },
    destroyed() {
      var music_audio = document.getElementsByClassName('music_audio')[0];

      clearInterval(this.timer); // 清除定时器

      this.timer = null;
      Indicator.close();


    },
    components: {
      swiper,
      swiperSlide,
      template1,
      template2,
      template3,
      template4,
      template5,
      template6,
      template7
    }
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .swiper-slide {
    background-color: #f8f8f6;
  }

  .myScroll {
    background-color: #f9faf5
  }

  .music_audio {
    position: fixed;
    right: 20px;
    top: 20px;
    width: 40px;
    z-index: 999;
    transform: rotate(0deg);
    /* animation: ani_scroll 4s  infinite linear */
    transition: all 4s linear;
  }

  @keyframes ani_scroll {
    from {
      transform: rotate(0deg)
    }

    to {
      transform: rotate(360deg)
    }
  }



  /* animted可以更改动画的持续时间、添加延迟或更改播放的次数：

  .yourElement {
    animation-duration: 3s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
  } 

  */

  /* 
    animation: name duration timing-function delay iteration-count direction;

    animation-name	规定需要绑定到选择器的 keyframe 名称。。
    animation-duration	规定完成动画所花费的时间，以秒或毫秒计。
    animation-timing-function	规定动画的速度曲线。
    animation-delay	规定在动画开始之前的延迟。
    animation-iteration-count	规定动画应该播放的次数。
    animation-direction	规定是否应该轮流反向播放动画。
   */

  .footer_btn {
    position: fixed;
    background-color: red;
    text-align: center;
    width: 100%;
    height: 80px;
    line-height: 80px;
    bottom: 0;
    left: 0%;
    z-index: 33;
    color: #ccc;
    font-size: 40px;

  }

  .arrow {
    width: 80px;
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translate(-50%);
    animation: ani_arrow 2s infinite;
    z-index: 33
  }

  @keyframes ani_arrow {
    0% {
      bottom: 100px;
      opacity: 1;
    }

    50% {
      bottom: 120px;
      opacity: 0.5;
    }

    100% {
      bottom: 100px;
      opacity: 1;

    }
  }







  .footer_create {
    position: fixed;
    height: 100px;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;

  }

  .footer_create_left {
    flex: 1;
    display: flex;
    justify-content: space-around;
  }

  .footer_create_left img {
    width: 40px;
    margin: 0 auto;
    display: block;
  }

  .footer_create_right {
    width: 200px;
    text-align: center;
    background-color: red;
    color: #fff;
    height: 100%;
    line-height: 100px;

  }

</style>
