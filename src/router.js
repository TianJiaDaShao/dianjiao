import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import mainPage from './views/mainPage.vue'
import filter from '@/childrenComponents/filter.vue'
import meetingRoom from '@/childrenComponents/meetingRoom.vue'
import order from '@/childrenComponents/order.vue'
import helpCenter from '@/childrenComponents/helpCenter.vue'
import free from '@/childrenComponents/free.vue'
import myOrder from '@/childrenComponents/myOrder.vue'
import favorite from '@/childrenComponents/favorite.vue'
import set from '@/childrenComponents/set.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/mainPage',
    component: mainPage,
    children: [{
      path: 'filter',
      component: filter
    }, {
      path: 'meetingRoom',
      component: meetingRoom
    }, {
      path: 'order',
      component: order
    }, {
      path: 'helpCenter',
      component: helpCenter
    }, {
      path: 'free',
      component: free
    }, {
      path: 'myOrder',
      component: myOrder
    }, {
      path: 'favorite',
      component: favorite
    }, {
      path: 'set',
      component: set
    }]
  }]
})
