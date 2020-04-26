<template>
  <form>
    <p class="desc__params">Endereço</p>
    <div class="grid__06">
      <label for="telefone_principal">Logradouro</label>
      <TheMask :mask="['(##) ####-####', '(##) #####-####']" name="telefone_principal" />

      <label for="telefone_secundario">Complemento</label>
      <TheMask :mask="['(##) ####-####', '(##) #####-####']" name="telefone_secundario" />

      <label for="numero_casa">nº</label>
      <input type="email" name="numero_casa" />
    </div>

    <div class="grid__06">
      <label for="email">Bairro</label>
      <input type="email" name="email" />
      
      <label for="email">Cidade</label>
      <input type="email" name="email" />
      
      <label for="email">Estado</label>
      <select name="estados_brasil">
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
    <Button class="button" type="submit">ATUALIZAR ENDEREÇO</Button>
  </form>
</template>

<script>
import { TheMask } from "vue-the-mask";

export default {
  components: {
    TheMask
  }
};
</script>

<style scoped>
form {
  background-color: #fdfdfd;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px #d9d9d9;
  display: grid;
  gap: 10px;
  margin: 15px 0;
  padding: 20px;
  position: relative;
}

form label {
  align-content: center;
  display: grid;
  font-size: 1rem;
  position: relative;
}

form input {
  font-size: 1rem;
  height: 30px;
  min-width: 20px;
  position: relative;
  width: auto;
}

form input[name='numero_casa'] {
  width: 50px;
}

form select {
  font-size: 1rem;
  height: auto;
  position: relative;
}

form select option {
  font-size: 1rem;
  position: relative;
}

.grid__02 {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: auto 1fr;
  gap: 10px;
  position: relative;
  width: auto;
}

.grid__04 {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(2, auto 1fr);
  gap: 10px;
  position: relative;
  width: auto;
}

.grid__06 {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(3, auto auto);
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