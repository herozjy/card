<template>
  <div class="item">
    <img class="item_1_1  " src="@/assets/1.png">
    <div class="font_ani animated fadeIn ">
      <div class="font_ani_item">Welcome to our wedding</div>
      <div class="font_ani_item">
        <div class="font_ani_name_man">{{userInfo.bridegroomName}}</div>
        <div class="font_ani_name_waman">{{userInfo.brideName}}</div>
        <div class="font_ani_line">
        </div>
      </div>
      <div class="font_ani_item animated fadeIn delay-4s">
        <div class="timeDemo4">{{userInfo.tiemDemo4}}
        </div>
        <div> 农历：五月十八(周日)
        </div>
      </div>
      <div class="font_ani_item ">
        <div class="font_ani_line"></div>

      </div>
      <div class="font_ani_item">
        <div class="font_ani_item_address  animated fadeIn delay-5s"> {{userInfo.adress}} </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        a: "书"
      }
    },
    props:["userInfo"],


  }

</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .item_1_1 {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -30%);
    width: 40%;
    animation: ani_item_1_1 3s forwards;
  }
  .timeDemo4 {
    width: 360px;
    text-align: center;
  }
  @keyframes ani_item_1_1 {
    0% {
      width: 40%;
    }

    100% {
      width: 80%
    }
  }

  .font_ani {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 350px;
    top: 30%;
    animation-duration: 2s;
    animation-delay: 2s;
  }

  .font_ani_item {
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  .font_ani_name_man {
    position: absolute;
    width: 50%;
    text-align: center;
    opacity: 0;
    animation: ani_font_ani_name_man 2s 4s forwards
  }

  @keyframes ani_font_ani_name_man {
    0% {
      left: -80px
    }

    100% {
      left: 0;
      opacity: 1;
    }
  }

  .font_ani_name_waman {
    position: absolute;
    width: 50%;
    text-align: center;
    opacity: 0;
    animation: ani_font_ani_name_waman 2s 4s forwards
  }

  @keyframes ani_font_ani_name_waman {
    0% {
      right: -80px
    }

    100% {
      right: 0;
      opacity: 1;
    }
  }

  .font_ani_item_address {
    width: 300px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .font_ani_line {
    width: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: coral;
    height: 2px;
    bottom: 2px;
    animation: ani_font_ani_line 2s 3s forwards;
  }


  @keyframes ani_font_ani_line {
    0% {
      width: 0
    }

    100% {
      width: 300px;
    }
  }

 
</style>
