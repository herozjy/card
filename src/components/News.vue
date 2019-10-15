<template>
  <div id="news">
    我是新闻组件
    <br>
    <button @click="emitHome()">给Home组件广播数据</button>
    <br>
    我是新闻组件 --{{this.$store.state.count}}
    <br>
    <button @click="incCount()">增加数量</button>
  </div>

</template>


<script>
  //引入 vue实例
  import VueEvent from '../model/VueEvent.js';
  //1. 引入store
  import store from '../vuex/store.js';

  export default {
    data() {
      return {
        msg: '我是一个新闻组件'
      }
    },
    store,
    methods: {
      emitHome() {
        //广播
        VueEvent.$emit('to-home', this.msg)
      },
      incCount() {
        this.$store.commit('incCount');
      }
    },
    mounted() {
      VueEvent.$on('to-news', function (data) {
        console.log(data);
      })
    }

  }

</script>

<style  scoped>

</style>
