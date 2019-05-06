<template>
  <section class="country-title">
    <img :src="getImgPath" :alt="getAltDescription" class="flag" />
    <h1>{{ name.toUpperCase() }}</h1>
    <h2>in Miami</h2>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    getImgPath() {
      return require(`~/assets/${this.name}-flag.png`)
    },
    getAltDescription() {
      return `The flag of ${name}`
    },
  },
}
</script>

<style>
.country-title {
  color: white;
  justify-self: center;
  display: grid;
  justify-items: center;
  grid-auto-rows: min-content;
}
.flag {
  max-width: 50px;
  margin: 20px 0 10px;
}
h1 {
  font-size: 46px;
}
h2 {
  font-size: 26px;
  font-weight: 400;
}
</style>
