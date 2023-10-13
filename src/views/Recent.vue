<script>
import PostTile from '@/components/PostTile.vue'
import axios from 'axios';


export default {
  name: `Recent`,
  data: function () {
    return {
      posts: [
      ]
    }
  },
  components: {
    PostTile // Register the PostTile component
  },
  mounted() {
    // Make a POST request using Axios
    axios
        .post('https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/post/get_all_post/')
        .then(response => {
          try {
            const parsedData = JSON.parse(response.data);
            this.posts = parsedData.Data
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  },

}
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    <!-- Display each post -->
    <PostTile :post="post" />
  </div>
</template>

<style scoped></style>
