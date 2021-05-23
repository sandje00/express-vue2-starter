import Auth from './components/auth';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Verify from './components/auth/Verify';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/auth',
    component: Auth,
    children: [
      { path: 'register', name: 'register', component: Register },
      { path: 'login', name: 'login', component: Login },
      { path: 'verify/:token', component: Verify, props: true }
    ]
  }
];

export default new VueRouter({ mode: 'history', routes });
