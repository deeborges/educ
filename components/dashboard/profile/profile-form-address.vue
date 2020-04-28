<template>
  <form class="form__profile--address">
    <p class="desc__params">Endereço:</p>
    <div class="grid__06">
      <label for="logradouro">Logradouro:</label>
      <input type="text" name="logradouro" />
      <label for="complemento">Complemento:</label>
      <input type="text" name="complemento" />
      <label for="numero_casa">nº:</label>
      <input type="text" name="numero_casa" />
    </div>

    <div class="grid__06">
      <label for="bairro">Bairro:</label>
      <input type="text" name="bairro" />
      <label for="cidade">Cidade:</label>
      <input type="text" name="cidade" />
      <label for="estados_endereco">Estado:</label>
      <select name="estados_endereco">
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

<style scoped>
@import url('~/assets/dashboard/profile/profile-form-address.css');
</style>