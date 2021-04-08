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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
