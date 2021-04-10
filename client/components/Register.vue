<template>
  <div>
    <div v-if="successMessage">{{ successMessage }}</div>
    <form
      v-else
      @submit.prevent="handleSubmit(register)">
      <base-field
        v-model="username"
        type="text"
        placeholder="Username" />
      <base-field
        v-model="email"
        type="text"
        placeholder="E-mail" />
      <base-field
        v-model="password"
        type="password"
        placeholder="Password" />
      <base-field
        v-model="password"
        type="password"
        placeholder="Repeat password" />
      <span>{{ error }}</span>
      <base-button type="submit" text="Register" />
    </form>
  </div>
</template>

<script>
import BaseButton from './common/BaseButton';
import BaseField from './common/BaseField';
import pick from 'lodash/pick';
import usersApi from '../api/users';

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
      usersApi
        .register(pick(this, ['username', 'email', 'password']))
        .then(({ data: { message } }) => {
          this.successMessage = message;
        })
        .catch(({ status, data: { error } }) => {
          this.error = status === 400 ? error : 'Something went wrong. Try again.';
        });
    }
  },
  components: { BaseButton, BaseField }
};
</script>
