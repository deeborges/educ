<template>
  <form class="form__profile--personal__data">
    <p class="desc__params">Dados pessoais</p>
    <div class="grid__02">
      <label for="nome_completo">Nome completo:</label>
      <input type="text" name="nome_completo" />
    </div>
    <div class="grid__04">
      <label for="cpf">CPF:</label>
      <TheMask :mask="'###.###.###-##'" name="cpf" />
      <label for="rg">RG:</label>
      <TheMask :mask="'############-#'" name="rg" />
    </div>
    <div class="grid__06">
      <label for="data_nascimento">Data de nascimento:</label>
      <TheMask type="tel" :mask="'##/##/####'" name="data_nascimento" />
      <label for="naturalidade">Naturalidade:</label>
      <input type="text" name="naturalidade" />
      <label for="estados_dados_pessoais">Estado:</label>
      <select name="estados_dados_pessoais">
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espírito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
      </select>
    </div>
  </form>
</template>

<script>
import { TheMask } from "vue-the-mask";

export default {
  name: 'ProfileFormPersonalData',
  components: {
    TheMask
  }
};
</script>

<style scoped>
@import url('~/assets/dashboard/profile/profile-form-personal-data.css');
</style>