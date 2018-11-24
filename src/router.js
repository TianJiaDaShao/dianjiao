import Vue from 'vue'
import Router from 'vue-router'
import IDcard from './views/IDcard.vue'
import detail from './views/detail.vue'
import evaluate from './views/evaluate.vue'
import evaluateSuccess from './views/evaluateSuccess.vue'
import policy from './views/policy.vue'
import questionnaire from './views/questionnaire.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/index/:id',
    name: 'IDcard',
    component: IDcard
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: detail
  }, {
    path: '/evaluate/:id/:type',
    name: 'evaluate',
    component: evaluate
  }, {
    path: '/evaluateSuccess/:status', //0以评价1评价成功
    name: 'evaluateSuccess',
    component: evaluateSuccess
  }, {
    path: '/policy',
    name: 'policy',
    component: policy
  }, {
    path: '/questionnaire/:id/:userId',
    name: 'questionnaire',
    component: questionnaire
  }]
})
