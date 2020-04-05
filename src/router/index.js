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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
