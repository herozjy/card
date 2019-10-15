<template>
  <!-- 所有的内容要被根节点包含起来 -->
  <div id="home">
    我是首页组件
    <br>
    <button @click="emitNews()">给News组件广播数据</button>
    <br>
    我是首页组件 -- {{this.$store.state.count}}
    <br>
    <button @click="incCount()">增加数量+</button>
  </div>

</template>


<script>
  //引入 vue实例
  import VueEvent from '../model/VueEvent.js';

  //1. 引入store   建议store的名字不要变
  import store from '../vuex/store.js';

  export default {
    data() {
      return {
        msg: '我是一个home组件',
        title: '首页111'
      }
    },
    store,
    methods: {
      emitNews() {
        //广播数据
        VueEvent.$emit('to-news', this.msg)
      },
      incCount() {
        //改变vuex store里面的数据
        this.$store.commit('incCount'); /*触发 mutations 改变 state里面的数据*/
      }
    },
    mounted() {
      //监听news 广播的数据
      VueEvent.$on('to-home', function (data) {
        console.log(data);
      })
    }

  }

</script>

<style scoped>
  /* button{
    width: 150px;
    height: 60px;
} */

</style>
