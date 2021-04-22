import { ValidationObserver, ValidationProvider } from 'vee-validate';
import App from './App.vue';
import { extendRules } from './utils/validation';
import router from './router';
import Vue from 'vue';

Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);

extendRules();

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
