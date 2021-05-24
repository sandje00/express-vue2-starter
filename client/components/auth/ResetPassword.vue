<template>
  <div>
    <div v-if="message">{{ message }}</div>
    <base-form v-else @submit="reset">
      <base-field
        v-model="password"
        name="Password"
        :rules="{ required: true, min: { length: 8 } }"
        type="password"
        placeholder="New password" />
      <base-field
        v-model="repeat"
        name="Repeat password"
        :rules="{ required: true, confirmation: { target: '@Password' } }"
        type="password"
        placeholder="Repeat password" />
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
  name: 'reset-password',
  props: {
    token: { type: String, required: true }
  },
  data: () => ({
    password: '',
    repeat: '',
    error: '',
    message: ''
  }),
  methods: {
    reset() {
      const body = {
        token: this.$props.token,
        password: this.password
      };
      api.resetPassword(body)
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
