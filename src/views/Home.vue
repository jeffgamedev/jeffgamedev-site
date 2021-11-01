<template>
  <div id="home">
    <br>
    <img ref="face" @click="clickface" class="jeffimg" alt="Jeffgamdev" src="../assets/jeffcirc.png">
    <br>
    <img class="jefflogo" alt="Jeffgamdev Logo" src="../assets/jeffgamedevlogo02.png">
    <Welcome msg="Game Developer & Software Engineer"/>
  </div>
</template>

<script>
import Welcome from '../components/Welcome.vue'

export default {
  name: 'Home',
  components: {
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
