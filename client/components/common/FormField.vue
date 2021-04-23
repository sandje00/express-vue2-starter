<template>
  <validation-provider
    v-slot="{ errors }"
    :name="name"
    :rules="rules"
    class="mt-l">
    <base-field
      v-model="firstName"
      :error="errors[0]"
      type="text"
      :placeholder="name" />
  </validation-provider>
</template>

<script>
export default {
  name: 'form-field',
  props: {
    name: { type: String, required: true },
    rules: { type: [String, Object], required: true }
  }
};
</script>
