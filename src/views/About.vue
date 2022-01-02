<template>
  <div id="about">
      <h1>About Me</h1>
			<h2>Hi there! I'm Jeffgamedev.</h2>
			<br>
            <div class="box">
            I'm a video game developer living in Omaha NE, USA.
            <br>
            <br>I began creating video games and software at the age of 12 using various languages,
            frameworks, and engines like <a href="https://verge-rpg.com">Verge-RPG</a>, <a href="https://pygame.org">Pygame</a>, and <a href="https://liballeg.org/">Allegro</a>.
            <br>
            <br>
			Some big inspirations of mine are Dune (PC-DOS), Earthbound, Chrono Trigger, and Final Fantasy Tactics.
			Out of high school I studied graphic design at community college, and then Computer Science at University.
            <br>
            <br>
            Since 2012, I've worked with a variety of companies, publishing games for mobile, PC, and consoles.
            <br>
            <br>These days, I mostly enjoy using C#, Godot, and Unity.
			<br>
            </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {},
}
</script>

<style scoped>
.img
{
    max-width: 35%;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
.box
{
    display: inline-block;
    max-width: 40%
}
</style>
