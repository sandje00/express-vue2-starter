<template>
  <div>
    <div
      :class="[rounded ? 'rounded': 'flat', fieldClass, { error }]"
      class="form-field flex-h pa-s justify-space-between align-center">
      <slot><base-input v-on="$listeners" v-bind="$attrs" class="stretch" /></slot>
      <span v-if="icon" :class="icon" class="icon mt-xxs"></span>
    </div>
    <span class="error-message px-s">{{ error }}</span>
  </div>
</template>

<script>
import BaseInput from './BaseInput';

export default {
  name: 'base-field',
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    fieldClass: {
      type: [String, Object, Array],
      default: ''
    }
  },
  components: { BaseInput }
};
</script>

<style lang="scss" scoped>
.form-field {
  font-size: 0.875rem;
  background: none;

  &.flat {
    border-bottom: 1px solid var(--color-grey-light-700);
  }

  &.error {
    border-color: var(--color-error);
  }

  &.rounded {
    border: 1px solid var(--color-grey-light-700);
    border-radius: 20px;
  }

  .input {
    width: 100%;
    font-size: inherit;
    border: none;

    &::placeholder {
      color: var(--color-grey-light-700);
    }

    &:focus {
      outline: none;
    }
  }

  .icon {
    color: var(--color-grey-light-700);
    cursor: pointer;
  }
}

.error-message {
  color: var(--color-error);
  font-size: 0.6875rem;

  &::after {
    content: " ";
    font-size: 0;
    white-space: pre;
  }
}

.stretch {
  width: 100%;
}
</style>
