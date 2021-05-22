<template>
  <input
    v-on="listeners"
    @input="$emit('input', $event.target.value)"
    @change="$emit('change', $event.target.value)"
    :checked="value"
    type="checkbox"
    class="input">
</template>

<script>
export default {
  name: 'base-checkbox',
  props: {
    value: { type: Boolean, default: false }
  },
  computed: {
    listeners() {
      const { input, change, ...listeners } = this.$listeners;
      return listeners;
    }
  }
};
</script>
