<template>
  <button v-on="$listeners" :class="{ primary, rounded }" class="button py-s px-xl">
    <div class="flex-h justify-center align-center">
      <span v-if="icon" :class="icon" class="icon mr-s"></span>
      <span class="text">{{ text }}</span>
    </div>
  </button>
</template>

<script>
export default {
  name: 'base-button',
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  font-size: 1rem;
  background: none;
  border: none;
  cursor: pointer;

  .icon, .text {
    color: var(--color-grey-light-700);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: var(--color-grey-light-900);
    pointer-events: none;
    cursor: default;
  }
}

.rounded {
  border-radius: 50px;
}

.primary {
  background-color: var(--color-primary);

  &:hover {
    background-color: var(--color-primary-light-100);
  }

  .icon, .text {
    color: var(--color-white);
  }
}
</style>
