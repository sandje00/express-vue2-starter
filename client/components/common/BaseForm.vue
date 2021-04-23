<template>
  <validation-observer v-slot="{ handleSubmit }">
    <form
      @submit.prevent="handleSubmit(submit)">
      <slot></slot>
    </form>
  </validation-observer>
</template>

<script>
export default {
  name: 'base-form',
  methods: {
    submit() {
      this.$emit('submit');
    }
  }
};
</script>
