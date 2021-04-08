<template>
  <div>
    <slot><base-input v-on="$listeners" v-bind="$attrs" /></slot>
  </div>
</template>

<script>
import BaseInput from './BaseInput';

export default {
  name: 'base-field',
  inheritAttrs: false,
  components: { BaseInput }
};
</script>
