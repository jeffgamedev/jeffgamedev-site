<template>
  <div id="home">
    <br>
    <img ref="face" @click="clickface" class="jeffimg" alt="Jeffgamdev" src="../assets/jeffcirc.png">
    <br>
    <img class="jefflogo" alt="Jeffgamdev Logo" src="../assets/jeffgamedevlogo02.png">
        <h1>Game Developer & Software Engineer</h1>
        <p>
          Welcome to my homepage! I'm Jeff Brooks a.k.a. Jeffgamdev.
          <br>
          Here you can find information about my life, career, and hobbies.
        </p>
        <h3>Social</h3>
        <ul>
          <li><a href="https://twitter.com/jeffgamedev" target="_blank" rel="noopener">Twitter</a></li>
          <li><a href="https://instagram.com/jeffgamedev" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="https://github.com/jeffgamedev" target="_blank" rel="noopener">Github</a></li>
          <li><a href="https://www.linkedin.com/in/jeffgamedev/" target="_blank" rel="noopener">LinkedIn</a></li>
        </ul>
        <h3>Affiliates</h3>
        <ul>
          <li><a href="https://breadbros.com/" target="_blank" rel="noopener">Bread Bros</a></li>
          <li><a href="https://verge-rpg.com" target="_blank" rel="noopener">Verge RPG</a></li>
          <li><a href="https://hatchet2k4.itch.io/" target="_blank" rel="noopener">HatchetSoft</a></li>
          <li><a href="http://www.lorestrome.com/" target="_blank" rel="noopener">Lorestrome</a></li>
        </ul>
      </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
      clickface: function(evt) {
          console.log(evt);
      }
  }
}
</script>

<style>
.jeffimg {
    max-width: 15%;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
.jefflogo {
    max-width: 50%;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #cf6c4d;
}
</style>
