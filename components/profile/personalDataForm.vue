<template>
  <form class="gce__profile--dados-pessoais">
    <fieldset>
      <legend>Dados pessoais</legend>
      <div class="gce__profile--campos">
        <div class="gce__profile--nome-completo">
          <label for="nomeCompleto">Nome completo</label>
          <input type="text" name="nomeCompleto" />
        </div>
        <div class="gce__profile--cpf-rg">
          <label for="cpf">CPF:</label>
          <input type="text" name="cpf" />

          <label for="rg">RG:</label>
          <input type="text" name="rg" />
        </div>
        <div>
          <label for="dataNascimento">Data de nascimento</label>
          <input type="text" name="dataNascimento" />

          <label for="naturalidade">Naturalidade</label>
          <input type="text" name="naturalidade" />
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {};
</script>

<style>
.gce__profile--dados-pessoais {
  border-radius: 5px;
  background-color: #fdfdfd;
  box-shadow: 0 0 5px 1px #d9d9d9;
  padding: 10px;
}

.gce__profile--dados-pessoais fieldset {
  padding: 10px;
}

.gce__profile--dados-pessoais legend {
  padding: 0 10px;
}

.gce__profile--campos {
  display: grid;
}
.gce__profile--nome-completo {
  display: grid;
  grid-template-columns: 1fr 6fr;
}

.gce__profile--nome-completo input {
  width: 100%;
}

.gce__profile--cpf-rg {
  display: grid;
  grid-template-columns: repeat(4, auto 1fr)
}
</style>