<template>
  <nav class="gce__navbar">
    <slot></slot>
  </nav>
</template>

<style>
.gce__navbar {
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 5px;
  padding: 20px;
  background-color: #fdfdfd;
  box-shadow: 0 0 5px 1px #d9d9d9;
  margin-bottom: 20px;
}
</style>