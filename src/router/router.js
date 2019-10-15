import Vue from 'vue'
//配置路由
import VueRouter from 'vue-router';

//仿app后退
VueRouter.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(VueRouter);

//1.创建组件
import Card from '../components/Card'
import notfound from '../components/notfound'
import BinKe from '../components/navbar/BinKe'
import BiMai from '../components/navbar/BiMai'
import HLMV from '../components/navbar/HLMV'
import LiWu from '../components/navbar/LiWu'
import CardTemplate from '../components/cardtemplate/CardTemplate'
import TempNews from '../components/cardtemplate/myTemplate/TempNews'
import SaveInfo from '../components/cardtemplate/myTemplate/SaveInfo'
import AddNewPages from '../components/cardtemplate/myTemplate/AddNewPages.vue'

//2.配置路由   注意：名字

const routes = [

  {
    path: "/bimai",
    component: BiMai
  },
  {
    path: "/binke",
    component: BinKe
  },
  {
    path: "/mv",
    component: HLMV
  },
  {
    path: "/liwu",
    component: LiWu
  },
  {
    path: "/cardtemplate",
    component: CardTemplate,
  },
  {
    path: "/tempnews/:tid",
    component: TempNews,
  },
  {
    path: "/saveinfo",
    component: SaveInfo,
  },
  {
    path: "/addnewpages",
    component: AddNewPages,
  },
  
  {
    path: "/",
    component: Card
  },
  {
    path: "*",
    component: notfound,
  },
];


//3.实例化VueRouter  注意：名字

const router = new VueRouter({
  mode: 'history',   /*hash模式改为history时有可能出现npm run dev正常显示，npm run build打包之后没有内容*/ 
  routes, // （缩写）相当于 routes: routes

})


//5 <router-view></router-view> 放在 App.vue


export default router;
