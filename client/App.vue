<template>
  <div id="app">
    <router-link to="/about">About</router-link>
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world msg="Welcome to Your Vue.js App" />
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app-main',
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
