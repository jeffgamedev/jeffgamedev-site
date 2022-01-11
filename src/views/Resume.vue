<template>
  <div id="resume">
      <b-container>
      <br>
          Here is some information about my career in game development.
      <br>
          Click the game title to expand the view. <b-icon icon="caret-down"></b-icon>
      <br>
      </b-container>
      <b-container>
      <div class="accordion" role="tablist">
        <b-card class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-0 variant="secondary">Circadian</b-button>
          </b-card-header>
          <b-collapse id="accordion-0" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <!-- <b-card-text>{{ text }}</b-card-text> -->
              <iframe class="vid" src="https://www.youtube.com/embed/X1TtvAKe2p8" title="Circadian Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <b-card-text>
              <br><b>Circadian</b> is currently in development,
              <br>with contributions from <a href="https://twitter.com/iamShaneMesa">Shane Mesa</a> and <a href="https://twitter.com/lumpytouch">Lumpy.</a>
              <br>Visit the <a href="https://circadiangame.com">official website here</a>,
              or visit the <a href="https://store.steampowered.com/app/813080/Circadian/">Steam Page here</a>
              <br>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="secondary">Grave Danger</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <iframe class="vid" src="https://www.youtube.com/embed/qG-anRqbQnI" title="Grave Danger Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <b-card-text><b>Grave Danger</b> is a fun and challenging platform puzzle game inspired by The Lost Vikings.
              <br>The game can be played single player or co-op.
                </b-card-text>
                <b-card-text>I was the writer, director, producer, and programmer on Grave Danger.
                    <br>The game is currently available on Steam, Playstation 4, and Nintendo Switch.<br>
                </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="secondary">Battle Bears</b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <iframe class="vid" src="https://www.youtube.com/embed/rfAyqVJrli4" title="Battle Bears Gold Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <b-card-text>At SkyVu Entertainment, I was a lead client engineer on the <b>Battle Bears</b> mobile series. This was my first professional gig, and helped me grow tremendously as a game developer and engineer.</b-card-text>
              <!-- <b-card-text>{{ text }}</b-card-text> -->
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="secondary">Beast Bound</b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <iframe class="vid" src="https://www.youtube.com/embed/vWkyIGFtlHI" title="Beast Bound Gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <b-card-text><b>Beast Bound</b> is a mobile-friendly RPG inspired by Super Mario RPG. I was the producer and programmer. The game is no longer available, but I am currently working on a re-release.</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-4 variant="secondary">Udder Panic</b-button>
          </b-card-header>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <iframe class="vid" src="https://www.youtube.com/embed/9c1ugAGaoM4" title="Udder Panic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <b-card-text><b>Udder Panic</b> is a high-speed UFO cow abduction game for mobile. I was the producer and programmer, and partnered with Make-a-Wish Nebraska to help promote its release. The game is no longer available, but I am currently working on a re-release.</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-5 variant="secondary">Sovranti</b-button>
          </b-card-header>
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <iframe class="vid" src="https://www.youtube.com/embed/1BaOHG1aeEo" title="Sovranti" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <b-card-text><b>Sovranti</b> is an online board game platform. I helped build some of the network services, internal tools, and Unity client features.<br>I did a lot of really dev-ops-y stuff there, too.</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <br>
      <br>
      <a href="https://drive.google.com/file/d/1noZZt9DATTX9toQUUDWbpXZroe0P3Gg5/view?usp=sharing">View My Resume Here</a>
      </b-container>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  components: {},
  methods: {}
}
</script>

<style scoped>
.vid
{
    width: 90%;
    max-width: 560px;
    aspect-ratio: 16/9;
}
</style>