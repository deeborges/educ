<template>
  <button 
  :type=type
    class="button__submit"
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
    },
  }
}
</script>

<style>
.button__submit {
  background-color: #6f6f6f;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  height: fit-content;
  padding: 10px 20px;
  width: auto;
}
</style>