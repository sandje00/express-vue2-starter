<template>
  <div>
    <div v-if="message">{{ message }}</div>
    <base-form>
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
import BaseButton from '../shared/BaseButton';
import BaseField from '../shared/BaseField';
import BaseForm from '../shared/BaseForm';

export default {
  name: 'forgot-password',
  data: () => ({
    password: '',
    repeat: '',
    token: '',
    error: '',
    message: ''
  }),
  components: { BaseButton, BaseField, BaseForm }
};
</script>

<style lang="scss" scoped>
.btn {
  align-self: center;
}
</style>
