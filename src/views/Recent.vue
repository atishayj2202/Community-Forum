<script>
import PostTile from "@/components/PostTile.vue";

export default {
  name: `Recent`,
  data: function() {
return {
    posts: [],
  };
},
  components: {
    PostTile // Register the PostTile component
  }
}
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    <!-- Display each post -->
    <PostTile :post="post" />
  </div>
</template>

<style scoped>

</style>
