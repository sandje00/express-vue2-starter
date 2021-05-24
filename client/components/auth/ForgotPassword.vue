<template>
  <div>
    <div v-if="message">{{ message }}</div>
    <base-form v-else @submit="send">
      <base-field
        v-model.trim="email"
        name="E-mail"
        :rules="{ required: true, email: true }"
        type="text"
        placeholder="E-mail" />
      <span class="msg mt-m">{{ error }}</span>
      <base-button
        type="submit"
        text="Send password reset e-mail"
        class="btn mt-m"
        primary
        rounded />
    </base-form>
  </div>
</template>

<script>
import api from '../../api/auth';
import BaseButton from '../shared/BaseButton';
import BaseField from '../shared/BaseField';
import BaseForm from '../shared/BaseForm';

export default {
  name: 'forgot-password',
  data: () => ({
    email: '',
    message: '',
    error: ''
  }),
  methods: {
    send() {
      api.forgotPassword(this.email)
        .then(({ data: { message } }) => {
          this.message = message;
        })
        .catch(({ data: { error } }) => {
          this.error = error;
        });
    }
  },
  components: { BaseButton, BaseField, BaseForm }
};
</script>

<style lang="scss" scoped>
.btn {
  align-self: center;
}

.msg {
  max-width: var(--measure-m);
  text-align: center;
  align-self: center;
}
</style>
