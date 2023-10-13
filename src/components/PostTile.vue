<script>
export default {
  name: 'PostTile',
  props: {
    post: Object // Prop to receive post data
  },
  computed: {
    limit_body () {
      if (this.post.body.length >= 200){
        return (this.post.body.slice(0, 200) + "...")
      }
      else {
        return (this.post.body)
      }
    }
  }
}
</script>

<template>
  <div class="post-tile">
    <router-link :to="'/post/' + post.id">
      <h2>{{ post.title }}</h2>
      <h4>By {{ post.author_name }}</h4>
      <p>{{ limit_body }}</p>
      <div id="Bar">
        <div>&#x1F44D; {{ post.likes }}</div>
        <div>&#x1F4AC; {{ post.comments }}</div>
        <div>&#x1F44E; {{ post.unlikes }}</div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.post-tile {
  border: 1px solid #ffffff1a;
  padding: 10px 20px;
  margin: 10px 0 0;
  cursor: pointer; /* Add cursor pointer for hover effect */
}
a {
  color: white;
  text-decoration: none;
}
.post-tile:hover {
  background-color: #ffffff1a; /* Add hover effect with background color change */
}
h4 {
  text-align: right;
}
p {
  text-align: left;
}
#Bar {
  width: 100%;
  padding-top: 8px;
  display: flex;
  justify-content: space-evenly;
  font: caption;
  filter: grayscale(100%);
}
</style>
