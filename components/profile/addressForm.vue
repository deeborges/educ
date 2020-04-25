<template>
  <form class="gce__profile--dados-pessoais">
    <fieldset>
      <legend>Endereço</legend>
      <div class="gce__profile--campos">
        <div class="gce__profile--telefones">
          <label for="telefonePrincipal">Telefone 01:</label>
          <TheMask :mask="['(##) ####-####', '(##) #####-####']" name="telefonePrincipal" />

          <label for="telefoneSecundario">Telefone 02:</label>
          <TheMask :mask="['(##) ####-####', '(##) #####-####']" name="telefoneSecundario" />
        </div>
        <div class="gce__profile--email">
          <label for="email">E-mail: </label>
          <input type="email" name="email" />
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script>
import { TheMask } from 'vue-the-mask';

export default {
  components: {
    TheMask
  }
};
</script>

<style>
.gce__profile--dados-pessoais {
  border-radius: 5px;
  background-color: #fdfdfd;
  box-shadow: 0 0 5px 1px #d9d9d9;
  padding: 20px;
}

.gce__profile--dados-pessoais fieldset {
  padding: 20px;
  border-radius: 10px;
}

.gce__profile--dados-pessoais legend {
  padding: 0 10px;
  font-weight: bold;
  text-align: center;
}

.gce__profile--dados-pessoais input {
  font-size: 1rem;
}

.gce__profile--campos {
  display: grid;
  gap: 10px;
}

.gce__profile--nome-completo {
  display: grid;
  grid-template-columns: 1fr 6fr;
}

.gce__profile--cpf-rg {
  display: grid;
  grid-template-columns: repeat(2, auto 1fr);
  gap: 10px;
}

.gce__profile--nasc-nat {
  display: grid;
  grid-template-columns: repeat(2, auto 1fr);
  gap: 10px;
}
</style>