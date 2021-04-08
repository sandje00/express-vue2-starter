import Register from './components/Register';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/register', component: Register }
];

export default new VueRouter({ mode: 'history', routes });
