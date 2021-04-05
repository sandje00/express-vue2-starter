<template>
  <div id="app">
    <router-link to="/about">About</router-link>
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world :msg="message" />
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import usersApi from './api/users';

export default {
  name: 'app-main',
  data: () => ({ message: '' }),
  created() {
    usersApi
      .helloWorld()
      .then(({ data }) => { this.message = data; });
  },
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
