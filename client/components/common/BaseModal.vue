<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="wrapper">
        <div class="container flex-v align-center justify-space-between px-l py-xl">
          <slot name="header"></slot>
          <div class="content">
            <slot></slot>
          </div>
          <slot name="controls"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'base-modal'
};
</script>

<style lang="scss" scoped>
.modal-mask {
  display: table;
  position: fixed;
  z-index: var(--z-modal);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;

  .wrapper {
    display: table-cell;
    vertical-align: middle;

    .container {
      width: 100%;
      max-width: var(--measure-l);
      min-height: var(--measure-s);
      margin: 0 auto;
      background-color: var(--color-white);
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;

      .content {
        width: 80%;
      }
    }
  }
}
</style>
