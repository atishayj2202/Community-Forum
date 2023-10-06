<script>
import PostTile from '@/components/PostTile.vue'

export default {
  name: `Recent`,
  data: function () {
    return {
      posts: [
        { id: 10039, title: 'apple', author: 'atishay Jain', votes: 99, body: 'I am Iron man' },

        { id: 10039, title: 'apple', body: 'I am Iron man' }
      ]
    }
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

<style scoped></style>
