<template>
  <div id="play">
      <b-container>
      <br>Play some of my indie games and demos here! Click the game name to play.
      <br>
      <br>These games require keyboard (and/or) mouse. I recommend playing these on a desktop computer.
      <br>
      <br>
      <br>
      <b-row>
          <b-col><b-card><b-button @click="setOnion">Grand Onion</b-button></b-card></b-col>
          <b-col><b-card><b-button @click="setWeasel"> Star Weasel</b-button></b-card></b-col>
          <b-col><b-card><b-button @click="setThunder">Thunder Chicken</b-button></b-card></b-col>
          <!-- <b-col><b-card><b-button @click="setBoxfort">Boxfort</b-button></b-card></b-col> -->
      </b-row>
      <br>
      <b-row>
          <b-col><b-card><b-button @click="setPong"> Tennis Pong</b-button></b-card></b-col>
          <b-col><b-card><b-button @click="setCardBattle">Card Battle</b-button></b-card></b-col>
          <b-col><b-card><b-button @click="setDemo">Demo Project</b-button></b-card></b-col>
      </b-row>
      <br>
          <iframe v-if="game=='onion'" src="https://jeffgamedev.com/play/onion/onion.html" width="512px" height="480px" allow="fullscreen" frameborder="0"></iframe>
          <iframe v-else-if="game=='pong'" src="https://jeffgamedev.com/play/pong/index.html" width="1024px" height="720px" allow="fullscreen" frameborder="0"></iframe>
          <iframe v-else-if="game=='thunder'" src="https://jeffgamedev.com/play/thunder/index.html" width="1024px" height="720px" allow="fullscreen" frameborder="0"></iframe>
          <!-- <iframe v-else-if="game=='boxfort'" src="https://jeffgamedev.com/play/boxfort/index.html" width="1024px" height="600px" allow="fullscreen" frameborder="0"></iframe> -->
          <iframe v-else-if="game=='weasel'" src="https://jeffgamedev.com/play/weasel/starweasel.html" width="320px" height="640px" allow="fullscreen" frameborder="0"></iframe>
          <iframe v-else-if="game=='demo'" src="https://jeffgamedev.com/play/vb/index.html" width="1024px" height="720px" allow="fullscreen" frameborder="0"></iframe>
          <iframe v-else-if="game=='cardbattle'" src="https://jeffgamedev.com/play/cards/index.html" width="1024px" height="720px" allow="fullscreen" frameborder="0"></iframe>
      </b-container>
      <br>
  </div>
</template>

<script>
export default {
  name: 'Play',
  components: {},
  methods: {
      setOnion: function() {
          this.game = "onion";
      },
      setPong: function() {
          this.game = "pong";
      },
      setThunder: function() {
          this.game = "thunder";
      },
      setBoxfort: function() {
          this.game = "boxfort";
      },
      setWeasel: function() {
          this.game = "weasel";
      },
      setDemo: function() {
          this.game = "demo";
      },
      setCardBattle: function() {
          this.game = "cardbattle";
      }
  },
  data() {
      return {
          game: ""
      }
  }
}
</script>
