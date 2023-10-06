<template>
  <div id="appbar1">
    <div><a href="https://www.snapchat.com/add/atishayj2202" target="_blank" rel="noopener"><img src="../assets/snapchat.png" height="100%"></a></div>
    <div><a href="https://www.facebook.com/atishayj2202/" target="_blank" rel="noopener"><img src="../assets/facebook.png" height="100%"></a></div>
    <div><a href="https://www.github.com/atishayj2202/" target="_blank" rel="noopener"><img src="../assets/github.png" height="100%"></a></div>
    <div><a href="https://www.instagram.com/atishayj2202/" target="_blank" rel="noopener"><img src="../assets/instagram.png" height="100%"></a></div>
    <div><a href="https://open.spotify.com/playlist/6SqfIgBcbHrGnkK32nZSKQ?si=0t2KubNkS6WpO8KTln0MYg" target="_blank" rel="noopener"><img src="../assets/spotify.png" height="100%"></a></div>
  </div>
</template>

<script>
export default {
  name: 'AppBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#appbar1 img {
  filter: invert(100%) brightness(150%);
  margin: 0px;
}
#appbar1 img:hover {
  filter: invert(100%) brightness(150%);
  transform: scale(1.5);
}
#appbar1 div {
  margin: 0px;
  padding: 0px;
  height: 90%;
}
#appbar1{
  width: 100%;
  height:3vh;
  padding-top: 8px;
  display: flex;
  justify-content: space-evenly;
  background-color: #ffffff1a;
  min-height: 20px;
}
</style>
