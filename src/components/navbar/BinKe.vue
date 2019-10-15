<template>
  <div id="card">

      
    <zjyheader>
        <div slot="left">返回</div>
        <div >宾客回复</div>
        <div slot="right" >筛选</div>
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

  .zjyheader {
    background-color: red;
    color: #fff;
  }

</style>
