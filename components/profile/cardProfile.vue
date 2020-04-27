<template>
  <div class="e">
    <div class="avatar"> Deyvison </div>
    <ButtonUpload type="submit">Atualizar imagem</ButtonUpload>
  </div>
</template>

<script>
import ButtonUpload from "../button-upload";

export default {
  components: {
    ButtonUpload
  }
};
</script>

<style>
.e {
  display: grid;
  grid-template-columns: 1fr;
  height: auto;
  padding: 10px 20px;
  margin: 10px 0;
}
</style>