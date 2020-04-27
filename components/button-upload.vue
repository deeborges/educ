<template>
  <button 
  :type=type
    class="button__upload"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>
.button__upload {
  background-color: #edfdfc;
  border: 1px dashed #13ddb6;
  font-size: 1rem;
  font-weight: bold;
  height: fit-content;
  padding: 10px 15px;
}

.button__upload:hover {
  background-color: #13ddb6 ;
  border: 1px dashed#edfdfc;
  color: #ffffff;
  cursor: pointer;
}
</style>