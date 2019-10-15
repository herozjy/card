<template>
    <div class="item" >
        <div class="item_4_1">
          <img :src="img4" alt="">
          <div class="xiugai_4" v-if="isUpLoadImg">
            <aub imgSlider="img4"></aub>
          </div>
        </div>
        <div class="item_4_2">
          <img class="item_4_2_1" :src="img5" alt="">
          <img class="item_4_2_2" src="../../../assets/flower_big.png" alt="">
          <div class="xiugai_5" v-if="isUpLoadImg">
            <aub imgSlider="img5"></aub>
          </div>
        </div>
        <img class="item_4_4" src="../../../assets/4_4.png" />
      </div>

</template>

<script>
   import VueEvent from '@/model/VueEvent';
  import Aub from "@/components/Aub"
  export default {
    data() {
      return {
        img4: require("../../../assets/4_1.png"),
        img5: require("../../../assets/4_2.png"),
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
 

  .item_4_1 {
    position: absolute;
    top: -60px;
    width: 580px;
    height: 450px;
    transform: translateX(-50%);
    left: 45%;
    box-shadow: 0 0 2px 2px #ccc;
    animation: ani_item_4_1 2s forwards;
  }

  @keyframes ani_item_4_1 {
    form {
      top: -60px
    }

    to {
      top: 60px;
    }
  }

  .item_4_1 img {
    position: absolute;
    top: -320px;
    width: 540px;
    left: 20px;
    animation: ani_item_4_1_img 3s forwards;
  }

  @keyframes ani_item_4_1_img {
    from {
      top: -320px;
    }

    to {
      top: 20px;

    }
  }

  .item_4_2 {
    position: absolute;
    top: 960px;
    width: 580px;
    height: 450px;
    right: 5%;
    box-shadow: 0 0 2px 2px #ccc;
    animation: ani_item_4_2 2s forwards;
  }

  @keyframes ani_item_4_2 {
    from {
      top: 960px;
    }

    to {
      top: 560px;
    }
  }

  .item_4_2 .item_4_2_1 {
    width: 540px;
    left: 20px;
    top: 150px;

    position: absolute;
    animation: ani_item_4_2_img 3s forwards;
  }

  @keyframes ani_item_4_2_img {
    from {
      top: 150px;
    }

    to {
      top: 20px;

    }
  }

  .item_4_2_2 {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 0;
    bottom: 0;
    transform: translate(40%, 40%);
    animation: ani_item_4_2_2 2s 1s forwards;
    opacity: 0;
  }

  @keyframes ani_item_4_2_2 {
    from {
      opacity: 1;

      width: 40px;
      height: 40px;
    }

    to {
      opacity: 1;
      width: 200px;
      height: 200px;
    }
  }

  .item_4_4 {
    width: 400px;
    position: absolute;
    top: 1040px;
    left: 50%;
    transform: translate(-50%);
    opacity: 0;
    animation: ani_item_4_4 2s 2s forwards;
  }

  @keyframes ani_item_4_4 {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;

    }
  }
  .xiugai_5,.xiugai_4  {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }

</style>
