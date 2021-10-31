<template>
  <div id="header" class="nav">
      <a href="#">Home</a>
      <a href="#">Arcade</a>
      <a href="#">Resume</a>
      <a href="#">Contact</a>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
      clickface: function(evt) {
          console.log(evt);
      }
  }
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
