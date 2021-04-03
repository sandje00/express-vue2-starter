import About from './components/About';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/about', component: About }
];

export default new VueRouter({ mode: 'history', routes });
