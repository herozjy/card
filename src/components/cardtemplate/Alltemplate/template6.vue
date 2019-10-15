<template>
    <div class="item" >
        <div class="item_6_1">
          <div class="item_6_2">
            <img class="item_6_5" :src="img8" alt="">
            <div class="xiugai_4" v-if="isUpLoadImg">
              <aub imgSlider="img8"></aub>
            </div>
          </div>
          <div class="item_6_3">
            <img class="item_6_6" :src="img9" alt="">
            <div class="xiugai_4" v-if="isUpLoadImg">
              <aub imgSlider="img9"></aub>
            </div>
          </div>
        </div>
        <img class="item_6_4" :src="img7" alt="">
        <img src="../../../assets/6_4.png" class="itme_6_7" alt="">

        <div class="xiugai_7" v-if="isUpLoadImg">
          <aub imgSlider="img7"></aub>
        </div>

      </div>
</template>

<script>
  import VueEvent from '@/model/VueEvent';
  import Aub from "@/components/Aub"
  export default {
    data() {
      return {
        img7: require("../../../assets/6_1.png"),
        img8: require("../../../assets/6_2.png"),
        img9: require("../../../assets/6_3.png"),

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


  

  .item_6_1 {
    position: absolute;
    box-shadow: 0 0 4px 0px rgb(226, 223, 223);
    width: 600px;
    height: 450px;
    left: 50%;
    top: 50px;
    transform: translate(-50%);
  }




  .item_6_2 {
    position: absolute;
    box-shadow: 0 0 4px 0px rgb(226, 223, 223);
    width: 280px;
    height: 450px;
    left: 0;
    top: 550px;

  }


  .item_6_3 {
    position: absolute;
    box-shadow: 0 0 4px 0px rgb(226, 223, 223);
    width: 280px;
    height: 450px;
    right: 0;
    top: 550px;
  }

  .item_6_4 {
    position: absolute;
    ;
    width: 560px;
    height: 410px;
    left: 50%;
    transform: translate(-50%);
    top: 70px;
    opacity: 0.5;
    animation: ani_item_6_4 2s forwards;
  }

  @keyframes ani_item_6_4 {
    from {
      top: -250px;
      opacity: 0.5;

    }

    to {
      top: 70px;
      opacity: 1;

    }
  }

  .item_6_5 {
    position: absolute;
    left: -100px;
    top: 10px;
    opacity: 0;
    width: 260px;
    height: 430px;
    transform: translate(-50%);
    animation: ani_item_6_5 2s forwards;
  }

  @keyframes ani_item_6_5 {
    from {
      opacity: 0.5;
      left: -100px;
    }

    to {
      opacity: 1;
      left: 50%;
    }
  }

  .item_6_6 {
    position: absolute;
    right: -100px;
    top: 10px;
    opacity: 1;
    width: 260px;
    height: 430px;
    transform: translate(50%);
    animation: ani_item_6_6 2s forwards;
  }

  @keyframes ani_item_6_6 {
    from {
      opacity: 0.5;
      right: -100px;
    }

    to {
      opacity: 1;
      right: 50%;
    }
  }

  .itme_6_7 {
    width: 450px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 530px;
    opacity: 0;
    animation: ani_item_6_7 2s 2s forwards;
  }

  @keyframes ani_item_6_7 {
    from {
      opacity: 0;
    }

    to {
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
  .xiugai_4
   {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }

  .xiugai_7 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 200px;
  }

</style>
