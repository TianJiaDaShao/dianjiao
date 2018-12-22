import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import mainPage from './views/mainPage.vue'
import filter from '@/childrenComponents/filter.vue'
import meetingRoom from '@/childrenComponents/meetingRoom.vue'

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
    }]
  }]
})
