<template>
  <div>
    <div v-if="message">{{ message }}</div>
    <base-form>
      <base-field
        v-model.trim="email"
        name="E-mail"
        :rules="{ required: true, email: true }"
        type="text"
        placeholder="E-mail" />
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
    email: '',
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
