import Router from 'vue-router'
import Vue from 'vue'
import main from '@/components/pages/main'
import singer from '@/components/pages/singer'
import rank from '@/components/pages/rank'
import search from '@/components/pages/search'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: main
    },
    {
      path: '/singer',
      component: singer
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '/search',
      component: search
    }
  ]
})