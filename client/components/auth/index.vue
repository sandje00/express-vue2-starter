<template>
  <div class="main flex-v justify-center align-center">
    <div class="container flex-v justify-center align-center pb-m">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: 100vh;
  background: var(--color-background);

  .container {
    width: 100%;
    max-width: var(--measure-l);
    align-items: stretch;
    min-height: var(--spc-m);
    margin: 0 auto;
    background: var(--color-background-auth-form);
    box-shadow: -4px 0 24px 13px rgba(0,0,0,0.05);
  }
}
</style>
