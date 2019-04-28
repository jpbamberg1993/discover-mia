<template>
  <nuxt-link :to="{ name: 'countries' }">
    <video src="~assets/miami.mp4" autoplay>
      Your browser does not support video
    </video>
  </nuxt-link>
</template>

<script>
export default {
  middleware: 'video-redirect',
}
</script>

<style></style>
