import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Other from './views/Other'
import usermanage from './views/usermanage'
import ad from './views/ad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/Other',
      name:'Other',
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/Other.vue')
      }
    },
    {
      path: '/usermanage',
      name:'usermanage',
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/usermanage.vue')
      }
    },
    {
      path: '/ad',
      name:'ad',
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/ad.vue')
      }
    }
  ]
})
