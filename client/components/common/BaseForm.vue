<template>
  <validation-observer v-slot="{ handleSubmit }">
    <form
      @submit.prevent="handleSubmit(submit)"
      class="flex-v justify-start align-stretch px-xxl pb-xl">
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
