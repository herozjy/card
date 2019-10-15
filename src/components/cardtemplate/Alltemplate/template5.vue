<template>
    <div class="item">
        <img class='item_5_img_1' src="../../../assets/flower_big.png" alt="">
        <img class='item_5_img_2' src="../../../assets/font-5.png" alt="">
        <img class='item_5_img_3' src="../../../assets/hudie.png" alt="">
        <img class='item_5_img_4' src="../../../assets/hudie.png" alt="">
        <div class="item_5_1">
          <div class="item_5_1_1">我默默的守护，静静等待</div>
          <div class="item_5_1_2">直到你的来临，片刻地和你在一起</div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="item_5_2"></div>
        <img class="item_5_3" :src="img6" alt="">
        <div class="xiugai_4" v-if="isUpLoadImg">
          <aub imgSlider="img6"></aub>
        </div>
      </div>

</template>

<script>
  import VueEvent from '@/model/VueEvent';
  import Aub from "@/components/Aub"
  export default {
    data() {
      return {
        img6: require("../../../assets/5.1.png"),

      }
    },
    props: ["isUpLoadImg"],
    components: {
      aub: Aub
    },
    mounted() {
      // 监听 组件aub的广播
      VueEvent.$on("toaub", (res) => {
        if(this[res.imgSlider]){
          console.log(res)
          this[res.imgSlider] = res.imgdata
        }
       
      })
    }

  }

</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }


  .item_5_img_1 {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-20%, -20%);
    width: 80px;
    animation: ani_item_5_img_1 1.5s linear forwards;
  }

  @keyframes ani_item_5_img_1 {
    form {
      width: 80px;
    }

    to {
      width: 200px;
    }
  }

  .item_5_img_2 {
    width: 360px;
    position: absolute;
    left: 220px;
    top: 100px;
    opacity: 0;
    transform: scale(0.5);
    animation: ani_item_5_img_2 2s 2s forwards;
  }

  @keyframes ani_item_5_img_2 {
    form {
      opacity: 0;
      transform: scale(0.5);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }



  .item_5_img_3 {
    width: 60px;
    position: absolute;
    left: 80px;
    top: 100px;
    transform-origin: 250% 120%;
    transform: rotate(0);
    animation: ani_item_5_img_3 1.5s 1s forwards;
    opacity: 0;
  }

  @keyframes ani_item_5_img_3 {
    from {
      opacity: 1;
      transform: rotate(0);

    }

    to {
      opacity: 1;
      transform: rotate(60deg);
    }
  }

  .item_5_img_4 {
    width: 60px;
    position: absolute;
    right: 60px;
    top: 130px;
    transform: rotate(-120deg);
    transform-origin: left bottom;
    opacity: 0;

    animation: ani_item_5_img_4 1s 1s forwards;
  }

  @keyframes ani_item_5_img_4 {
    from {
      transform: rotate(-120deg);
      opacity: 1;

    }

    to {
      transform: rotate(-80deg);
      opacity: 1;

    }
  }

  .item_5_1 {
    position: absolute;
    top: 220px;
    left: 50%;

    transform: translate(-50%);
    text-align: center;
    width: 600px;
    height: 80px;
  }

  .item_5_1 .left,
  .item_5_1 .right {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: #f8f8f6;
  }

  .item_5_1 .left {
    left: 0;
    box-shadow: 10px 0 0 5px rgba(248, 246, 246, 0.8);
    animation: ani_item_5_1_left 4s 2.5s forwards;
  }

  .item_5_1 .right {
    right: 0;
    box-shadow: -10px 0 0 5px rgba(248, 246, 246, 0.8);
    animation: ani_item_5_1_right 4s 2.5s forwards;

  }

  @keyframes ani_item_5_1_left {
    form {
      left: 0;
    }

    to {
      left: -300px
    }
  }

  @keyframes ani_item_5_1_right {
    form {
      right: 0;
    }

    to {
      right: -300px
    }
  }

  .item_5_2 {
    width: 600px;
    height: 700px;
    box-shadow: 0 0 5px 0px #ccc;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    top: 480px;

    animation: ani_item_5_2 2s 2s forwards;

  }

  @keyframes ani_item_5_2 {
    form {
      top: 480px;
      opacity: 0.5;

    }

    to {
      top: 380px;
      opacity: 1;
    }
  }

  .item_5_3 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 560px;
    height: 660px;
    top: 600px;

    opacity: 0;
    animation: ani_item_5_3 2s 2s forwards;

  }

  @keyframes ani_item_5_3 {
    form {
      top: 600px;
      opacity: 0.5;

    }

    to {
      top: 400px;
      opacity: 1;
    }
  }

.xiugai_4
   {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }


</style>
