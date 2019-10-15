<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>稿件发出48小时

      覆盖超过170000000人次

      已有10564157位

      奋斗在脱贫一线的“战士”收到了祝福

      他们中间有扶贫干部、支教老师、

      医生、媒体记者、致富带头人……

      我们的记者抵达前方

      随机采访了几位</h2>
    <h4>稿件发出48小时

      覆盖超过170000000人次

      已有10564157位

      奋斗在脱贫一线的“战士”收到了祝福

      他们中间有扶贫干部、支教老师、

      医生、媒体记者、致富带头人……

      我们的记者抵达前方

      随机采访了几位</h4>
    <div>
      稿件发出48小时

      覆盖超过170000000人次

      已有10564157位

      奋斗在脱贫一线的“战士”收到了祝福

      他们中间有扶贫干部、支教老师、

      医生、媒体记者、致富带头人……

      我们的记者抵达前方

      随机采访了几位
    </div>
    <div id="box">
    </div>
    <router-link to="/home">home</router-link>
    <router-link to="/news">news</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-indent: 2em;
  text-align: left;
}
h1{
text-align: center;
  text-indent: 0;
}
#box{
  width: 300px;
  height: 500px;
  background-color: red
}

</style>
