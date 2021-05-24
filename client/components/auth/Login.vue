<template>
  <div>
    <base-form @submit="login">
      <base-field
        v-model.trim="username"
        name="Username"
        :rules="{ required: true }"
        type="text"
        placeholder="Username" />
      <base-field
        v-model.trim="password"
        name="Password"
        :rules="{ required: true }"
        type="password"
        placeholder="Password" />
      <span class="msg mt-m">{{ error }}</span>
      <base-button
        type="submit"
        text="Login"
        class="login-btn mt-m"
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
  name: 'login-view',
  data: () => ({
    username: '',
    password: '',
    error: ''
  }),
  methods: {
    login() {
      api
        .login(pick(this, ['username', 'password']))
        .then(({ data: { token } }) => {
          localStorage.setItem('token', token);
          this.$router.push({ name: 'home' });
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
.login-btn {
  align-self: center;
}

.msg {
  max-width: var(--measure-m);
  text-align: center;
  align-self: center;
}
</style>
