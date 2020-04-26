<template>
  <button :type=type>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      String: true,
      required: true,
    },
  }
}
</script>

<style>
button {
  background-color: #6f6f6f;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  padding: 10px 20px;

}
</style>