import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import PlanetView from '../views/__PlanetView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/planet/mercury',
    name: 'mercury',
    component: () => import('../views/MercuryView.vue'),
  },
  {
    path: '/planet/venus',
    name: 'venus',
    component: () => import('../views/VenusView.vue'),
  },
  {
    path: '/planet/earth',
    name: 'earth',
    component: () => import('../views/EarthView.vue'),
  },
  {
    path: '/planet/mars',
    name: 'mars',
    component: () => import('../views/MarsView.vue'),
  },
  {
    path: '/planet/jupiter',
    name: 'jupiter',
    component: () => import('../views/JupiterView.vue'),
  },
  {
    path: '/planet/saturn',
    name: 'saturn',
    component: () => import('../views/SaturnView.vue'),
  },
  {
    path: '/planet/uranus',
    name: 'uranus',
    component: () => import('../views/UranusView.vue'),
  },
  {
    path: '/planet/neptune',
    name: 'neptune',
    component: () => import('../views/NeptuneView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
