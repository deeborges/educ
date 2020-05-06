<template>
  <div>
    <!-- <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Digite o nome..." />
      <label>Buscar aluno específico</label>
    </div>
    <div class="wrapper">
      <div class="card" v-for="post in filteredList" :key="post.title">
        <a v-bind:href="post.link" target="_blank">
          <img v-bind:src="post.img" />
          <small>posted by: {{ post.author }}</small>
          {{ post.title }}
        </a>
      </div>
    </div> -->
  </div>
</template>

<script>
class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
}

export default {
  name: 'PageDashboardProfileSearch',
  data() {
    return {
      search: "",
      student: [],
    }
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style scoped>
img {
  width: 80px;
  height: 80px;
}

.wrapper {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-auto-rows: auto;
}
</style>

// https://stackoverflow.com/questions/57228970/passing-props-tonuxt-link-or-pass-hidden-data-to-router-but-not-using-paramete