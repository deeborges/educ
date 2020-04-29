<template>
  <form class="form__profile--contact">
    <p class="desc__params">Informações de contato</p>
    <div class="grid__02">
      <label for="telefone_principal">Telefone 01:</label>
      <TheMask :mask="['(##) ####-####', '(##) #####-####']" name="telefone_principal" />
    </div>
    <div class="grid__02">
      <label for="telefone_secundario">Telefone 02:</label>
      <TheMask :mask="['(##) ####-####', '(##) #####-####']" name="telefone_secundario" />
    </div>
    <div class="grid__02">
      <label for="email">E-mail:</label>
      <input type="email" name="email" />
    </div>
  </form>
</template>

<script>
import { TheMask } from "vue-the-mask";

export default {
  name: 'ProfileFormContact',
  components: {
    TheMask
  }
};
</script>

<style>
@import url('~/assets/dashboard/profile/profile-form-contact.css');
</style>