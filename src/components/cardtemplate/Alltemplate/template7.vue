<template>
 
    <div class="item" >
        <div class="item_7_1">
          <img class="item_7_1_1" src="../../../assets/flower.png" alt="">
          <img class="item_7_1_2" src="../../../assets/font-5.png" alt="">
          <img class="item_7_1_3" src="../../../assets/flower.png" alt="">
        </div>

        <div class="item_7_2">
          诚邀你参加婚礼
          <div class="item_7_2_left"></div>
          <div class="item_7_2_right"></div>
        </div>

        <div class="item_7_3">
          <img src="../../../assets/7-1.png" alt="">
        </div>

        <div class="item_7_4">
          <div>{{userInfo.tiemDemo4}}</div>
          <div>农历:五月十八日</div>
          <div>{{userInfo.adress}}</div>
          <!-- <div>婚礼记国际酒店4F</div> -->
        </div>

      </div>
</template>

<script>
  import VueEvent from '@/model/VueEvent';
  export default {
    data() {
      return {
        img7: require("../../../assets/6_1.png"),
        img8: require("../../../assets/6_2.png"),
        img9: require("../../../assets/6_3.png"),

      }
    },
    props: ["userInfo"],
  
  }

</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }



  .item_7_1 {
    position: absolute;
    width: 500px;
    height: 100px;
    transform: translate(-50%);
    left: 50%;
    display: flex;
    align-items: center;
    top: 40px;
  }

  .item_7_1 img {
    position: absolute;


  }

  .item_7_1 img:nth-child(1) {
    width: 50px;
    left: 10px;
    transform: rotate(0deg);
    animation: ani_item_7_1 4s linear infinite;
  }

  @keyframes ani_item_7_1 {
    from {
      transform: rotate(0deg)
    }

    to {
      transform: rotate(360deg)
    }
  }

  .item_7_1 img:nth-child(2) {
    width: 350px;
    left: 52%;
    top: -60px;

    transform: translate(-50%);
    opacity: 0;
    animation: ani_item_7_1_1 1s 1s forwards
  }

  @keyframes ani_item_7_1_1 {
    from {
      opacity: 0.5;
      top: -60px;
    }

    to {
      opacity: 1;
      top: 10px;
    }
  }


  .item_7_1 img:nth-child(3) {
    width: 50px;
    right: 10px;
    animation: ani_item_7_1 4s linear infinite;
  }


  .item_7_2 {
    overflow: hidden;

    position: absolute;
    top: 150px;
    left: 50%;
    transform: translate(-50%);
    font-size: 50px;
    color: #f3c22f;
    text-align: center;
  }

  .item_7_3 {
    position: absolute;
    width: 600px;
    height: 440px;
    left: 50%;
    top: 240px;
    transform: translate(-50%);
    box-shadow: 0 0 4px 0 rgb(224, 218, 218);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item_7_3 img {
    width: 560px;

  }

  .item_7_2_left {
    width: 50%;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    box-shadow: 10px 0 2px 0 #e6e2e2a8;
    background-color: #f8f8f6;
    animation: ani_item_7_2_left 2s forwards;

  }

  @keyframes ani_item_7_2_left {
    from {
      left: 0;
    }

    to {
      left: -60%;
    }
  }

  .item_7_2_right {
    width: 50%;
    position: absolute;
    height: 100%;
    right: 0;

    top: 0;
    box-shadow: -10px 0 2px 0 #e6e2e2a8;
    background-color: #f8f8f6;
    animation: ani_item_7_2_right 2s forwards;
  }

  @keyframes ani_item_7_2_right {
    from {
      right: 0;
    }

    to {
      right: -60%;
    }
  }

  .item_7_4 {
    transform: translate(-50%);
    position: absolute;
    left: 50%;
    width: 600px;
    text-align: center;
    top: 750px;

    font-size: 32px;
    opacity: 0;
    animation: ani_item_7_4 1s 2s forwards;
  }

  @keyframes ani_item_7_4 {
    form {
      opacity: 0.5;
      top: 750px;

    }

    to {
      opacity: 1;
      top: 700px;

    }
  }


</style>
