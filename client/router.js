import Auth from './components/auth';
import ForgotPassword from './components/auth/ForgotPassword';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ResetPassword from './components/auth/ResetPassword';
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
      { path: 'verify/:token', component: Verify, props: true },
      { path: 'forgotPassword', name: 'forgotPassword', component: ForgotPassword },
      { path: 'resetPassword/:token', component: ResetPassword, props: true }
    ]
  }
];

export default new VueRouter({ mode: 'history', routes });
