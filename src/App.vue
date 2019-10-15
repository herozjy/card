<template>
  <div id="app">
      <!-- <router-view ></router-view> -->

    <transition :name="transitionName">
        <router-view class="child-view"></router-view>/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      transitionName: 'slide-left'
    }
  },
    beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    }
}
</script>

<style>
html,body {
  padding: 0;
  margin: 0;
  background-color: #d8d8d8;
}
a{
  text-decoration: none;
  color: black
}
#app{
  font-size: 28px!important;
}
#card .mint-header{
  padding: 60px 20px;

}
#card .mint-button-icon .mintui-back{
  font-size: 32px!important;
}
#card .mint-header-title{
  font-size: 32px!important;
  font-weight: bold;
}
#card .mint-button-text{
  font-size: 26px!important;
}





.child-view {
  position: absolute;
  width:100%;
  height: 100%;
  transition: all .4s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter{
    opacity: 0;
    -webkit-transform: translate(20px, 0);
    transform: translate(20px, 0);
  } 
  .slide-left-leave-active{
    opacity: 0;
    -webkit-transform: translate(-80px, 0);
    transform: translate(-80px, 0);
  }
  
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(20px, 0);
    transform: translate(20px, 0);
  }

  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-80px, 0);
    transform: translate(-80px, 0);
  }
</style>
