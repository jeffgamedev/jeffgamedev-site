<template>
  <div id="header" class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/arcade">Arcade</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/resume">Resume</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mansalva&display=swap');
</style>
<style>
.nav {
    background-color: #333;
    overflow: hidden;
}
.nav a {
    float: left;
    color: #f2f2f2f2;
    padding: 8px 24px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
    font-family: 'Mansalva', cursive;
}
.nav a:hover {
    background: #ddd;
    color: #333
}
</style>
