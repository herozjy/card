<template>
  <div class="zjyheader">
    <div class="zjyheader-contianer">
      <div class="zjyheader-left" @click="back()">
        <slot name="left"></slot>
      </div>
      <div class="zjyheader-middle">
        <slot></slot>

      </div>
      <div class="zjyheader-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>



<script>
    export default {
        data(){
            return{
                
            }
        },
        methods:{
            back(){
                this.$router.goBack() 
            }
        }
    }

    
</script>

<style>
  .zjyheader {
    width: 100%;
    height: 80px;
    background-color: #fff;
    position: relative;
  }

  .zjyheader-contianer {
    position: relative;
    height: 100%;
    line-height: 80px;
    padding: 0 20px;
    overflow: hidden;
  }

  .zjyheader-left {
    font-size: 28px;
    float: left;
  }

  .zjyheader-middle {
    font-size: 32px;
    position: absolute;
    left:50%;
    transform: translateX(-50%) 

  }

  .zjyheader-right {
    font-size: 28px;

    float: right;

  }

</style>
