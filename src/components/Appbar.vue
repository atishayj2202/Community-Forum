<template>
  <div id="appbar1">
    <div>
      <a href="https://github.com/atishayj2202/Forum-Backend" target="_blank" rel="noopener"
        ><img src="../assets/github.png" height="100%"
      /></a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/atishaya-jain-5215b7169/" target="_blank" rel="noopener"
        ><img src="../assets/linkedin.png" height="100%"
      /></a>
    </div>
    <div>
      <a href="https://www.github.com/atishayj2202/" target="_blank" rel="noopener"
        ><img src="../assets/github.png" height="100%"
      /></a>
    </div>
    <div>
      <a href="https://www.instagram.com/atishayj2202/" target="_blank" rel="noopener"
        ><img src="../assets/instagram.png" height="100%"
      /></a>
    </div>
    <div>
      <a
        href="https://github.com/atishayj2202/Community-Forum"
        target="_blank"
        rel="noopener"
        ><img src="../assets/github.png" height="100%"
      /></a>
    </div>
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
#appbar1 {
  width: 100%;
  height: 3vh;
  padding-top: 8px;
  display: flex;
  justify-content: space-evenly;
  background-color: #ffffff1a;
  min-height: 20px;
}
</style>
