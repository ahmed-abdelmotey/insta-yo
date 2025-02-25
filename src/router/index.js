import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/search',
},
{
  path: '/search',
  name: 'Home',
  component: Home,
},
{
  path: '/channel/:channelId',
  name: 'Channel',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "channel" */ '../views/Channel.vue'),
},
{
  path: '/video/:videoId',
  name: 'Details',
  component: () => import(/* webpackChunkName: "details" */ '../views/Detail.vue'),
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
