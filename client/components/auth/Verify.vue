<template>
  <div class="flex-v justify-center align-center mb-m px-s">
    <h3 class="mt-l">Click on the button below to verify your email account</h3>
    <span v-if="message" class="msg mt-xl">{{ message }}</span>
    <base-button
      v-else
      @click="verifyEmail"
      class="mt-xl"
      text="Verify your account"
      primary
      rounded />
  </div>
</template>

<script>
import api from '../../api/auth';
import BaseButton from '../shared/BaseButton';

export default {
  name: 'verify-email',
  props: {
    token: { type: String, required: true }
  },
  data: () => ({ message: '' }),
  methods: {
    verifyEmail() {
      api.verify(this.token)
        .then(({ data: { message } }) => {
          this.message = message;
        })
        .catch(({ data: { error } }) => {
          this.message = error;
        });
    }
  },
  components: { BaseButton }
};
</script>

<style lang="scss" scoped>
.msg {
  font-size: 1.5rem;
}
</style>
