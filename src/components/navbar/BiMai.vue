<template>
  <div id="card">


    
    <zjyheader>
        <div slot="left">返回</div>
        <div >必买清单TOP榜</div>
        <div slot="right" >分享</div>
    </zjyheader>

  </div>

</template>


<script>
  import zjyheader from "@/components/ZJY-Header/ZJY-Header";


  export default {
    name: "card",
    data() {
      return {
        msg: '我是一个新闻组件',
      }
    },
    methods: {

    },
    mounted() {

    },
    components:{
      zjyheader
    }

  }

</script>

<style scoped>
  .mint-header {
    padding: 30px 20px;
    background-color: #fff;
    color: black
  }

</style>
