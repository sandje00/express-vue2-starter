<template>
  <select
    v-on="listeners"
    @input="$emit('input', $event.target.value)"
    :value="value"
    class="base-select pa-s">
    <option
      v-for="{ label, id } in options"
      :key="label"
      :value="id">
      {{ label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'base-select',
  props: {
    options: { type: Array, required: true },
    value: { type: String, required: true }
  },
  computed: {
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    }
  }
};
</script>

<style lang="scss" scoped>
.base-select {
  width: 100%;
  color: var(--color-grey-dark-300);
  background: var(--color-grey-light-900);
  border: none;

  &:focus {
    outline: none;
  }
}
</style>
