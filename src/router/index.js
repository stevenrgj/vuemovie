import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = resolve => require(['@/views/index.vue'], resolve)
const category = resolve => require(['@/components/category.vue'], resolve)
const Search = resolve => require(['@/components/Search.vue'], resolve)
const person = resolve => require(['@/components/person.vue'], resolve)
const login = resolve => require(['@/components/login.vue'], resolve)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首頁',
      component: index
    },
    {
      path: '/category',
      name: '頻道',
      component: category
    },
    {
      path: '/person',
      name: '我的',
      component: person
    },
    {
      path: '/search',
      name: '查询',
      component: Search
    },
    {
      path: '/login',
      name: '登陆',
      component: login
    }
  ]
})
