<template>
  <div id="appbar1">
    <div>
      <router-link to="/"><img src="../assets/logo.png" style="height: 80px" ></router-link>
    </div>
    <div class="bigger">
      <ul>
        <li><router-link to="/">Recent</router-link></li>
        <li><router-link to="/post">Post</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>
    </div>
    <div class="smaller">
      <div class="xyz">
        <a @click="openNav()" style="cursor: grab">☰</a>
      </div>
      <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav('')">X</a>
        <div class="overlay-content">
          <a @click="closeNav('/')">Recent</a>
          <a @click="closeNav('/post')">Post</a>
          <a @click="closeNav('/profile')">Profile</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Mainbar',
  methods: {
    openNav: function () {
      document.getElementById('myNav').style.width = '100%'
    },
    closeNav: function (text) {
      document.getElementById('myNav').style.width = '0'
      this.$router.push(text)
      const x = document.getElementById('abx')
      x.style.visibility = 'hidden'
      x.style.height = '0'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a{
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover{
  background-color: #41B883;
  color: white;
}

li{
  display: inline-block;
}
#appbar1{
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90px;
}
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 15%;
  font-weight: bolder;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}
.xyz{
  background-color: black;
  color: white;
  height: 80px;
  width: 80px;
  font-size: 30px;display: flex;
  justify-content: center;
  align-items: center;
}
.smaller{
  visibility: hidden;
  width: 0;
  display: none;
}
@media only screen and (max-width: 820px) {
  .bigger{
    visibility: hidden;
    width: 0;
    display: none;
  }
  .smaller{
    visibility: visible;
    width : auto;
    display: flex;
  }
}
</style>
