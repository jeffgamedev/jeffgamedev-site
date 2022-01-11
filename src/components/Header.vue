<template>
  <div id="header" class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/play">Play</router-link>
      <router-link to="/about">About</router-link>
      <!-- <router-link to="/nfts">NFTs</router-link> -->
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
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
</style>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}
.nav a {
    float: left;
    color: #f2f2f2f2;
    padding: 8px 16px;
    text-align: center;
    font-size: 14px;
    text-decoration: none !important;
    margin-right: 4px;
    font-family: 'Source Code Pro', monospace;
}
.nav a:hover {
    background: #ddd;
    color: #333
}
</style>
