<template>
  <div id="app">
    <Header/>
    <br>
    <img ref="face" @click="clickface" class="jeffimg" alt="Jeffgamdev" src="./assets/jeffcirc.png">
    <br>
    <img class="jefflogo" alt="Jeffgamdev Logo" src="./assets/jeffgamedevlogo02.png">
    <Welcome msg="Game Developer & Software Engineer"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Welcome from './components/Welcome.vue'

export default {
  name: 'App',
  components: {
    Header,
    Welcome
  },
  methods: {
      clickface: function(evt) {
          console.log(evt);
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
    padding: 0;
    margin: 0;
    background: #eeebeb;
}
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
</style>
