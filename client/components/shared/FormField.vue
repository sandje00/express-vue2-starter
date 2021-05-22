<template>
  <validation-provider
    v-slot="{ errors }"
    :name="name"
    :rules="rules"
    class="mt-l">
    <base-field
      v-on="$listeners"
      :error="errors[0]"
      :type="type"
      :placeholder="name" />
  </validation-provider>
</template>

<script>
import BaseField from './BaseField';
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'form-field',
  props: {
    name: { type: String, required: true },
    rules: { type: [String, Object], required: true },
    type: { type: String, required: true }
  },
  components: { BaseField, ValidationProvider }
};
</script>
