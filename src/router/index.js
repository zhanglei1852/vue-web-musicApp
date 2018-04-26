import Router from 'vue-router'
import Vue from 'vue'
/*
import main from '@/components/pages/main'
import singer from '@/components/pages/singer'
import rank from '@/components/pages/rank'
import search from '@/components/pages/search'
import singerDetail from '@/components/pages/singerDetail'
*/
// 路由懒加载
const main = (resolve) => {
  import('@/components/pages/main').then((module) => {
    resolve(module)
  })
} 

const singer = (resolve) => {
  import('@/components/pages/singer').then((module) => {
    resolve(module)
  })
}

const rank = (resolve) => {
  import('@/components/pages/rank').then((module) => {
    resolve(module)
  })
}

const search = (resolve) => {
  import('@/components/pages/search').then((module) => {
    resolve(module)
  })
}

const singerDetail = (resolve) => {
  import('@/components/pages/singerDetail').then((module) => {
    resolve(module)
  })
}

const mainSongList = (resolve) => {
  import('@/components/pages/mainSongList').then((module) => {
    resolve(module)
  })
}

const rankSongList = (resolve) => {
  import ('@/components/pages/rankSongList').then((module) => {
    resolve(module)
  })
}
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: main,
      children: [
        {
          path: ':id',
          component: mainSongList
        }
      ]
    },
    {
      path: '/singer',
      component: singer,
      children: [
        {
          path: ':id',
          component: singerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: rank,
      children: [
        { 
          path: ':id',
          component: rankSongList
        }
      ]
    },
    {
      path: '/search',
      component: search
    }
  ]
})