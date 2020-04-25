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
  background-color: #9d9d9d;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  position: absolute;
}
</style>