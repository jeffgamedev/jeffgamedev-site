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
          <b-col><b-card><b-button @click="setBoxfort">Boxfort</b-button></b-card></b-col>
      </b-row>
      <br>
      <b-row>
          <b-col><b-card><b-button @click="setPong"> Tennis Pong</b-button></b-card></b-col>
          <b-col><b-card><b-button @click="setCardBattle">Card Battle</b-button></b-card></b-col>
          <b-col><b-card><b-button @click="setDemo">Demo Project</b-button></b-card></b-col>
      </b-row>
      <br>
          <iframe v-if="game=='onion'" src="http://onion.jeffgamedev.com.s3-website-us-east-1.amazonaws.com/" width="640px" height="640px" allow="fullscreen" frameborder="0"></iframe>
          <iframe v-else-if="game=='pong'" src="http://pong.jeffgamedev.com.s3-website-us-east-1.amazonaws.com/" width="1024px" height="720px" allow="fullscreen" frameborder="0"></iframe>
          <iframe v-else-if="game=='boxfort'" src="http://boxfort.jeffgamedev.com.s3-website.us-east-2.amazonaws.com/" width="1024px" height="600px" allow="fullscreen" frameborder="0"></iframe>
          <iframe v-else-if="game=='weasel'" src="http://starweasel.s3-website-us-east-1.amazonaws.com/" width="320px" height="640px" allow="fullscreen" frameborder="0"></iframe>
          <iframe v-else-if="game=='demo'" src="http://demo.jeffgamedev.com.s3-website-us-east-1.amazonaws.com/" width="1024px" height="720px" allow="fullscreen" frameborder="0"></iframe>
          <iframe v-else-if="game=='cardbattle'" src="http://cardbattle.jeffgamedev.com.s3-website-us-east-1.amazonaws.com/" width="1024px" height="720px" allow="fullscreen" frameborder="0"></iframe>
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
