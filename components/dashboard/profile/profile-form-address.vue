<template>
  <form class="form__profile--address">
    <p class="desc__params">Endereço: </p>
    <div class="grid__06">
      <label for="logradouro">Logradouro: </label>
      <input type="text" name="logradouro" />
      <label for="complemento">Complemento: </label>
      <input type="text" name="complemento" />
      <label for="numero_casa">nº: </label>
      <input type="text" name="numero_casa" />
    </div>

    <div class="grid__06">
      <label for="bairro">Bairro: </label>
      <input type="text" name="bairro" />    
      <label for="cidade">Cidade: </label>
      <input type="text" name="cidade" />
      <label for="estados_endereco">Estado: </label>
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
.form__profile--address {
  background-color: #fdfdfd;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px #d9d9d9;
  display: grid;
  gap: 10px;
  height: fit-content;
  margin: 15px 0;
  padding: 20px;
  position: relative;
  width: auto;
}

.form__profile--address label {
  align-content: center;
  display: grid;
  font-size: 1rem;
  position: relative;
}

.form__profile--address input {
  font-size: 1rem;
  height: 42px;
  min-width: 20px;
  position: relative;
  width: auto;
}

.form__profile--address input[name='numero_casa'] {
  width: 50px;
}

.form__profile--address select {
  font-size: 1rem;
  height: auto;
  position: relative;
}

.form__profile--address select option {
  font-size: 1rem;
  position: relative;
}

.grid__06 {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(3, auto  auto);
  gap: 10px;
  position: relative;
  width: auto;
}

.desc__params {
  color: #797979;
  font-size: 1.2rem;
  position: relative;
}

.button {
  display: grid;
  position: relative;
}
</style>