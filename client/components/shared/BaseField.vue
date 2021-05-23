<template>
  <validation-provider
    v-slot="{ errors }"
    :name="name"
    :rules="rules"
    class="form-field flex-v pa-s justify-start">
    <base-input v-on="$listeners" v-bind="$attrs" class="stretch" :class="{ error: errors[0] }" />
    <span class="error-message pr-s">{{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
import BaseInput from './BaseInput';
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'form-field',
  props: {
    name: { type: String, required: true },
    rules: { type: [String, Object], required: true }
  },
  components: { BaseInput, ValidationProvider }
};
</script>

<style lang="scss" scoped>
.form-field {
  font-size: 0.875rem;
  background: none;

  .input {
    width: 100%;
    font-size: inherit;
    border-bottom: 1px solid var(--color-grey-light-700);

    &.error {
      border-color: var(--color-error);
    }

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
