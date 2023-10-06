<script>
export default {
  name: "PostTile",
  props: {
    post: Object // Prop to receive post data
  }
}
</script>

<template>
  <div class="post-tile">
    <router-link :to="'/post/' + post.id">
      <!-- Redirect to another page on click -->
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </router-link>
  </div>
</template>

<style scoped>
.post-tile {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  cursor: pointer; /* Add cursor pointer for hover effect */
}

.post-tile:hover {
  background-color: #f0f0f0; /* Add hover effect with background color change */
}
</style>
