<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app-main'
};
</script>

<style lang="scss">
@import './assets/stylesheets/main.scss';

#app {
  width: 100%;
  height: 100%;
}
</style>
