<template>
  <section class="container">
    <div class="landing">
      <nuxt-link :to="{ name: 'intro-video' }">
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
.container {
  font-family: 'Caviar Dreams', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('~assets/logo-bg.svg');
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
