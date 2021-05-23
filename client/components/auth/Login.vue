<template>
  <div>
    <base-form>
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
import BaseButton from '../shared/BaseButton';
import BaseField from '../shared/BaseField';
import BaseForm from '../shared/BaseForm';

export default {
  name: 'login-view',
  data: () => ({
    username: '',
    password: '',
    error: ''
  }),
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
}
</style>
