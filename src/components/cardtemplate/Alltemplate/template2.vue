<template>
  <div class="item">
    <div class="item_2_1  ">
    </div>
    <img class="item_2_2 " :src="img1">
    <div class="item_2_3">
      <div>Happy</div>
    </div>
    <div class="item_2_4">
      <div>I dreamed I Held you in my arm</div>
      <div>You are my sunshine</div>
    </div>

    <img class="item_2_5" src="../../../assets/flower.png" alt="">
    <img class="item_2_6" src="../../../assets/flower.png" alt="">
    <img class="item_2_7" src="../../../assets/flower.png" alt="">
    <div class="xiugai_1" v-if="isUpLoadImg">
      <aub imgSlider="img1"></aub>
    </div>

  </div>

</template>

<script>
  //引入 vue实例
  import VueEvent from '@/model/VueEvent';
  import Aub from "@/components/Aub"

  export default {
    data() {
      return {
        img1: require("../../../assets/2.png"),

      }
    },
    props:["isUpLoadImg"],
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


  .item_2_1 {
    opacity: 0;
    background-color: #fff;
    box-shadow: 0 0 2px 2px #ccc;
    width: 640px;
    height: 1000px;
    position: absolute;
    left: 50%;
    top: -36%;
    transform: translateX(-50%) rotate(0.5deg);
    animation: ani_item_2_1 2s forwards;
  }

  @keyframes ani_item_2_1 {
    from {
      opacity: 0;
      top: -36%;
    }

    to {
      opacity: 1;
      top: 6%
    }
  }

  .item_2_2 {
    width: 600px;
    height: 800px;
    position: absolute;
    left: 50%;
    top: 7.5%;
    transform: translateX(-50%) rotate(0.5deg);
    animation: ani_item_2_2 2s forwards;
    z-index: 4
  }

  @keyframes ani_item_2_2 {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .item_2_3,
  .item_2_4 {
    width: 100%;
    text-align: center;
    position: absolute;
    z-index: 2;
  }

  .item_2_3 {
    top: 920px;
    font-size: 38px;
    color: tomato;
    font-family: Georgia, 'Times New Roman', Times, serif;
    opacity: 0;
    top: 100px;
    animation: ani_item_2_3 2s forwards 2s;
  }

  @keyframes ani_item_2_3 {
    from {
      opacity: 0;
      top: 820px;
    }

    to {
      opacity: 1;
      top: 920px
    }
  }

  .item_2_4 {
    top: 980px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    opacity: 0;
    animation: ani_item_2_4 2s forwards 3s
  }

  @keyframes ani_item_2_4 {
    from {
      opacity: 0;

    }

    to {
      opacity: 1;

    }
  }

  .item_2_5 {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 5%;
    transform: translateX(-50%);
    animation: ani_item_2_5 2s forwards;
  }

  @keyframes ani_item_2_5 {
    from {
      width: 100px;
      height: 100px;

    }

    to {

      width: 200px;
      height: 200px;
    }
  }

  .item_2_6,
  .item_2_7 {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 916px;
    opacity: 0;
    transform: rotate(0deg);
    animation: ani_item_2_6 4s linear 3.5s infinite
  }

  .item_2_6 {
    left: 240px;

  }

  .item_2_7 {
    left: 465px;
  }

  @keyframes ani_item_2_6 {
    from {
      opacity: 1;

      transform: rotate(0deg)
    }

    to {
      opacity: 1;

      transform: rotate(360deg)
    }
  }
  .xiugai_1 {
    position: absolute;
    z-index: 999999;
    left: 50%;
    top: 30%;
    transform: translate(-50%, 50%);
  }

</style>
