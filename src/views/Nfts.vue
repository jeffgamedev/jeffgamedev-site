<template>
    <div id="nfts">
        <br>
        <br>
        <b-container>
        <p>
        Here you can find my minted NFT artwork.
        <br>
        Thank you for your support! <b-icon icon="heart"></b-icon>
        </p>
        </b-container>
        <br>
        <b-container>
            <b-card-group deck>
                <b-card v-for="item in items" v-bind:key="item.id" :header="item.name"
                :header-tag="item.id" :footer="item.type" :title="item.name">
                    <img src="../assets/128-190.jpg">
                    <br>
                    <b-card-text>{{ item.description }}</b-card-text>
                    <b-button :href="item.url" variant="primary">View NFT</b-button>
                </b-card>
            </b-card-group>
        </b-container>
      
      <!-- <b-container>
          <b-row v-for="item in items" v-bind:key="item.id">
              {{ item.id}}
          </b-row>
      </b-container> -->
  </div>
</template>

<script>
export default {
  name: 'Nfts',
  components: {},
  methods: {},
  data() {
      return {
          items: [
              {
                  id: "sage",
                  img: "sage",
                  name: "Onion Sage",
                  type: "3D Model",
                  url: "https://www.jeffgamedev.com",
                  description: "The Onion Sage is always willing to offer his wisdom."
              },
              {
                  id: "blacksmith",
                  img: "blacksmith",
                  name: "Blacksmith",
                  type: "3D Model",
                  url: "https://www.jeffgamedev.com",
                  description: "The Blacksmith is a humble craftsman."
              },
          ]
      }
  }
}
</script>
