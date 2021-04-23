<template>
  <div>
    <div v-if="successMessage">{{ successMessage }}</div>
    <!-- eslint-disable-next-line vue/valid-v-on -->
    <base-form v-else @submit="register">
      <form-field
        v-model.trim="username"
        name="Username"
        :rules="{ required: true }"
        type="text" />
      <form-field
        v-model.trim="email"
        name="E-mail"
        :rules="{ required: true, email: true }"
        type="text" />
      <form-field
        v-model="password"
        name="Password"
        :rules="{ required: true, min: { length: 8 } }"
        type="password" />
      <form-field
        v-model="repeat"
        name="Repeat password"
        :rules="{ required: true, confirmation: { target: '@password' } }"
        type="password" />
      <span>{{ error }}</span>
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
import BaseButton from './common/BaseButton';
import BaseForm from './common/BaseForm';
import FormField from './common/FormField';
import pick from 'lodash/pick';
// import usersApi from '../api/users';

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
      console.log(pick(this, ['username', 'email', 'password']));
      /* usersApi
        .register(pick(this, ['username', 'email', 'password']))
        .then(({ data: { message } }) => {
          this.successMessage = message;
        })
        .catch(({ status, data: { error } }) => {
          this.error = status === 400 ? error : 'Something went wrong. Try again.';
        }); */
    }
  },
  components: { BaseButton, BaseForm, FormField }
};
</script>
