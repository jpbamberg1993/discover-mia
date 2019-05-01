<template>
  <div class="countries-page">
    <Banner />
    <h1 class="title">Pick your country</h1>
    <div v-for="country in countries" :key="country.id" class="country">
      <nuxt-link :to="{ name: 'about', params: { countryId: country.id } }">
        <img :src="getFlagImg(country.name)" :alt="getFlagAlt(country.name)" @click="setCountryId(country.id)" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/banner'

export default {
  components: {
    Banner,
  },
  computed: {
    countries() {
      return this.$store.state.countries.all
    },
  },
  methods: {
    getFlagAlt(name) {
      return `Flag of ${name.charAt(0).toUpperCase() + name.slice(1)}`
    },
    getFlagImg(name) {
      const imgUrl = require(`~/assets/${name}.svg`)
      return imgUrl
    },
    setCountryId(id) {
      this.$store.dispatch('countries/setCurrentCountryId', id)
    },
  },
}
</script>

<style scoped>
.countries-page {
  display: grid;
}
.title {
  color: white;
  justify-self: center;
  margin: 20px 0;
}
</style>
