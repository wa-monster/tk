// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex  from 'vuex'

Vue.config.productionTip = false;
Vue.use(Vuex);


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'



const store = new Vuex.Store({
  state:{
    isLogin:false
  },
  mutations:{
    changeLoginState (state){
      state.isLogin = !state.isLogin;
    }
  }
});

//引入字体
router.beforeEach(function (to, from ,next){
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next();
});

Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
