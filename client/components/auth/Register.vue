<template>
  <div>
    <div v-if="successMessage">{{ successMessage }}</div>
    <base-form v-else @submit="register">
      <base-field
        v-model.trim="username"
        name="Username"
        :rules="{ required: true }"
        type="text"
        placeholder="Username" />
      <base-field
        v-model.trim="email"
        name="E-mail"
        :rules="{ required: true, email: true }"
        type="text"
        placeholder="E-mail" />
      <base-field
        v-model="password"
        name="Password"
        :rules="{ required: true, min: { length: 8 } }"
        type="password"
        placeholder="Password" />
      <base-field
        v-model="repeat"
        name="Repeat password"
        :rules="{ required: true, confirmation: { target: '@Password' } }"
        type="password"
        placeholder="Repeat password" />
      <span class="msg mt-m">{{ error }}</span>
      <base-button
        type="submit"
        text="Register"
        class="register-btn mt-m"
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
import pick from 'lodash/pick';

export default {
  name: 'register-view',
  data: () => ({
    username: '',
    email: '',
    password: '',
    repeat: '',
    successMessage: '',
    error: ''
  }),
  methods: {
    register() {
      api
        .register(pick(this, ['username', 'email', 'password']))
        .then(({ data: { message } }) => {
          this.successMessage = message;
        })
        .catch(({ status, data: { error } }) => {
          this.error = status === 400 ? error : 'Something went wrong. Try again.';
        });
    }
  },
  components: { BaseButton, BaseField, BaseForm }
};
</script>

<style lang="scss" scoped>
.register-btn {
  align-self: center;
}

.msg {
  max-width: var(--measure-m);
  text-align: center;
  align-self: center;
}
</style>
