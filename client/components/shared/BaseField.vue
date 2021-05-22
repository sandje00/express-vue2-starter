<template>
  <validation-provider
    v-slot="{ errors }"
    :name="name"
    :rules="rules"
    class="form-field flex-h pa-s justify-space-between align-center">
    <base-input v-on="$listeners" v-bind="$attrs" class="stretch" />
    <span v-if="icon" :class="icon" class="icon mt-xxs"></span>
    <span class="error-message px-s">{{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
import BaseInput from './BaseInput';
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'form-field',
  props: {
    name: { type: String, required: true },
    rules: { type: [String, Object], required: true },
    icon: { type: String, default: '' }
  },
  components: { BaseInput, ValidationProvider }
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
