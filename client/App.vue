<template>
  <div id="app">
    <router-link to="/register">Register</router-link>
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world :msg="message" />
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
  name: 'app-main',
  data: () => ({ message: 'Hello World!' }),
  components: {
    HelloWorld
  }
};
</script>
