import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/dist/css/swiper.min.css';
import 'reset-css';
import 'lib-flexible';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
