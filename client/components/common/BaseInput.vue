<template>
  <input
    v-on="listeners"
    @input="emit('input', $event.target.value)"
    @change="emit('change', $event.target.value)"
    :value="value"
    class="input">
</template>

<script>
export default {
  name: 'base-input',
  props: {
    value: { type: String, default: '' }
  },
  computed: {
    listeners() {
      const { input, change, ...listeners } = this.$listeners;
      return listeners;
    }
  }
};
</script>

<style>

</style>
