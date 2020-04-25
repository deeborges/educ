<template>
  <section class="gce__cards">
    <div class="card">
      <h1>title</h1>
      <p>description</p>
    </div>
    <div class="card">
      <h1>title</h1>
      <p>description</p>
    </div>
    <div class="card">
      <h1>title</h1>
      <p>description</p>
    </div>
    <div class="card">
      <h1>title</h1>
      <p>description</p>
    </div>
  </section>  
</template>

<script>
export default {

}
</script>

<style>
.gce__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 20px;
}

.gce__cards > .card {
  border-radius: 5px;
  background-color: #fdfdfd;
  box-shadow: 0 0 5px 1px #d9d9d9;
  padding: 10px;
}

.gce__cards > .card:hover {
  cursor: pointer;
  box-shadow: 0 0 10px 1px #d9d9d9;
}
</style>