import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import HelloWorld from '../components/HelloWorld'
import AdministrationInterface from '../components/AdministrationInterface'
import BookCargo from '../components/BookCargo'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/Administration Interface',
    name: 'AdministrationInterface',
    component: AdministrationInterface

  },
  {
    path: '/Book Cargo',
    name: 'BookCargo',
    component: BookCargo
  }
];


export default new VueRouter({routes});