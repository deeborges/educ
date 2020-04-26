<template>
  <form>
    <p class="desc__params">Informações de contato</p>
    <div class="grid__04">
      <label for="telefonePrincipal">Telefone 01:</label>
      <TheMask :mask="['(##) ####-####', '(##) #####-####']" name="telefonePrincipal" />
      <label for="telefoneSecundario">Telefone 02:</label>
      <TheMask :mask="['(##) ####-####', '(##) #####-####']" name="telefoneSecundario" />
    </div>
    <div class="grid__02">
      <label for="email">E-mail:</label>
      <input type="email" name="email" />
    </div>
    <Button class="button" type="submit">ATUALIZAR INFORMAÇÕES</Button>
  </form>
</template>

<script>
import { TheMask } from "vue-the-mask";
import Button from "../button";

export default {
  components: {
    TheMask,
    Button
  }
};
</script>

<style>
form {
  background-color: #fdfdfd;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px #d9d9d9;
  display: grid;
  gap: 10px;
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
  position: relative;
  width: auto;
  min-width: 20px;
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
  grid-template-columns: repeat(3, auto 1fr);
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