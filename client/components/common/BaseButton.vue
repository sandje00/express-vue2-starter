<template>
  <button v-on="$listeners">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'base-button',
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>
