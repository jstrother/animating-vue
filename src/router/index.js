import Vue from 'vue';
import VueRouter from 'vue-router';
import Modal from '../views/Modal.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Modal',
    component: Modal,
  },
  {
    path: '/list',
    name: 'List',
    // route level code-splitting
    // this generates a separate chunk (list.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "list" */ '@/views/List.vue'),
  },
  {
    path: '/drawer',
    name: 'Drawer',
    // route level code-splitting
    // this generates a separate chunk (drawer.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "drawer" */ '@/views/Drawer.vue'),
  },
  {
    path: '/cards',
    name: 'Cards',
    // route level code-splitting
    // this generates a separate chunk (cards.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cards" */ '@/views/Cards.vue'),
  },
  {
    path: '/simple',
    name: 'Simple',
    // route level code-splitting
    // this generates a separate chunk (simple.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "simple" */ '@/views/Simple.vue'),
  },
  {
    path: '/stagger',
    name: 'Stagger',
    // route level code-splitting
    // this generates a separate chunk (stagger.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "stagger" */ '@/views/Stagger.vue'),
  },
  {
    path: '/state',
    name: 'State',
    // route level code-splitting
    // this generates a separate chunk (state.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "state" */ '@/views/State.vue'),
  },
  {
    path: '/timeline',
    name: 'Timeline',
    // route level code-splitting
    // this generates a separate chunk (timeline.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "timeline" */ '@/views/Timeline.vue'),
  },
  {
    path: '/master',
    name: 'Master',
    // route level code-splitting
    // this generates a separate chunk (master.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "master" */ '@/views/Master.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
