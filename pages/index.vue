<template>
  <!-- <section class="container" :style="{ backgroundImage: `url(${logo})` }"> -->
  <section class="container">
    <div class="landing">
      <nuxt-link :to="{ name: 'discover' }">
        <h1 class="discover-header">
          DISCOVER THE WORLD<br />
          IN <span class="city">MIAMI</span>
        </h1>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
:root {
  --black: #231f20;
  --pink: #e984b5;
}

@font-face {
  font-family: 'Caviar Dreams';
  src: url('~static/fonts/CaviarDreams.ttf');
}

a {
  color: white;
  text-decoration: none;
}

.container {
  font-family: 'Caviar Dreams', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('~assets/logo.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--black);
}

.discover-header {
  font-size: 30px;
  margin-top: 70vh;
}

.city {
  color: var(--pink);
}
</style>
