import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Favorite from '@/components/favorite/favorite'
import Detail from '@/components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/favorite',
      name: 'Favorite',
      component: Favorite
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
