<template>
  <div class="item">
            <div class="item_3_1">
              <img class="item_3_1_1" :src="img2" />
              <div class="xiugai_2" v-if="isUpLoadImg">
                <aub imgSlider="img2"></aub>
              </div>
            </div>

          <div class="item_3_2">
            <div>Sweet</div>
            <img class="item_3_1_1" src="@/assets/3_3.png" />

            <div>Day</div>
          </div>

          <div class="item_3_3">
            <img class="item_3_3_1" :src="img3" />
            <div class="xiugai_3">
              <aub imgSlider="img3" v-if="isUpLoadImg"></aub>
            </div>
          </div>
           <img class="item_3_4" src="@/assets/my_flower.png" alt="">

  </div>

</template>

<script>
  //引入 vue实例
  import VueEvent from '@/model/VueEvent';
  import Aub from "@/components/Aub"

  export default {
    data() {
      return {
        img2: require("@/assets/3_1.png"),
        img3: require("@/assets/3_2.png"),

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
  .item_3_1 {
    background-color: #fff;
    /* border: 1px solid #ccc; */
    box-shadow: 0 0 2px 2px #ccc;
    width: 660px;
    height: 440px;
    position: absolute;
    left: -20px;
    top: 50px;
    opacity: 0;
    /* transform: translate(-50%); */
    animation: ani_item_3_1 2s forwards;

  }

  @keyframes ani_item_3_1 {
    from {
      left: -20px;
      opacity: 0.5;

    }

    to {
      left: 45px;
      opacity: 1;

    }
  }

  .item_3_1_1 {
    position: absolute;
    width: 600px;
    top: 20px;
    transform: translateX(-110%);

    animation: ani_item_3_1_1 3s forwards;
  }

  @keyframes ani_item_3_1_1 {
    form {
      transform: translateX(-110%)
    }

    to {
      transform: translateX(6%)
    }
  }



  .item_3_3 {
    background-color: #fff;
    /* border: 1px solid #ccc; */
    box-shadow: 0 0 2px 2px #ccc;
    width: 660px;
    height: 440px;
    position: absolute;
    right: -20px;
    top: 600px;
    opacity: 0;
    /* transform: translate(-50%); */
    animation: ani_item_3_3 2s forwards;

  }

  @keyframes ani_item_3_3 {
    from {
      right: -20px;
      opacity: 0.5;

    }

    to {
      right: 25px;
      opacity: 1;

    }
  }

  .item_3_3_1 {
    position: absolute;
    width: 600px;
    top: 20px;
    transform: translateX(110%);

    animation: ani_item_3_3_1 3s forwards;
  }

  @keyframes ani_item_3_3_1 {
    form {
      transform: translateX(110%)
    }

    to {
      transform: translateX(6%)
    }
  }

  .item_3_2 {
    position: absolute;
    width: 0;
    top: 520px;
    overflow: hidden;
    height: 80px;
    padding-top: 10px;
    animation: ani_item_3_2 4s forwards;
  }

  .item_3_2 img {
    position: relative;
    width: 50px;
    height: 50px;
    left: 380px;
    top: -50px;

  }

  .item_3_2 :nth-child(1) {
    position: relative;
    left: 250px;
    top: -10px;
  }

  .item_3_2 :nth-child(3) {
    position: relative;
    left: 500px;
    top: -105px
  }

  @keyframes ani_item_3_2 {
    from {
      width: 0;
    }

    to {
      width: 600px
    }
  }

  .item_3_4 {
    position: absolute;
    width: 100px;
    top: 980px;
    right: 40px;
    transform: rotate(-100deg);
    transform-origin: left bottom;
    opacity: 0;
    animation: ani_item_3_4 2s 1s forwards;
  }

  @keyframes ani_item_3_4 {
    from {
      opacity: 1;
      transform: rotate(-100deg);

    }

    to {
      opacity: 1;

      transform: rotate(-0);

    }
  }
  .xiugai_2,.xiugai_3{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }
</style>
