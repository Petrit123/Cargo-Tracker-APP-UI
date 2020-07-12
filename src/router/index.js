import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HelloWorld from '../components/HelloWorld'
import ADI from '../components/ADI'

const routes = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Administration Interface',
      name: 'ADI',
      component: ADI

    }
  ];

export default new VueRouter({routes});