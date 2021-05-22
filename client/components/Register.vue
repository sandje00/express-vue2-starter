<template>
  <div>
    <div v-if="successMessage">{{ successMessage }}</div>
    <base-form v-else @submit="register">
      <form-field
        v-model.trim="username"
        name="Username"
        :rules="{ required: true }"
        type="text"
        placeholder="Username" />
      <form-field
        v-model.trim="email"
        name="E-mail"
        :rules="{ required: true, email: true }"
        type="text"
        placeholder="E-mail" />
      <form-field
        v-model="password"
        name="Password"
        :rules="{ required: true, min: { length: 8 } }"
        type="password"
        placeholder="Password" />
      <form-field
        v-model="repeat"
        name="Repeat password"
        :rules="{ required: true, confirmation: { target: '@Password' } }"
        type="password"
        placeholder="Repeat password" />
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
import BaseButton from './shared/BaseButton';
import BaseForm from './shared/BaseForm';
import FormField from './shared/FormField';
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
