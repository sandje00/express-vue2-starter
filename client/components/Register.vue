<template>
  <div>
    <div v-if="successMessage">{{ successMessage }}</div>
    <form v-else>
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
  components: { BaseButton, BaseField }
};
</script>
